'use client';

import IconPicker from '@/components/IconPicker/IconPicker';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Form, FormRow, FormSubmit } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { getTeams } from '@/queries/teams';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery, useUpdateMutation } from '@supabase-cache-helpers/postgrest-react-query';
import { useQueryClient } from '@tanstack/react-query';
import { SettingsIcon } from 'lucide-react';
import { ComponentPropsWithoutRef, useState } from 'react';
import { z } from 'zod';

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Should more than 2 characters' })
    .max(50, { message: 'Should be more than 50 characters' }),
  icon: z.object({
    logo: z.string(),
    theme: z.string(),
  }),
});

interface Props extends ComponentPropsWithoutRef<typeof DrawerContent> {
  teamId: string | number;
}

const TeamSettingsDrawer = ({ teamId }: Props) => {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError } = useQuery(getTeams(supabase).eq('id', teamId).maybeSingle());
  const {
    data: teamSummary,
    isLoading: teamSummaryLoading,
    isError: teamSummaryError,
  } = useQuery(supabase.rpc('team_users_count', { _team_id: Number(teamId) }).maybeSingle());
  const [drawer, setDrawer] = useState(false);

  const query = useQueryClient();
  const { toast } = useToast();
  const { mutate, isPending } = useUpdateMutation(supabase.from('teams'), ['id'], 'name, theme, logo', {
    onSuccess: () => {
      query.invalidateQueries({ queryKey: ['members_teams'] });
      toast({ description: 'Team Updated Succesfully' });
      setDrawer(false);
    },
  });

  return (
    <Drawer direction="right" open={drawer} onOpenChange={setDrawer}>
      <DrawerTrigger asChild>
        <Button status={`${isLoading ? 'loading' : 'ready'}`} variant={'ghost'} size={'icon'}>
          <SettingsIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent asChild>
        <Form
          onValidSubmit={e => {
            mutate({
              name: e.name,
              logo: e.icon.logo,
              theme: e.icon.theme,
              id: data?.id,
            });
          }}
          schema={formSchema}
          className="h-full">
          <DrawerHeader>
            <DrawerTitle className="flex items-center space-x-2">{data?.name}</DrawerTitle>
            <DrawerDescription>Edit team settings and billing options</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col justify-between px-5">
            <FormRow
              defaultValue={{ logo: data?.logo, theme: data?.theme }}
              render={({ field }) => {
                return (
                  <IconPicker
                    onIconChange={(icon, color) => field.onChange({ logo: icon, theme: color })}
                    defaultIcon={data?.logo}
                    defaultColor={data?.theme}
                  />
                );
              }}
              name="icon"
              label="Icon"
            />
            <FormRow name="name" htmlFor="name" label="Name">
              <Input id="name" defaultValue={data?.name} />
            </FormRow>
            <Separator className="my-5" />
            <div className="space-y-5">
              {!teamSummaryLoading && !teamSummaryError && (
                <FormRow name="usage" label="Usage">
                  <span className="text-right text-xs">
                    {teamSummary?.total_count}/{teamSummary?.max_users} Member
                  </span>
                </FormRow>
              )}
              <FormRow name="tier" label="Tier" hint={data?.tiers?.name}>
                <Button disabled={data?.tiers?.name != 'Free'} size={'sm'} variant={'outline'}>
                  Upgrade to Pro
                </Button>
              </FormRow>
              <Button disabled={data?.tiers?.name == 'Free'} size={'sm'} className="w-full" variant={'destructive'}>
                Cancel Subscription
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <FormSubmit status={isPending ? 'loading' : 'ready'}>Submit</FormSubmit>
            <DrawerClose asChild>
              <Button disabled={isPending} size="sm" variant="outline">
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </Form>
      </DrawerContent>
    </Drawer>
  );
};

export default TeamSettingsDrawer;
