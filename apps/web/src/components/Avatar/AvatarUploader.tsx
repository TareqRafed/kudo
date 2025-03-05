'use client';

import { cn } from '@/lib/utils';
import { type ComponentPropsWithoutRef, useState, useCallback } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@kudo/ui';
import { DialogTitle, Dialog, DialogContent } from '@kudo/ui';
import { Button } from '@kudo/ui';
import Cropper from 'react-easy-crop';
import type { Area } from 'react-easy-crop';

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'value' | 'onChange'>;

interface Props extends InputProps {
  id?: string;
  src?: string;
  className?: string;
  color?: string;
  onImageUpload?: (croppedImage: string) => void;
}

export const AvatarUploader = ({ id, src, color = '#fff', className, onImageUpload, ...rest }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);

  const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];

      if (!validTypes.includes(file.type)) {
        alert('Please select a PNG, JPG, or JPEG image.');
        return;
      }

      const reader = new FileReader();
      reader.addEventListener('load', () => setImage(reader.result as string));
      reader.readAsDataURL(file);
      setIsDialogOpen(true);
    }
  };

  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', (error) => reject(error));
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
    });

  const getCroppedImg = async (imageSrc: string, pixelCrop: Area) => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return null;
    }

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.drawImage(
      image,
      pixelCrop.x,
      pixelCrop.y,
      pixelCrop.width,
      pixelCrop.height,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );

    const mimeType = imageSrc.split(';')[0].split(':')[1] || 'image/png';
    return canvas.toDataURL(mimeType);
  };

  const handleCropConfirm = useCallback(async () => {
    if (image && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(image, croppedAreaPixels);
        if (croppedImage && onImageUpload) {
          console.log(croppedImage);
          onImageUpload(croppedImage);
        }
        setIsDialogOpen(false);
      } catch (e) {
        console.error(e);
      }
    }
  }, [image, croppedAreaPixels, onImageUpload]);

  return (
    <div className="flex items-center relative size-fit rounded-full">
      <Button variant={'outline'} size={'sm'} className="mr-3" type="button">
        <label htmlFor={id ?? 'avatar-upload'} className="cursor-pointer">
          <input
            {...rest}
            id={id ?? 'avatar-upload'}
            type="file"
            className="hidden"
            accept=".png,.jpg,.jpeg"
            onChange={handleFileChange}
          />
          <span className="text-[10px]">Choose Image</span>
        </label>
      </Button>
      <Avatar style={{ borderColor: color }} className={cn(['border-2', className])}>
        <AvatarImage className={cn(['size-full rounded-full'])} src={src} alt="User profile picture" />
        <AvatarFallback asChild>
          <div className="size-full rounded-full" style={{ background: `linear-gradient(135deg, ${color}, #000)` }} />
        </AvatarFallback>
      </Avatar>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogTitle>Crop Image</DialogTitle>
          <div className="relative h-64 w-full">
            {image && (
              <Cropper
                image={image}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
              />
            )}
          </div>
          <div className="mt-4 flex justify-end space-x-2">
            <Button size={'sm'} variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button size={'sm'} onClick={handleCropConfirm}>
              Confirm
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
