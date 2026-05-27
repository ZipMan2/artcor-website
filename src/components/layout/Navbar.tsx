'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { navLinks } from '@/constants/navigation'
import Hamburger from '../ui/Hamburger'
import Logo from '../ui/Logo'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  // Navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      {/* Navbar */}
      <div
        ref={navRef}
        className={`bg-brand-light sticky top-0 right-0 left-0 z-50 h-14 transition-all duration-300 ${scrolled ? 'md:h-14 md:shadow-md' : 'md:h-18'} }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Logo />

          {/* --- Desktop nav ---*/}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative px-2 py-1 text-sm font-medium tracking-widest uppercase transition-colors duration-200 hover:text-amber-700 ${
                  pathname === link.href
                    ? 'text-brand-amber'
                    : 'text-brand-black'
                }`}
              >
                {link.label}
                <span className="bg-brand-amber absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Hamburger */}
          <Hamburger
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            scrolled={scrolled}
          />
        </div>

        {/* --- Mobile menu --- */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          } border-t border-stone-100 bg-white`}
        >
          <nav className="flex flex-col gap-4 px-6 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-stone-100 py-1 text-sm font-medium text-stone-700 transition-colors hover:text-amber-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}
