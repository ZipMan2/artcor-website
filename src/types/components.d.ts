export type HamburgerProps = Readonly<{
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  scrolled: boolean
}>
