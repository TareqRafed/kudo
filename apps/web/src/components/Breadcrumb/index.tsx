'use client';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Skeleton,
} from '@kudo/ui';
import { Fragment, type ReactNode, createContext, useContext, useEffect, useState } from 'react';

type BreadCrumbState = {
  label: string;
  href?: string;
};

type BreadcrumbContextType = {
  items: BreadCrumbState[];
  setBreadcrumbs: (items: BreadCrumbState[]) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

export function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BreadCrumbState[]>([]);

  return (
    <BreadcrumbContext.Provider value={{ items, setBreadcrumbs: setItems }}>{children}</BreadcrumbContext.Provider>
  );
}

export function useBreadcrumbs(newItems: BreadCrumbState[] = []) {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider');
  }
  // biome-ignore lint/correctness/useExhaustiveDependencies: causes infinite loop
  useEffect(() => {
    context.setBreadcrumbs(newItems);
  }, []);
  return context;
}

export function DynamicBreadcrumb() {
  const { items } = useBreadcrumbs();

  return (
    <Breadcrumb className="h-5">
      <BreadcrumbList>
        {items.length === 0 ? (
          <BreadcrumbItem>
            <BreadcrumbEllipsis />
          </BreadcrumbItem>
        ) : null}
        {items.map((item, index) => (
          <Fragment key={item.label}>
            <BreadcrumbItem>
              {item.href ? (
                <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
            {index < items.length - 1 && <BreadcrumbSeparator />}
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
