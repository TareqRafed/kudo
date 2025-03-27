'use client';

import { GridViewer } from '@/components/GridViewer/GridViewer';
import IconAvatar from '@/components/IconPicker/IconAvatar';
import InfiniteScroll from '@/components/InfiniteScroll';
import SearchBar from '@/components/SearchBar/SearchBar';
import { URLFormatter } from '@/components/URLFormatter/URLFormatter';
import { getCurrentMemberWithMetadata } from '@/queries/members';
import { getProjects } from '@/queries/projects';
import useSupabaseBrowser from '@/util/supabase/client';
import {
  Button,
  Loader,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@kudo/ui';
import { Tabs as TabsIcon } from '@phosphor-icons/react';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';
import { formatDistanceToNow } from 'date-fns';
import { Building, ListTodo, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useQueryState } from 'nuqs';
import { Container } from './settings/layout-ui';
import { useBreadcrumbs } from '@/components/Breadcrumb';
import JavaScriptIcon from '@/assets/icons/javascript.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import Image from 'next/image';
import { env } from '@/lib/env';

export default function Dashboard() {
  useBreadcrumbs([{ label: 'Home', href: '/~' }]);
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
          <Container className="my-0 rounded-sm border bg-card">
            <Borading />
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
                    Show Threads
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

const Borading = () => {
  return (
    <div className="px-4 py-6 overflow-auto">
      <h1 className="text-2xl text-primary">Setting Up Your Project</h1>
      <Separator className="my-5 w-full" />
      <p className="my-5">
        For any questions or issues, feel free to reach out to us at{' '}
        <Link href={'mailto:t@trykudo.com'} className="text-primary inline-block">
          t@trykudo.com
        </Link>{' '}
        (we do check our emails)
      </p>

      <Separator className="w-full opacity-50" />

      <Tabs defaultValue="extension">
        <div className="my-5">
          <h2 className="text-xl text-primary">Platform</h2>
          <TabsList className="border-none h-full flex justify-center items-center space-x-2">
            <TabsTrigger value="extension" asChild>
              <Button className="p-1 h-20 w-20" variant={'secondary'}>
                <span className="flex flex-col items-center  space-y-1">
                  <Image className="size-9" alt="Google Chrome Logo" src={ChromeIcon} />
                  <span>Extesnion</span>
                </span>
              </Button>
            </TabsTrigger>
            <Tooltip>
              <TooltipTrigger asChild>
                <span>
                  <TabsTrigger disabled value="web" asChild>
                    <Button className="p-1 h-20 w-20" variant={'secondary'}>
                      <span className="flex flex-col items-center  space-y-1">
                        <Image className="size-9" alt="JavaScript Logo" src={JavaScriptIcon} />
                        <span>Web</span>
                      </span>
                    </Button>
                  </TabsTrigger>
                </span>
              </TooltipTrigger>
              <TooltipContent>Soon</TooltipContent>
            </Tooltip>
          </TabsList>
        </div>

        <Separator className="w-full opacity-50" />
        <TabsContent value="extension">
          <Extension />
        </TabsContent>
        <TabsContent value="web">
          <Javascript />
        </TabsContent>
      </Tabs>

      <Separator className="w-full" />

      <p className="mt-4 text-primary">🚀🚀🚀</p>
    </div>
  );
};

const Extension = () => {
  return (
    <>
      <h2 className="text-xl text-primary mt-4 mb-2">1. Install the Extension</h2>
      <p>
        Before anything else, install the extension. Currently, it&apos;s available only on{' '}
        <span className="text-accent-foreground">Chrome</span>. Very soon, we will ship NPM package. So you can
        integrate with any project internally.
      </p>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <li>
          Go to the{' '}
          <a
            href={env.NEXT_PUBLIC_CHROME_WEBSTORE_URL}
            target="_blank"
            className="text-accent-foreground underline"
            rel="noreferrer"
          >
            Chrome Web Store
          </a>{' '}
        </li>
        <li>
          Click the <span className="">&quot;Add to Chrome&quot;</span> button.
        </li>
        <li>Pin the extension for easy access.</li>
      </ul>

      <Separator className="w-full opacity-50" />

      <h2 className="text-xl text-primary mt-4 mb-2">2. Open the Extension</h2>
      <p>After installation, click on the extension icone to get the toolbar.</p>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <li>
          Click on <MessageCircle className="inline-block" /> to start a thread.
        </li>
        <li>The threads will stick to the elements where they were created, your team can always see those threads.</li>
        <li>If the toolbar is active, you will be able to see your team threads.</li>
      </ul>

      <Separator className="w-full opacity-50" />

      <h2 className="text-xl text-primary mt-4 mb-2">Pro Tips</h2>
      <ul className="list-disc pl-6 space-y-1 my-3">
        <li>
          <span className="text-primary">Stay Updated:</span> We&apos;re constantly improving, so keep an eye out for
          extension updates.
        </li>
        <li>
          <span className="text-primary">Report Bugs:</span> If something doesn&apos;t work, it&apos;s not your fault
          (probably). Let us know!
        </li>
      </ul>
    </>
  );
};

const Javascript = () => {
  return <></>;
};
