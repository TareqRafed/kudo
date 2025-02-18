import React from 'react';

interface GridViewerProps {
  children: React.ReactNode;
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: string;
  className?: string;
}

export function GridViewer({
  children,
  columns = { sm: 2, md: 3, lg: 4, xl: 5 },
  gap = '4',
  className = '',
}: GridViewerProps) {
  const gridClasses = `grid gap-${gap} ${className}
    grid-cols-1
    ${columns.sm ? `sm:grid-cols-${columns.sm}` : ''}
    ${columns.md ? `md:grid-cols-${columns.md}` : ''}
    ${columns.lg ? `lg:grid-cols-${columns.lg}` : ''}
    ${columns.xl ? `xl:grid-cols-${columns.xl}` : ''}
  `;

  return <div className={gridClasses}>{children}</div>;
}
