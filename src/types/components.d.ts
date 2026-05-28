export type HamburgerProps = Readonly<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  scrolled: boolean
}>

export interface ButtonProps {
  text: string
  href: string
}

export interface CoverImageProps {
  src: string
  alt: string
}
