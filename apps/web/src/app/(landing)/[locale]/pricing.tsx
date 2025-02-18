'use client';

import { Pricing } from '@/components/Pricing/pricing';
import { plans } from '@/util/plans/plans';

function PricingBasic() {
  return (
    <div className="mx-auto w-full overflow-y-auto rounded-lg">
      <Pricing
        plans={plans}
        title="Simple, Transparent Pricing"
        description="Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support."
      />
    </div>
  );
}

export { PricingBasic };
