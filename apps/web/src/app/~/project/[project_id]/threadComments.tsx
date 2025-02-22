import { UserComment } from '@/components/Comment/Comment';
import { Separator, Skeleton } from '@kudo/ui';
import { getComments } from '@/queries/comments';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';

interface Props {
  threadId: number;
}

export const ThreadComments = ({ threadId }: Props) => {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError } = useQuery(
    getComments(supabase).order('created_at', { ascending: true }).eq('thread_id', threadId),
  );

  if (isError)
    return (
      <div className="h-full  mt-20 text-center w-full">
        <p> Something went wrong :(</p>
        <p className="text-xs">Try refresh the page</p>
      </div>
    );

  if (isLoading)
    return (
      <>
        {new Array(5).fill(0).map((_, i) => {
          return (
            <div key={i} className="mt-5 flex">
              <Skeleton className="mr-2 size-9 rounded-full" />
              <div className="flex size-full flex-col">
                <Skeleton className="h-2 w-1/2" />
                <Skeleton className="h-2 w-1/4" />
                <Skeleton className="mt-2 h-10 w-full" />
              </div>
            </div>
          );
        })}
      </>
    );
  if (!data) return <></>;

  return (
    <div className="h-full overflow-auto">
      {data.map((comment) => {
        return (
          <div key={comment.id}>
            <Separator className="mb-2 h-px w-full" />
            <UserComment
              data={{
                comment: {
                  content: comment.content,
                  createdAt: comment.created_at,
                },
                user: {
                  displayName: comment.members.display_name,
                  color: comment.members.color ?? '',
                  profilePicture: comment.members.profile_picture,
                },
              }}
            />
          </div>
        );
      })}
    </div>
  );
};
