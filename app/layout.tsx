import type { Metadata } from 'next'
import { Albert_Sans } from 'next/font/google'

import { Header } from '@/components/Header'
import { cn } from '@/utils/classnames'
import './globals.css'

const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--albert-sans',
})

export const metadata: Metadata = {
  title: 'micro interactions',
  description: 'Learning Framer Motion through micro interactions',
  icons: {
    icon: '/logo.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          albertSans.variable,
          'font-primary [&_*]:outline-green flex min-h-screen flex-col bg-zinc-50 text-zinc-900',
        )}
      >
        <Header />
        <main className='grid grow place-items-center px-6 md:px-8'>
          {children}
        </main>
      </body>
    </html>
  )
}
