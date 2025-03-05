import useUpdate from '@/hooks/useUpdate';
import { type ComponentPropsWithoutRef, forwardRef } from 'react';
import { Button } from '@kudo/ui';
import { Copy } from 'lucide-react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  copyValue: string;
}

/**
 * Button that handle to clipboard
 */
const CopyButton = forwardRef<HTMLButtonElement, Props>(({ copyValue, onClick, children, ...rest }, ref) => {
  const [copyStatus, handleStatus] = useUpdate({});

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    try {
      handleStatus(() => navigator.clipboard.writeText(copyValue));
      if (onClick) onClick(e);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <Button ref={ref} status={copyStatus} className="!size-7 !p-1" onClick={handleCopy} variant={'outline'} {...rest}>
      {children}
      {copyStatus === 'ready' ? <Copy /> : null}
    </Button>
  );
});

export default CopyButton;
