import Link from 'next/link'
import { ButtonProps } from '@/types/components'

export default function Button({ text, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="bg-brand-beige text-brand-black w-fit px-6 py-3 text-sm font-medium tracking-widest uppercase transition hover:opacity-90"
    >
      {text}
    </Link>
  )
}
