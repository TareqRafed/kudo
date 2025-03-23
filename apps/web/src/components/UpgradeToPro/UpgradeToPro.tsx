'use client';

import { createCheckoutSession } from '@/actions/createCheckoutSession';
import { plans } from '@/features/Pricing/plans';
import { cn } from '@/lib/utils';
import { getTeams } from '@/queries/teams';
import useSupabaseBrowser from '@/util/supabase/client';
import { Button, Label, Switch } from '@kudo/ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@kudo/ui';
import NumberFlow from '@number-flow/react';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { type ReactNode, startTransition, useActionState, useState } from 'react';

/**
 * children should be {@link DialogTrigger}
 * TODO: abstract this for all plans
 */
const UpgradeToProDialog = ({ children, teamId }: { children: ReactNode; teamId: number }) => {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError } = useQuery(getTeams(supabase).eq('id', teamId).maybeSingle());

  const [isMonthly, setIsMonthly] = useState(true);

  const [checkoutRequestState, createCheckout, isCheckoutPending] = useActionState(createCheckoutSession, null);

  const plan = plans[1];

  const [dialog, setDialog] = useState(false);
  return (
    <Dialog onOpenChange={setDialog} open={dialog}>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        {JSON.stringify(checkoutRequestState)}
        <DialogHeader>
          <DialogTitle>Upgrade {data?.name} To Pro</DialogTitle>
          <DialogDescription>Keep the early-adopter pricing forever!</DialogDescription>
        </DialogHeader>
        <motion.div
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            type: 'spring',
            stiffness: 100,
            damping: 30,
            delay: 0.4,
            opacity: { duration: 0.5 },
          }}
          className={cn(
            'px-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative',
            'border-border',
            'flex flex-col',
          )}
        >
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-center gap-x-2">
              <span className="text-5xl font-thin tracking-tight text-foreground">
                <NumberFlow
                  value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                  format={{
                    style: 'currency',
                    currency: 'USD',
                  }}
                  locales={'en-US'}
                  transformTiming={{
                    duration: 500,
                    easing: 'ease-out',
                  }}
                  willChange
                  className="font-variant-numeric: tabular-nums"
                />
              </span>
              {plan.period !== 'Next 3 months' && (
                <span className="text-sm leading-6 tracking-wide text-muted-foreground">/ {plan.period}</span>
              )}
            </div>

            <p className="text-xs leading-5 text-muted-foreground">
              {isMonthly ? 'billed monthly' : 'billed annually'}
            </p>

            <ul className="mt-5 gap-2 flex flex-col">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-left">{feature}</span>
                </li>
              ))}
            </ul>

            <hr className="w-full my-4" />
            <span className="flex justify-center items-center space-x-2">
              <Label htmlFor="annual">Annual?</Label>
              <Switch
                id="annual"
                checked={!isMonthly}
                onCheckedChange={(checked) => setIsMonthly(!checked)}
                className="relative"
              />
            </span>
          </div>
        </motion.div>

        <DialogFooter>
          <Button
            type="button"
            status={isCheckoutPending ? 'loading' : 'ready'}
            onClick={() => {
              const fmData = new FormData();
              fmData.set('teamId', teamId.toString());
              fmData.set('isMonthly', String(isMonthly));
              startTransition(() => {
                createCheckout(fmData);
              });
            }}
            className="w-full"
          >
            Get Pro for{' '}
            <NumberFlow
              value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
              format={{
                style: 'currency',
                currency: 'USD',
              }}
              locales={'en-US'}
              transformTiming={{
                duration: 500,
                easing: 'ease-out',
              }}
              willChange
              className="font-variant-numeric: tabular-nums"
            />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeToProDialog;
