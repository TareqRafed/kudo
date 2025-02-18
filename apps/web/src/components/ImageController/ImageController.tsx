import { Button } from '@/components/ui/button';
import { ArrowDownToLine, Copy } from 'lucide-react';
import Image from 'next/image';
import { saveAs } from 'file-saver';
import useUpdate from '@/hooks/useUpdate';

interface Props {
  png: string;
  svg: string;
}

const ImageController = ({ png, svg }: Props) => {
  const [updateStatusSavePng, updateSavePng] = useUpdate({});
  const [updateStatusSaveSvg, updateSaveSvg] = useUpdate({});
  const [updateStatusCopySvg, updateCopySvg] = useUpdate({});

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

  const savePng = () => {
    updateSavePng(() => downloadImage({ src: png, filename: 'logo.png' }));
  };
  const saveSvg = () => {
    updateSaveSvg(() => downloadImage({ src: svg, filename: 'logo.svg' }));
  };
  const copySvg = () => {
    updateCopySvg(() => handleCopy(svg));
  };

  return (
    <div className="flex flex-col rounded-md bg-popover p-1">
      <div className=" rounded-md bg-accent p-5">
        <Image alt="Kudo logo" className="mx-auto" width={40} height={40} src={svg} />
      </div>
      <div>
        <span className="text-sm flex flex-row justify-between mt-2">
          <Button status={updateStatusCopySvg} onClick={copySvg} size={'textIcon'} variant={'ghost'} className="mr-1">
            <Copy className="w-5 cursor-pointer" />
            SVG
          </Button>
          <Button status={updateStatusSaveSvg} onClick={saveSvg} size={'textIcon'} variant={'ghost'} className="mx-1">
            <ArrowDownToLine className="w-5 cursor-pointer" />
            SVG
          </Button>
          <Button status={updateStatusSavePng} onClick={savePng} size={'textIcon'} variant={'ghost'} className="ml-1">
            <ArrowDownToLine className="w-5 cursor-pointer" />
            PNG
          </Button>
        </span>
      </div>
    </div>
  );
};

export default ImageController;
