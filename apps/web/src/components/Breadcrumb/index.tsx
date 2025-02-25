import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@kudo/ui';
import { Fragment, type ReactNode, createContext, useContext, useState } from 'react';

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

  const setBreadcrumbs = (newItems: BreadCrumbState[]) => {
    setItems(newItems);
  };

  return <BreadcrumbContext.Provider value={{ items, setBreadcrumbs }}>{children}</BreadcrumbContext.Provider>;
}

export function useBreadcrumbs() {
  const context = useContext(BreadcrumbContext);
  if (context === undefined) {
    throw new Error('useBreadcrumbs must be used within a BreadcrumbProvider');
  }
  return context;
}

export function DynamicBreadcrumb() {
  const { items } = useBreadcrumbs();

  return (
    <Breadcrumb className="h-[20px]">
      <BreadcrumbList>
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
