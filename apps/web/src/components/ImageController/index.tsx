import { Button } from '@kudo/ui';
import { ArrowDownToLine, Copy } from 'lucide-react';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import useUpdate from '@/hooks/useUpdate';

interface Props {
  png: string;
  svg: string;
}

type ActionConfig = {
  actionType: string;
  icon: typeof ArrowDownToLine | typeof Copy;
  type: 'png' | 'svg';
  action: () => void;
  updateHook: ReturnType<typeof useUpdate>;
};

const ImageController = ({ png, svg }: Props) => {
  const savePngHook = useUpdate({});
  const saveSvgHook = useUpdate({});
  const copySvgHook = useUpdate({});

  const downloadImage = async ({ src, filename }: { src: string; filename: string }) => {
    try {
      const response = await fetch(src);
      if (!response.ok) throw new Error(`Failed to fetch ${src}: ${response.statusText}`);
      const blob = await response.blob();
      saveAs(blob, filename);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleCopy = async (svgSrc: string) => {
    try {
      const response = await fetch(svgSrc);
      const svgContent = await response.text();
      await navigator.clipboard.writeText(svgContent);
    } catch (error) {
      console.error('Failed to copy SVG:', error);
    }
  };

  const actions: ActionConfig[] = [
    {
      actionType: 'Copy SVG',
      icon: Copy,
      type: 'svg',
      action: () => copySvgHook[1](() => handleCopy(svg)),
      updateHook: copySvgHook,
    },
    {
      actionType: 'Download SVG',
      icon: ArrowDownToLine,
      type: 'svg',
      action: () => saveSvgHook[1](() => downloadImage({ src: svg, filename: 'logo.svg' })),
      updateHook: saveSvgHook,
    },
    {
      actionType: 'Download PNG',
      icon: ArrowDownToLine,
      type: 'png',
      action: () => savePngHook[1](() => downloadImage({ src: png, filename: 'logo.png' })),
      updateHook: savePngHook,
    },
  ];

  return (
    <div className="flex flex-col rounded-md bg-popover p-1">
      <div className="rounded-md bg-accent p-5">
        <Image alt="Kudo logo" className="mx-auto" width={40} height={40} src={svg} />
      </div>
      <div>
        <span className="text-sm flex flex-row justify-between mt-2">
          {actions.map((actionConfig, index) => {
            const [updateStatus] = actionConfig.updateHook;
            const isFirstButton = index === 0;
            const isLastButton = index === actions.length - 1;

            return (
              <Button
                key={actionConfig.actionType}
                status={updateStatus}
                onClick={actionConfig.action}
                size={'textIcon'}
                variant={'ghost'}
                className={`
                  ${isFirstButton ? 'mr-1' : ''}
                  ${!isFirstButton && !isLastButton ? 'mx-1' : ''}
                  ${isLastButton ? 'ml-1' : ''}
                `}
              >
                {updateStatus === 'ready' && (
                  <>
                    <actionConfig.icon />
                    {actionConfig.type.toUpperCase()}
                  </>
                )}
              </Button>
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default ImageController;
