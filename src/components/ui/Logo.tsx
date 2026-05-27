import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="flex h-full items-center">
      <Image
        src="/logo.png"
        alt="Artcor logo"
        width={294}
        height={95}
        className="h-[80%] w-auto object-contain"
        priority
      />
    </Link>
  )
}
