'use client';

import { GridViewer } from '@/components/GridViewer/GridViewer';
import IconAvatar from '@/components/IconPicker/IconAvatar';
import InfiniteScroll from '@/components/InfiniteScroll';
import SearchBar from '@/components/SearchBar/SearchBar';
import { URLFormatter } from '@/components/URLFormatter/URLFormatter';
import { getCurrentMemberWithMetadata } from '@/queries/members';
import { getProjects } from '@/queries/projects';
import useSupabaseBrowser from '@/util/supabase/client';
import { Loader, Tabs, TabsContent, TabsList, TabsTrigger } from '@kudo/ui';
import { Tabs as TabsIcon } from '@phosphor-icons/react';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { formatDistanceToNow } from 'date-fns';
import { Building, ListTodo } from 'lucide-react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import Markdown from 'react-markdown';
import { Container } from './settings/layout-ui';

export default function Dashboard() {
  const [_, setSearchValue] = useQueryState('search');
  return (
    <>
      <Tabs defaultValue="projects">
        <div className="flex flex-col justify-between">
          <SearchBar
            className="my-5 w-full max-w-full md:my-0 md:max-w-sm"
            placeholder="Search Projects..."
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <TabsList className="my-5">
            <TabsTrigger value="projects">
              <Building className="size-5 pr-1" /> Projects
            </TabsTrigger>
            <TabsTrigger value="invites">
              <ListTodo className="size-5 pr-1" />
              On Boarding
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="projects">
          <ProjectsGrid />
        </TabsContent>
        <TabsContent value="invites">
          <Container className="rounded-sm border bg-muted">
            <Markdown className={'p-5'}>{md}</Markdown>
          </Container>
        </TabsContent>
      </Tabs>
    </>
  );
}

const ProjectsGrid = () => {
  const [searchValue, _] = useQueryState('search');
  const debouncedSearchValue = useDebounce(searchValue, 300);

  const supabase = useSupabaseBrowser();

  const { data: user } = useQuery(getCurrentMemberWithMetadata(supabase));

  const {
    data: projectsResponse,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam }) => {
      const res = await getProjects(supabase, {
        pagination: { size: 20, page: pageParam },
        search: { value: debouncedSearchValue ?? '' },
      }).eq('team_id', user?.selected_team_id ?? 0);
      return res;
    },
    queryKey: ['projects', user?.selected_team_id, debouncedSearchValue, supabase],
    initialPageParam: 0,
    getNextPageParam: (lastPage, _, lastPageParam, __) => {
      if (!lastPage.count) return null;
      const totalPages = Math.ceil(lastPage.count / 20);
      return totalPages === lastPageParam + 1 ? null : lastPageParam + 1;
    },
    enabled: !!user?.selected_team_id,
  });

  const projects = projectsResponse?.pages
    .flatMap((res) => res.data)
    .flat()
    .filter((item) => item != null);

  if (isError) return <>{JSON.stringify(error.message)}</>;
  if (isLoading) return <Loader />;

  if (!projects?.length)
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div>
          <TabsIcon
            size={300}
            strokeWidth={0.5}
            strokeOpacity={0.5}
            weight="thin"
            className="[&>:last-child]:[stroke:#fff] [&>path]:[fill:none] [&>path]:[stroke-width:2px] [&>path]:[stroke:currentColor]"
          />
        </div>
        <div className="-mt-10 flex w-full flex-col justify-center text-center text-2xl font-thin">
          <span className="mt-1">No Projects</span>
        </div>
        <p className="text-sm font-light italic text-muted-foreground">
          Start by visiting the website you want to collaborate on, and click on the extension icon.
        </p>
        <span className="mt-5 flex w-full items-center justify-center space-x-2 text-sm">
          <IconAvatar className="mr-3 size-6" name={user?.teams?.logo} theme={user?.teams?.theme} />
          {user?.teams?.name}
        </span>
      </div>
    );

  return (
    <div>
      <InfiniteScroll
        isLoadingIntial={isLoading}
        isLoadingMore={isFetchingNextPage}
        loadMore={() => hasNextPage && fetchNextPage()}
      >
        <GridViewer>
          {projects?.map((item) => (
            <div key={item.id} className="w-full overflow-hidden rounded-sm border bg-card shadow-md">
              <div className="p-4">
                <div>
                  <URLFormatter showDomain url={item.domain} />
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs">
                      {formatDistanceToNow(item?.created_at, {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                  <Link href={`~/project/${item.id}`} className="flex items-start text-sm hover:underline">
                    Show Threads{' '}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </GridViewer>
      </InfiniteScroll>
    </div>
  );
};

const md = `
# Setting Up Your Extension Monitoring

For any questions or issues, feel free to reach out to us at **support@yourtool.dev** (yes, we actually check it) or join our thriving Discord community at **yourtool.dev/chat** (where everyone is somehow an expert).

---


## 1. Install the Extension

Before anything else, install the extension. Currently, it’s available only on **Chrome** (because Firefox can wait, apparently).

1. Go to the [Chrome Web Store](https://chrome.google.com/webstore) and search for **"YourTool"** (or just click the link—we know you’re going to).
2. Click the **"Add to Chrome"** button.
3. Accept the permissions (it’s fine, we’re not stealing your data… probably).

---

## 2. Open the Extension
After installation, click the little puzzle piece icon in the top-right corner of your browser (yes, it’s hidden—blame Chrome).

1. Pin the extension for easy access (if you can figure out how).
2. Click the extension whenever you want to:
- Add a comment.
- View threads.
- Marvel at how much better your app is than everyone else’s.

---

## 3. Add Your API Key (Don’t Worry, It’s Safe)
To use the extension, you’ll need an API key. Think of it as your VIP pass to the tool.

1. Open the extension.
2. Paste your API key into the setup box (because typing it out is too much work).
3. Click **Save** (and watch the magic happen).

If you don’t have an API key yet, generate one from your account dashboard at **yourtool.dev/dashboard**.

---


## 4. Start Using the Extension
That’s it! You’re all set up. To:
- **Add a Comment:** Highlight any text, click the extension, and write your masterpiece.
- **View Threads:** Click the extension, navigate through the threads, and enjoy the drama.

---

## Pro Tips
- **Stay Updated:** We’re constantly improving, so keep an eye out for extension updates (or don’t and miss all the cool stuff).
- **Report Bugs:** If something doesn’t work, it’s not your fault (probably). Let us know!

---

Happy commenting! 🚀


`;
