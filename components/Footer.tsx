'use client'

import { usePathname } from 'next/navigation'

import { projects } from '@/app/config'
import { useActiveProject } from '@/hooks/useActiveProject'
import { cn } from '@/utils/classnames'

export const Footer = () => {
  const path = usePathname()
  const activeProject = useActiveProject() || path === '/' ? projects[0] : null
  if (!activeProject?.footerContent) return null

  return (
    <footer
      className={cn([
        'flex justify-center pb-2 pt-6 text-xs',
        '[&_a]:underline',
      ])}
    >
      {activeProject.footerContent}
    </footer>
  )
}
