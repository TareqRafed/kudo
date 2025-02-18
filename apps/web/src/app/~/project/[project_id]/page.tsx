import { getThreads } from '@/queries/threads';
import { createClient } from '@/util/supabase/server';
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { notFound } from 'next/navigation';
import Threads from './threads';

const ThreadsGrid = async ({ params }: { params: Promise<{ project_id: string }> }) => {
  const parameters = await params;
  if (!parameters.project_id) notFound();

  const supabase = await createClient();

  const queryClient = new QueryClient();
  await prefetchQuery(queryClient, getThreads(supabase).eq('projects.id', Number(parameters.project_id)));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Threads projectId={parameters.project_id} />
    </HydrationBoundary>
  );
};

export default ThreadsGrid;
