'use client'

import { useActiveProject } from '@/hooks/useActiveProject'
import { cn } from '@/utils/classnames'

export const Footer = () => {
  const activeProject = useActiveProject()
  if (!activeProject?.footerContent) return null

  return (
    <footer
      className={cn([
        'flex justify-center pt-6 pb-2 text-xs',
        '[&_a]:underline',
      ])}
    >
      {activeProject.footerContent}
    </footer>
  )
}
