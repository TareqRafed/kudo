'use client';

import IconPicker from '@/components/IconPicker/IconPicker';
import { Input } from '@kudo/ui';
import useSupabaseBrowser from '@/util/supabase/client';
import { Container, Header } from '../../layout-ui';
import { useBreadcrumbs } from '@/components/Breadcrumb';
import { Form, FormFooter, FormGroup, FormRow, FormSeparator, FormSubmit } from '@kudo/ui';
import { z } from 'zod';
import { useInsertMutation } from '@supabase-cache-helpers/postgrest-react-query';
import { useToast } from '@kudo/ui';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  name: z.string(),
  icon: z.object({
    logo: z.string(),
    theme: z.string(),
  }),
});

const NewTeam = () => {
  useBreadcrumbs([
    { label: 'Home', href: '/~' },
    { label: 'Settings', href: '/~/settings' },
    { label: 'Teams', href: '/~/settings/teams' },
    { label: 'Add Team' },
  ]);

  const router = useRouter();

  const { toast } = useToast();

  const supabase = useSupabaseBrowser();
  const { mutate, isError, isPending, isSuccess } = useInsertMutation(
    supabase.from('teams'),
    ['id'],
    'name, theme, logo',
    {
      onSuccess: () => {
        toast({ description: 'Team Created' });
        router.push('/~/settings/teams');
      },
      onError: (e) => {
        toast({ variant: 'destructive', description: e.message });
      },
    },
  );

  return (
    <>
      <Header title="Add new team" description="Create new team to seperate comments from other users" />
      <Container>
        <Form
          schema={formSchema}
          onValidSubmit={(e) => mutate([{ name: e.name, theme: e.icon.theme, logo: e.icon.logo }])}
        >
          <FormGroup>
            <FormRow
              render={({ field }) => {
                return <IconPicker onIconChange={(icon, color) => field.onChange({ theme: color, logo: icon })} />;
              }}
              name="icon"
              label="Icon"
            />
            <FormSeparator />
            <FormRow name="name" label="Team Name">
              <Input placeholder="Mysterious Team" />
            </FormRow>
          </FormGroup>
          <FormFooter>
            <FormSubmit disabled={isSuccess} status={isPending ? 'loading' : 'ready'}>
              Create Team
            </FormSubmit>
          </FormFooter>
        </Form>
      </Container>
    </>
  );
};

export default NewTeam;
