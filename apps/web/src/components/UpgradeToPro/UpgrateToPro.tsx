'use client';

import { Button } from '@kudo/ui';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@kudo/ui';
import { type ReactNode, useState } from 'react';
import useSupabaseBrowser from '@/util/supabase/client';
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query';
import { getTeams } from '@/queries/teams';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { plans } from '@/features/Pricing/plans';
import NumberFlow from '@number-flow/react';
import { Check } from 'lucide-react';

/**
 * children should be {@link DialogTrigger}
 * TODO: abstract this for all plans
 */
const UpgradeToProDialog = ({ children, teamId }: { children: ReactNode; teamId: number }) => {
  const supabase = useSupabaseBrowser();
  const { data, isLoading, isError } = useQuery(getTeams(supabase).eq('id', teamId).maybeSingle());

  const isMonthly = true;

  const plan = plans[1];

  const [dialog, setDialog] = useState(false);
  return (
    <Dialog onOpenChange={setDialog} open={dialog}>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upgrade {data?.name} To Pro</DialogTitle>
          <DialogDescription>Upgrade your team to Pro in order to add more members</DialogDescription>
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
            'p-6 bg-background text-center lg:flex lg:flex-col lg:justify-center relative',
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
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }}
                  formatter={(value) => `$${value}`}
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
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                  <span className="text-left">{feature}</span>
                </li>
              ))}
            </ul>

            <hr className="w-full my-4" />
            <p className="mt-6 text-xs leading-5 text-muted-foreground">{plan.description}</p>
          </div>
        </motion.div>

        <DialogFooter>
          <Button className="w-full">Get Pro</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpgradeToProDialog;
