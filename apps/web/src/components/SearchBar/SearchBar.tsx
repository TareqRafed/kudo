import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

interface Props extends ComponentPropsWithoutRef<typeof Input> {}

const SearchBar = ({ placeholder = 'Search...', className, ...rest }: Props) => {
  return (
    <div className={cn(['relative w-full max-w-sm', className])}>
      <label htmlFor="search-input" className="sr-only">
        Search
      </label>

      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
          <Search className="h-4 w-4" aria-hidden="true" />
        </div>

        <Input
          id="search-input"
          type="search"
          placeholder={placeholder}
          className="w-full pl-10 pr-4"
          role="searchbox"
          aria-label="Search input"
          {...rest}
        />
      </div>
    </div>
  );
};

export default SearchBar;
