import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import FooterCTA from '@/components/layout/FooterCTA'
import Footer from '@/components/layout/Footer'
import { siteMetadata } from '@/constants/site'

const poppins = localFont({
  src: [
    {
      path: '../fonts/Poppins-Regular.woff2',
      weight: '400',
    },
    {
      path: '../fonts/Poppins-Medium.woff2',
      weight: '500',
    },
    {
      path: '../fonts/Poppins-SemiBold.woff2',
      weight: '600',
    },
    { path: '../fonts/Poppins-Bold.woff2', weight: '700' },
  ],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  icons: {
    icon: '/favicon.ico',
  },
  metadataBase: new URL(siteMetadata.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: 'Artcor',
    locale: siteMetadata.locale,
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={poppins.variable}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className="bg-brand-light text-brand-black font-poppins"
      >
        <Navbar />
        {children}
        <FooterCTA />
        <Footer />
      </body>
    </html>
  )
}
