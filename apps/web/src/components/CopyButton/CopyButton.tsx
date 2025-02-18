import useUpdate from '@/hooks/useUpdate';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { Button } from '../ui/button';
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
    <Button ref={ref} status={copyStatus} onClick={handleCopy} size={'smIcon'} variant={'outline'} {...rest}>
      <Copy className="!size-3" />
      {children}
    </Button>
  );
});

export default CopyButton;
