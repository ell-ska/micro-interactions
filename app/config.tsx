import type { ReactNode } from 'react'

type Project = {
  path: string
  name: string
  footerContent: ReactNode
}

export const projects: Project[] = []
