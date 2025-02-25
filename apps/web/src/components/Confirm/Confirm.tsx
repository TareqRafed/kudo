import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@kudo/ui';
import { TriangleAlert } from 'lucide-react';
import type { ComponentPropsWithoutRef } from 'react';
import { Button } from '@kudo/ui';

interface Props extends ComponentPropsWithoutRef<typeof Dialog> {
  action: () => void;
  actionText?: string;
  title?: string;
  description?: string;
  content?: string;
  isLoading?: boolean;
}
/**
 * Wrap it aronud a button and provide the action (onClick) that should be exectued on confirmation
 */
export default function Confirm({
  action,
  actionText,
  title,
  description,
  children,
  isLoading,
  content,
  ...rest
}: Props) {
  return (
    <Dialog {...rest}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="text-sm">
        <div className="flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4">
          <TriangleAlert className="fill-destructive" />
          <DialogHeader>
            <DialogTitle>{title ?? 'Are you sure?'}</DialogTitle>
            <DialogDescription>{description ?? 'This action cannot be undone'}</DialogDescription>
          </DialogHeader>
        </div>
        {content}
        <DialogFooter>
          <DialogClose asChild>
            <Button size={'sm'} variant={'secondary'}>
              Cancel
            </Button>
          </DialogClose>
          <Button status={isLoading ? 'loading' : 'ready'} size={'sm'} onClick={action}>
            {actionText ?? 'Confirm'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
