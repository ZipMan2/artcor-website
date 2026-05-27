import { HamburgerProps } from "@/types/components";

export default function Hamburger({ isOpen, setIsOpen, scrolled }: HamburgerProps) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`md:hidden flex flex-col gap-1.5 p-1 ${scrolled ? 'text-stone-800' : 'text-brand-black'}`}
      aria-label="Menu"
    >
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''
          }`}
      />
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''
          }`}
      />
      <span
        className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''
          }`}
      />
    </button>
  )
}
