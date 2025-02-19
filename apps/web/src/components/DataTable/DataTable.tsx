'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  PaginationState,
  SortingState,
  Table as TableType,
  useReactTable,
} from '@tanstack/react-table';
import { ArrowDown, ArrowUp, Search } from 'lucide-react';
import { ReactNode, useMemo, useState } from 'react';

import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem } from '../ui/pagination';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Skeleton } from '../ui/skeleton';
import { cn } from '@/lib/utils';

interface DataTableProps<TData, TValue> {
  className: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  /**
   * If no filter object is passed
   * then filterting text won't show up
   */
  filter?: {
    /**
     * if manual is true, table will assume that the data is already filtered, useful for server side querying
     */
    manual?: boolean;
    placeholder: string;

    /**
     * key of column
     * Required if manual is false
     */
    key?: keyof TData;

    value?: string;
    onChange?: (val: string) => void;
  };

  /**
   * Shown near the searchbar
   */
  NavItems?: ReactNode;

  editable?: {
    onBlur: (row: TData) => void;
  };
  isLoading?: boolean;
  /**
   * number of rows for loading
   */
  fakeRows?: number;
  onRowClick?: (row: TData) => void;
  showCount?: boolean;

  /**
   * if pagination object doesn't exist, the pagination controllers won't be rendered
   */
  pagination?: {
    /**
     * if false, uses clinet rendering. if true server pagination should be filled
     */
    manual: boolean;

    /**
     * if true, disable page size selection
     */
    staticPageSize?: boolean;

    /**
     * Must be given if manual is true
     */
    rowCount?: number;

    /**
     * Must be given if manual is true
     */
    pageIndex?: number;

    /**
     * Must be given if manual is true
     */
    pageSize?: number;

    /**
     * called when page is change
     */
    onChange?: (val: PaginationState) => void;
  };

  /**
   * Enable sorting, for now. only server side sorting is supported
   */
  sort?: {
    sorting?: SortingState;
    setSort?: (sort: SortingState) => void;
  };
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filter,
  editable,
  isLoading,
  onRowClick,
  showCount,
  pagination,
  fakeRows,
  NavItems,
  sort,
  className,
}: DataTableProps<TData, TValue>) {
  const [editingCell, setEditingCell] = useState<{
    rowIndex: number | null;
    columnId: string | null;
  }>({ rowIndex: null, columnId: null });
  const handleDoubleClick = (rowIndex: number, columnId: string) => {
    if (!editable) return;
    setEditingCell({ rowIndex, columnId });
  };
  const handleBlur = (row: TData) => {
    setEditingCell({ rowIndex: null, columnId: null });
    editable?.onBlur(row);
  };

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const columnsMemo = useMemo(
    () =>
      isLoading
        ? columns.map((column) => ({
            ...column,
            cell: () => <Skeleton className="h-[21px] rounded-sm" />,
          }))
        : columns,
    [isLoading, columns],
  );

  const table = useReactTable({
    data: isLoading ? (Array(fakeRows ?? 10).fill({}) as TData[]) : data,
    columns: columnsMemo,
    getCoreRowModel: getCoreRowModel(),
    ...(pagination && { getPaginationRowModel: getPaginationRowModel() }),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    manualPagination: pagination?.manual,

    // pagination
    ...(pagination?.manual && { rowCount: pagination?.rowCount }),
    ...(pagination?.manual && { pageSize: pagination?.pageSize }),
    ...(pagination?.manual && { pageIndex: pagination?.pageIndex }),
    ...(pagination?.onChange && {
      onPaginationChange: (updater) => {
        if (typeof updater !== 'function') return; // @see https://stackoverflow.com/a/77946625
        const newPageInfo = updater(table.getState().pagination);
        pagination.onChange?.(newPageInfo);
      },
    }),
    autoResetPageIndex: false,

    // state
    initialState: {
      ...(!pagination?.manual && {
        pagination: {
          pageIndex: 0,
        },
      }),
    },

    state: {
      ...(sort?.sorting && {
        sorting: sort.sorting,
      }),
      sorting: sort?.sorting,
      columnFilters,
      ...(pagination?.manual && {
        pagination: {
          pageIndex: pagination.pageIndex ?? 0,
          pageSize: pagination.pageSize ?? 0,
        },
      }),
    },

    ...(sort?.setSort && {
      onSortingChange: (updater) => {
        if (typeof updater !== 'function') return; // @see https://stackoverflow.com/a/77946625
        const newPageInfo = updater(table.getState().sorting);
        sort.setSort?.(newPageInfo);
      },
    }),
  });

  const handleRowClick = (data: TData) => {
    if (onRowClick) onRowClick(data);
  };

  if (pagination?.manual) {
    if (!pagination.rowCount && pagination.rowCount !== 0) throw 'If manual is set. rowCount must be set';
    if (!pagination.pageSize && pagination.pageSize !== 0) throw 'If manual is set. pageSize must be set';
    if (!pagination.pageIndex && pagination.pageIndex !== 0) throw 'If manual is set. pageIndex must be set';
  }

  if (filter && !filter?.manual) {
    if (!filter?.key) throw 'If filter manual is not set. key must be set';
  }

  return (
    <div className={cn(['min-h-0 flex flex-col flex-1 rounded-md h-full', className])}>
      <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
        {filter && !filter.manual && (
          <div className="flex items-center p-4">
            <Input
              placeholder={filter.placeholder}
              value={(table.getColumn(filter.key as string)?.getFilterValue() as string) ?? ''}
              onChange={(event) => table.getColumn(filter.key as string)?.setFilterValue(event.target.value)}
              className="max-w-sm"
            />
          </div>
        )}
        {filter?.manual && (
          <div className="flex items-center py-4">
            <Search size={16} className="relative left-7 top-2 -translate-y-1/2" />
            <Input
              placeholder={filter.placeholder}
              defaultValue={filter.value}
              onChange={(event) => filter.onChange?.(event.target.value)}
              className="max-w-sm pl-10"
              type="search"
              name="search"
              id="search"
            />
          </div>
        )}
        <div>{NavItems}</div>
      </div>
      {showCount && (
        <div className="p-2 text-xs">
          Count: <b>{pagination?.rowCount || data.length}</b>
        </div>
      )}
      <div className="flex h-full flex-1 flex-col overflow-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className={cn([
                        'whitespace-nowrap sticky top-0 z-10',
                        sort && header.column.getCanSort() && 'cursor-pointer',
                        ``,
                      ])}
                      style={{
                        width: `${!header.getSize() ? '100%' : header.column.getSize()}px`,
                      }}
                      onClick={header.column.getToggleSortingHandler()}
                      key={header.id}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                      {{
                        asc: <ArrowDown className="inline size-4" />,
                        desc: <ArrowUp className="inline size-4" />,
                      }[header.column.getIsSorted() as string] ?? null}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                  onClick={() => handleRowClick(row.original)}
                  className={cn(['h-12 whitespace-nowrap', onRowClick && 'cursor-pointer border-b'])}
                >
                  {row.getVisibleCells().map((cell) => {
                    const isEditing = editingCell.rowIndex === row.index && editingCell.columnId === cell.column.id;
                    const isAppropriateToEdit = typeof cell.getValue() === 'string';
                    if (isEditing && isAppropriateToEdit) {
                      return (
                        <TableCell key={cell.id}>
                          <Input
                            onBlur={(e) =>
                              handleBlur({
                                ...row.original,
                                [cell.column.id]: e.target.value,
                              })
                            }
                            defaultValue={cell.getValue<string>()}
                          />
                        </TableCell>
                      );
                    }
                    return (
                      <TableCell onDoubleClick={() => handleDoubleClick(row.index, cell.column.id)} key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-14 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        {pagination && (
          <TablePagination
            isLoading={isLoading}
            staticPageSize={pagination.staticPageSize}
            table={table}
            length={pagination.rowCount || data.length}
          />
        )}
      </div>
    </div>
  );
}

const TablePagination = <TData,>({
  table,
  length,
  staticPageSize,
  isLoading,
}: {
  table: TableType<TData>;
  length: number;
  /**
   * if true, dropdown menu for changing size doesn't render
   */
  staticPageSize?: boolean;

  isLoading?: boolean;
}) => {
  const currentIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  const pageSizeOptions = [10, 20, 50, 100];

  if (isLoading) {
    return (
      <div className="flex w-full flex-col-reverse items-center justify-end space-x-2 p-4 lg:flex-row">
        <Skeleton className="h-8 w-12" />
        <Skeleton className="h-8 w-12" />
        <Skeleton className="h-8 w-12" />
        <PaginationEllipsis />
        <Skeleton className="h-8 w-12" />
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col-reverse items-center justify-end space-x-2 p-4 lg:flex-row">
      {!staticPageSize && (
        <Select
          value={String(table.getState().pagination.pageSize)}
          onValueChange={(e) => table.setPageSize(Number(e) || length)}
        >
          <SelectTrigger className="mt-5 w-[80px] lg:mt-0">
            <SelectValue placeholder="Page Count" />
          </SelectTrigger>
          <SelectContent>
            {pageSizeOptions.map((val) => (
              <SelectItem key={val} value={val.toString()}>
                {val}
              </SelectItem>
            ))}
            <SelectItem value={String(length)}>All</SelectItem>
          </SelectContent>
        </Select>
      )}
      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <Button variant="ghost" disabled={!table.getCanPreviousPage()} onClick={() => table.previousPage()}>
              Previous
            </Button>
          </PaginationItem>

          {currentIndex !== 0 && (
            <PaginationItem className="hidden lg:block">
              <Button onClick={() => table.setPageIndex(currentIndex - 1)} variant="ghost">
                {currentIndex}
              </Button>
            </PaginationItem>
          )}

          <PaginationItem>
            <Button onClick={() => table.setPageIndex(currentIndex)} variant="ghost" className="bg-accent">
              {currentIndex + 1}
            </Button>
          </PaginationItem>

          {currentIndex !== pageCount - 1 && (
            <PaginationItem className="hidden lg:block">
              <Button onClick={() => table.setPageIndex(currentIndex + 1)} variant="ghost">
                {currentIndex + 2}
              </Button>
            </PaginationItem>
          )}

          {currentIndex < pageCount - 2 && (
            <PaginationItem>
              <Popover>
                <PopoverTrigger asChild>
                  <Button size="sm" variant="ghost">
                    <PaginationEllipsis />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-32">
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-2">
                      <Label htmlFor="page">#</Label>
                      <Input
                        onBlur={(val) => {
                          let target = Number(val.target.value);
                          target -= 1;
                          if (target < 0) target = 0;
                          if (target >= pageCount) target = pageCount - 1;
                          table.setPageIndex(target);
                        }}
                        id="page"
                        min={1}
                        max={pageCount}
                        type="number"
                        defaultValue={currentIndex + 1}
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </PaginationItem>
          )}

          {currentIndex < pageCount - 2 && (
            <PaginationItem>
              <Button variant="ghost" onClick={() => table.setPageIndex(pageCount - 1)}>
                {table.getPageCount()}
              </Button>
            </PaginationItem>
          )}
          <PaginationItem>
            <Button variant="ghost" disabled={!table.getCanNextPage()} onClick={() => table.nextPage()}>
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
