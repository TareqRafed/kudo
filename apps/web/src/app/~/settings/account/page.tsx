'use client';

import { useQuery, useUpdateMutation } from '@supabase-cache-helpers/postgrest-react-query';
import { Container, Header, Subheader } from '../layout-ui';
import { AvatarUploader } from '@/components/Avatar/AvatarUploader';
import { Form, FormCancel, FormFooter, FormGroup, FormRow, FormSubmit } from '@/components/ui/form';
import * as z from 'zod';
import { Input } from '@/components/ui/input';
import useSupabaseBrowser from '@/util/supabase/client';
import { useMutation, useQueryClient, useQuery as useQueryTan } from '@tanstack/react-query';
import { TypedSupabaseClient } from '@/types/typedClientQuery.types';
import { GithubLogo } from '@phosphor-icons/react';
import { Button } from '@/components/ui/button';
import { getCurrentMemberWithMetadata } from '@/queries/members';
import { Trash } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { uploadImage } from '@/util/images/upload';
import { Provider, UserIdentity } from '@supabase/supabase-js';
import Confirm from '@/components/Confirm/Confirm';

const formSchema = z.object({
  profile_picture: z.string().nullable().optional(),
  display_name: z.string(),
});

const getIdentities = async (client: TypedSupabaseClient) => {
  const { data, error } = await client.auth.getUserIdentities();
  if (error) throw new Error('Failed to retrieve user identities');
  return data;
};

const deleteAccount = async (client: TypedSupabaseClient) => {
  const { data, error } = await client.rpc('delete_member');
  if (error) throw new Error(error.message ?? 'Failed to delete user, try again later');
  return data;
};

const Account = () => {
  // const { data } = useQuery(getUser);
  return (
    <>
      <Header title="Account" description="Overview of Account Settings" />
      <Container>
        <ProfileSettings />
        <IdentitiesSettings />
        <DangerZone />
      </Container>
    </>
  );
};

export default Account;

const ProfileSettings = () => {
  const supabase = useSupabaseBrowser();
  const {
    data: member,
    isLoading: memberLoading,
    isError: isMemberError,
  } = useQuery(getCurrentMemberWithMetadata(supabase));

  const { toast } = useToast();

  const { mutateAsync: updateMember } = useUpdateMutation(
    supabase.from('members'),
    ['id'],
    'display_name, profile_picture',
    {
      revalidateTables: [{ table: 'members_with_metadata' }, { table: 'rpc/get_current_member_with_metadata' }],
      onSuccess: () =>
        toast({
          description: 'Changes saved',
        }),

      onError: (e) => {
        toast({
          variant: 'destructive',
          description: e.message ?? 'Something went wrong',
        });
      },
    },
  );

  return (
    <Form
      schema={formSchema}
      onValidSubmit={async (e) => {
        if (!member?.id) return;
        let newImage: string | null = null;

        if (e.profile_picture && e.profile_picture.startsWith('data:image/')) {
          newImage = await uploadImage(e.profile_picture);
        }

        await updateMember({
          id: member.id,
          ...(newImage && { profile_picture: newImage }),
          display_name: e.display_name,
        });
      }}
    >
      <FormGroup>
        <FormRow
          isLoading={memberLoading}
          name="profile_picture"
          htmlFor="profile_picture"
          label="Profile Picture"
          defaultValue={member?.profile_picture}
          render={({ field }) => {
            return (
              <AvatarUploader
                id="profile_picture"
                disabled={field.disabled}
                onBlur={field.onBlur}
                color={member?.color ?? undefined}
                src={field.value}
                onImageUpload={field.onChange}
                className="size-12"
              />
            );
          }}
        ></FormRow>
        <FormRow isLoading={memberLoading} name="display_name" label="Display Name">
          <Input defaultValue={member?.display_name ?? ''} />
        </FormRow>
      </FormGroup>
      <FormFooter>
        <FormCancel>Cancel</FormCancel>
        <FormSubmit>Save Changes</FormSubmit>
      </FormFooter>
    </Form>
  );
};

const IdentitiesSettings = () => {
  return (
    <>
      <EmailAccountDetails />
      <GithubAccountDetails />
    </>
  );
};

const GithubAccountDetails = () => {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError } = useQueryTan({
    queryFn: () => getIdentities(supabase),
    queryKey: ['identities', supabase],
  });

  const { toast } = useToast();

  const query = useQueryClient();
  const { mutate: unlinkIdentity } = useMutation({
    mutationFn: async (identity: UserIdentity) => {
      return supabase.auth.unlinkIdentity(identity);
    },
    mutationKey: ['identities'],
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ['identities'] });
      toast({ description: 'Identity Unlinked' });
    },
    onError: (e) => {
      toast({ variant: 'destructive', description: e.message });
    },
  });

  const { mutate: linkIdentity } = useMutation({
    mutationFn: async (provider: Provider) => {
      return supabase.auth.linkIdentity({ provider });
    },
    mutationKey: ['identities'],
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ['identities'] });
      toast({ description: 'Identity Linked' });
    },
    onError: (e) => {
      toast({ variant: 'destructive', description: e.message });
    },
  });

  const githubIdentity = data?.identities.find((id) => id.provider === 'github');

  const action = !githubIdentity ? (
    <Button onClick={() => linkIdentity('github')} size={'sm'} variant={'outline'} className="flex">
      <span className="flex items-center justify-center">
        <GithubLogo className="mr-2" />
        Link Account
      </span>
    </Button>
  ) : (
    <Button
      size={'sm'}
      variant={'destructive'}
      onClick={() => unlinkIdentity(githubIdentity)}
      disabled={data?.identities.length == 1}
    >
      <span className="flex items-center justify-center">
        <GithubLogo className="mr-2" />
        Unlink Account
      </span>
    </Button>
  );

  if (isError) return <>Something went wrong</>;

  return (
    <>
      <Subheader title="Github" />
      <FormGroup>
        <FormRow isLoading={isLoading} name="github" label="Account">
          {action}
        </FormRow>
      </FormGroup>
    </>
  );
};

const changePasswordSchema = z.object({
  password: z
    .string()
    .min(7, { message: 'Password should be more than 6 chars' })
    .max(100, { message: "Password can't be more than 100 chaars" }),
});

const EmailAccountDetails = () => {
  const supabase = useSupabaseBrowser();
  const {
    data: member,
    isLoading: memberLoading,
    isError: isMemberError,
  } = useQuery(getCurrentMemberWithMetadata(supabase));
  const {
    data: identities,
    isLoading: identityLoading,
    isError: isIdentityError,
  } = useQueryTan({
    queryFn: () => getIdentities(supabase),
    queryKey: ['identities', supabase],
  });

  const { toast } = useToast();

  const { mutate: changePassword, isPending: changePasswordPending } = useMutation({
    mutationFn: (password: string) => supabase.auth.updateUser({ password }),
    onSuccess: () => {
      toast({ description: 'Password Changed Successfully' });
    },
    onError: (e) => {
      toast({
        variant: 'destructive',
        description: e.message ?? 'Something went wrong',
      });
    },
  });

  const emailIdentity = identities?.identities.find((id) => id.provider === 'email');

  const error = isIdentityError || isMemberError;

  if (error) return <>Something went wrong</>;

  if (emailIdentity)
    return (
      <>
        <Subheader title="E-mail" />
        <Form schema={changePasswordSchema} onValidSubmit={(e) => changePassword(e.password)}>
          <FormGroup>
            <FormRow isLoading={memberLoading} name="email" label="E-mail">
              <Input disabled value={member?.email ?? ''} />
            </FormRow>
            <FormRow isLoading={identityLoading} name="password" label="New Password">
              <Input defaultValue={''} placeholder="*******" type="password" />
            </FormRow>
          </FormGroup>
          <FormFooter>
            <FormSubmit status={changePasswordPending ? 'loading' : 'ready'}>Change Password</FormSubmit>
          </FormFooter>
        </Form>
      </>
    );

  return (
    <>
      <Subheader title="E-mail" />
      <FormGroup>
        <FormRow name="email" label="E-mail">
          <Input disabled value={member?.email ?? ''} />
        </FormRow>
      </FormGroup>
    </>
  );
};

const DangerZone = () => {
  const supabase = useSupabaseBrowser();

  const { toast } = useToast();

  const { mutateAsync: deleteUser, isPending: deletingUserPending } = useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      supabase.auth.signOut();
    },
    onError: (e) => {
      toast({
        variant: 'destructive',
        description: e.message ?? 'Something went wrong',
      });
    },
  });

  return (
    <>
      <Subheader className="text-destructive" title="Danger Zone" description="These actions are irreversible" />
      <FormGroup variant={'destructive'}>
        <FormRow name="account" label="Account">
          <Confirm
            isLoading={deletingUserPending}
            content="This will issue a deleting request of all your data which should take up to 48 hours. if you wish to cancel your request then just login again within 48 hours, note that all teams you have created will be deleted. if your account got deleted nothing can be undone."
            action={() => deleteUser(supabase)}
          >
            <Button size={'sm'} variant={'destructive'}>
              <span className="flex items-center justify-center">
                <Trash className="mr-2" />
                Delete Account
              </span>
            </Button>
          </Confirm>
        </FormRow>
      </FormGroup>
    </>
  );
};
