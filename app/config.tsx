import Link from 'next/link'
import type { ReactNode } from 'react'

type Project = {
  path: string
  name: string
  footerContent: ReactNode
}

export const projects: Project[] = [
  {
    path: 'squishy-cards',
    name: 'squishy cards',
    footerContent: (
      <span>
        inpired by: <Link href='https://www.limlondon.com/'>limlondon</Link>{' '}
        with the help of{' '}
        <Link href='https://www.youtube.com/watch?v=yHMP0wmV4SU'>
          tom is loading
        </Link>
      </span>
    ),
  },
]
