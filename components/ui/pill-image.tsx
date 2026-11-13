import Image from "next/image";
import { cn } from "@/lib/cn";
import type { ImageAsset } from "@/types/content";

type PillImageProps = {
  image: ImageAsset;
  /**
   * Responsive `sizes` hint. Because photos are cropped with `object-cover` into
   * tall capsules, request ~1.25× the container width or the image gets upscaled
   * (and looks blurry).
   */
  sizes: string;
  className?: string;
  imageClassName?: string;
  preload?: boolean;
};

/** Photo cropped into a tall capsule with a slow zoom on hover. */
export function PillImage({ image, sizes, className, imageClassName, preload }: PillImageProps) {
  return (
    <div className={cn("group relative isolate overflow-hidden rounded-full bg-surface", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={sizes}
        preload={preload}
        quality={85}
        className={cn("object-cover transition-transform duration-700 ease-(--ease-out-expo) group-hover:scale-105", imageClassName)}
      />
    </div>
  );
}
