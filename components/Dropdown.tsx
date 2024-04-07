'use client'

import Link from 'next/link'
import { ChevronsUpDown } from 'lucide-react'
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu'

import { projects } from '@/app/config'
import { useActiveProject } from '@/hooks/useActiveProject'
import { cn } from '@/utils/classnames'

export const Dropdown = () => {
  const activeProject = useActiveProject()

  if (projects.length < 2) return null

  return (
    <Root>
      <Trigger className='projects-center flex gap-2 rounded-full px-3 py-2 text-xs text-zinc-500 transition-colors hover:bg-zinc-100'>
        <span>{activeProject?.name || projects[0].name}</span>
        <ChevronsUpDown size={16} />
      </Trigger>
      <Portal>
        <Content
          className={cn(
            'flex min-w-40 max-w-60 flex-col gap-1 rounded-lg bg-white py-1 text-sm shadow',
            activeProject === projects[0] && 'pt-0',
            activeProject === projects[projects.length - 1] && 'pb-0',
          )}
          sideOffset={8}
          align='end'
        >
          {projects.map(({ name, path }) => (
            <Item key={path} asChild>
              <Link
                href={`/${path}`}
                className={cn(
                  'px-3 py-2 text-zinc-500 transition hover:outline-none',
                  activeProject?.name !== name &&
                    'hover:mx-1 hover:rounded hover:bg-zinc-100 hover:px-2 hover:text-zinc-700',
                  activeProject?.name === name && 'bg-zinc-100 text-zinc-900',
                )}
              >
                {name}
              </Link>
            </Item>
          ))}
        </Content>
      </Portal>
    </Root>
  )
}
