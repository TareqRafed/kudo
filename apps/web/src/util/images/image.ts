'use server';
/**
 * This is a ChatGPT function, to be reviewed in depth later
 */

import sharp from 'sharp';

type ValidationResult =
  | {
      valid: true;
      info: ImageInfo;
      data: Buffer<ArrayBufferLike>;
    }
  | {
      valid: false;
      error: string;
    };

interface ImageInfo {
  format: string;
  width: number;
  height: number;
  size: number; // Size in bytes
}

/**
 * Decodes a Base64 string to a Buffer.
 * @param base64 - The Base64 string to decode.
 * @returns The decoded Buffer.
 */
function decodeBase64(base64: string): Buffer {
  try {
    const d = base64.replace(/^data:image\/\w+;base64,/, '');
    return Buffer.from(d, 'base64');
  } catch (error) {
    throw new Error('Invalid Base64 string.');
  }
}

/**
 * Validates a Base64-encoded image and returns its metadata.
 * @param base64Image - The Base64-encoded image string.
 * @param maxSize - The maximum allowed size in bytes (default: 5 MB).
 * @returns A promise that resolves to the validation result with image info.
 */
export async function validateBase64Image(
  base64Image: string,
  maxSize: number = 5 * 1024 * 1024, // Default to 5 MB
): Promise<ValidationResult> {
  try {
    // Decode Base64 string to Buffer
    const imageBuffer = decodeBase64(base64Image);

    // Check file size
    if (imageBuffer.length > maxSize) {
      return {
        valid: false,
        error: `Image size exceeds ${maxSize / (1024 * 1024)}MB.`,
      };
    }

    // Get image metadata
    const metadata = await sharp(imageBuffer).metadata();

    // Check if the image is a valid PNG, JPEG, or JPG
    const allowedFormats = ['jpeg', 'jpg', 'png'];
    if (!allowedFormats.includes(metadata.format ?? '')) {
      return {
        valid: false,
        error: 'Unsupported image format. Only PNG, JPEG, or JPG are allowed.',
      };
    }

    // Check if metadata was successfully retrieved (indicates a valid image)
    if (!metadata.width || !metadata.height) {
      return { valid: false, error: 'Invalid or corrupted image.' };
    }

    // Construct image info
    const imageInfo: ImageInfo = {
      format: metadata.format ?? 'png',
      width: metadata.width,
      height: metadata.height,
      size: imageBuffer.length,
    };

    // Return validation success with image info
    return { valid: true, info: imageInfo, data: imageBuffer };
  } catch (error) {
    // Handle unexpected errors (e.g., invalid Base64 or corrupted image)
    return {
      valid: false,
      error: `Failed to process image: ${JSON.stringify(error)}`,
    };
  }
}
