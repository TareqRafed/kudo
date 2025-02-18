import { useEffect } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

interface Props {
  count: number;
  size: number;
  currentPage: number;
  onChange: (val: number) => void;
  disabled?: boolean;
}

const Paginate = ({ count, size, currentPage, onChange, disabled }: Props) => {
  const totalPages = Math.ceil(count / size);
  const disablePrev = currentPage + 1 === 1;
  const disableNext = currentPage + 1 === totalPages;
  const disableEllipsis = currentPage + 2 >= totalPages;

  return (
    <Pagination className="mx-0">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            isActive={!disablePrev}
            onClick={() => {
              if (disablePrev || disabled) {
                return false;
              }
              onChange(currentPage - 1);
            }}
            href="#"
          />
        </PaginationItem>
        <div className="w-[5rem] flex items-center justify-center">
          <PaginationItem>
            <PaginationLink href="#">{currentPage + 1}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </div>
        <PaginationItem>
          <PaginationNext
            isActive={!disableNext}
            onClick={() => {
              if (disableNext || disabled) {
                return false;
              }
              onChange(currentPage + 1);
            }}
            href="#"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Paginate;
