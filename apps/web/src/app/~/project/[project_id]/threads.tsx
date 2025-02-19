'use client';

import { UserAvatar } from '@/components/Avatar/Avatar';
import { GridViewer } from '@/components/GridViewer/GridViewer';
import CommentInput from '@/components/CommentInput/CommentInput';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { getThreads } from '@/queries/threads';
import useSupabaseBrowser from '@/util/supabase/client';
import { useInsertMutation, useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { formatDistanceToNow } from 'date-fns';
import { ThreadComments } from './threadComments';
import { splitURL } from '@/util/helpers/url';
import { CommentArea, UserComment } from '@/components/Comment/Comment';
import { Separator } from '@/components/ui/separator';
import { Loader } from '@/components/ui/loader';
import SearchBar from '@/components/SearchBar/SearchBar';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TabsContent } from '@radix-ui/react-tabs';
import { useQueryState } from 'nuqs';
import { CircleCheck, CircleEllipsis, MessagesSquare } from 'lucide-react';

type Tabs = 'all' | 'resolved' | 'unresolved';

const Threads = ({ projectId }: { projectId: string | number }) => {
  const [_, setSearchValue] = useQueryState('search', {
    defaultValue: '',
  });
  const [tab, setTab] = useQueryState('tab', { defaultValue: 'all' });

  return (
    <div>
      <SearchBar
        className="my-5 w-full max-w-full md:my-0 md:max-w-sm"
        placeholder="Search Threads..."
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <Tabs value={tab} onValueChange={(e) => setTab(e)}>
        <TabsList className="my-5 w-full">
          <TabsTrigger value="all">
            <MessagesSquare className="mr-1 size-4" /> All
          </TabsTrigger>
          <TabsTrigger value="resolved">
            <CircleCheck className="mr-1 size-4" /> Resolved
          </TabsTrigger>
          <TabsTrigger value="unresolved">
            <CircleEllipsis className="mr-1 size-4" />
            Unresolved
          </TabsTrigger>
        </TabsList>
        <TabsContent value="unresolved">
          <ThreadsGrid type="unresolved" projectId={projectId} />
        </TabsContent>
        <TabsContent value="all">
          <ThreadsGrid type="all" projectId={projectId} />
        </TabsContent>
        <TabsContent value="resolved">
          <ThreadsGrid type="resolved" projectId={projectId} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Threads;

interface ThreadsGridProps {
  projectId: number | string;
  type: Tabs;
}

const ThreadsGrid = ({ projectId, type }: ThreadsGridProps) => {
  const [searchValue, _] = useQueryState('search', {
    defaultValue: '',
  });

  const supabase = useSupabaseBrowser();
  const query = getThreads(supabase, { search: { value: searchValue } })
    .order('created_at', { ascending: false })
    .eq('website.projects.id', Number(projectId));
  if (type === 'resolved') query.eq('resolved', true);
  if (type === 'unresolved') query.eq('resolved', false);

  const { data, isLoading, isError } = useQuery(query);

  const {
    mutate: createNewComment,
    variables: pendingNewComment,
    isPending,
  } = useInsertMutation(supabase.from('comments'), ['id'], 'content');

  if (isError)
    return (
      <div className="flex h-full items-center justify-center">
        <p>Something went wrong, try refresh the page</p>
      </div>
    );

  if (isLoading)
    return (
      <div className="flex h-full items-center justify-center">
        <Loader variant={'spinner'} />
      </div>
    );

  return (
    <GridViewer>
      {data?.map((thread) => {
        return (
          <Drawer key={thread.id} direction="right" fixed>
            <DrawerContent
              className="w-[300px]"
              style={
                {
                  '--initial-transform': 'calc(100% + 8px)',
                } as React.CSSProperties
              }
            >
              <DrawerHeader>
                <DrawerTitle>Thread started by {thread.members?.display_name}</DrawerTitle>
                <DrawerDescription className="italic">
                  /{splitURL(thread.website?.domain ?? '').basePath}
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex h-full flex-col overflow-auto px-2">
                <UserComment
                  data={{
                    comment: {
                      content: thread.content ?? '',
                      createdAt: thread.created_at,
                    },
                    user: {
                      displayName: thread.members?.display_name ?? '',
                      profilePicture: thread.members?.profile_picture ?? '',
                      color: thread.members?.color ?? '',
                    },
                  }}
                />
                <Separator className="h-px w-full" />

                <ThreadComments threadId={thread.id} />
                {isPending && pendingNewComment && (
                  <UserComment
                    data={{
                      comment: {
                        content: pendingNewComment[0].content,
                      },
                    }}
                  />
                )}
              </div>

              <DrawerFooter className="w-full border-t !p-0">
                <CommentInput
                  disabled={isPending}
                  onCreate={(val) => createNewComment([{ thread_id: thread.id, content: val }])}
                />
              </DrawerFooter>
            </DrawerContent>

            <DrawerTrigger asChild>
              <button
                key={thread.id}
                className="flex w-96 flex-col justify-start rounded border px-2 py-3 text-left hover:border-accent hover:bg-accent/10"
              >
                <div className="flex w-full items-start justify-start">
                  <UserAvatar src={thread.members?.profile_picture ?? ''} color={thread.members?.color} />
                  <span className="ml-2 flex w-full flex-col">
                    <span className="flex w-full items-center justify-between">
                      <span>{thread.members?.display_name}</span>
                      <span className="bg-background px-2 text-xs italic">
                        /{splitURL(thread.website?.domain ?? '').basePath}
                      </span>
                    </span>
                    <span className="text-xs">
                      {formatDistanceToNow(thread.created_at, {
                        addSuffix: true,
                      })}
                    </span>
                  </span>
                </div>
                <div className="mt-2 flex flex-col">
                  <CommentArea withoutExpanding value={thread.content ?? ''} />
                </div>
              </button>
            </DrawerTrigger>
          </Drawer>
        );
      })}
    </GridViewer>
  );
};
