import { CoverImageProps } from '@/types/components'
import Image from 'next/image'

export default function CoverImage({ src, alt }: CoverImageProps) {
  return (
    <div className="relative min-h-[320px] md:min-h-[780px]">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
        loading="lazy"
      />
    </div>
  )
}
