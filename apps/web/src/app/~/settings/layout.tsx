'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ReactNode, Fragment, useState, createContext, useContext } from 'react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbContextType = {
  items: BreadcrumbItem[];
  setBreadcrumbs: (items: BreadcrumbItem[]) => void;
};

const BreadcrumbContext = createContext<BreadcrumbContextType | undefined>(undefined);

function BreadcrumbProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<BreadcrumbItem[]>([]);

  const setBreadcrumbs = (newItems: BreadcrumbItem[]) => {
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

function DynamicBreadcrumb() {
  const { items } = useBreadcrumbs();

  return (
    <Breadcrumb className="h-[20px]">
      <BreadcrumbList>
        {items.map((item, index) => (
          <Fragment key={index}>
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

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbProvider>
        <div className="mb-5">
          <DynamicBreadcrumb />
        </div>
        <div>{children}</div>
      </BreadcrumbProvider>
    </>
  );
}
