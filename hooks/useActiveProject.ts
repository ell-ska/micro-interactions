import { useSelectedLayoutSegment } from 'next/navigation'

import { projects } from '@/app/config'

export const useActiveProject = () => {
  const segment = useSelectedLayoutSegment()
  return projects.find(({ path }) => path === segment)
}
