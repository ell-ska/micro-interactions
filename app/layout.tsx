import type { Metadata } from 'next'
import { Albert_Sans } from 'next/font/google'
import './globals.css'
import { cn } from '@/utils/classnames'

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
          'bg-zinc-50 font-primary text-zinc-900',
        )}
      >
        {children}
      </body>
    </html>
  )
}
