'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { ChevronsUpDown } from 'lucide-react'
import {
  Content,
  Item,
  Portal,
  Root,
  Trigger,
} from '@radix-ui/react-dropdown-menu'

import { cn } from '@/utils/classnames'

type Props = {
  items: {
    name: string
    path: string
  }[]
}

export const Dropdown = ({ items }: Props) => {
  const segment = useSelectedLayoutSegment()
  const activeRoute = items.find(({ path }) => path === segment) || items[0]

  if (items.length < 2) return null

  return (
    <Root>
      <Trigger className='flex items-center gap-2 rounded-full px-3 py-2 text-xs text-zinc-500 transition-colors hover:bg-zinc-100'>
        <span>{activeRoute.name}</span>
        <ChevronsUpDown size={16} />
      </Trigger>
      <Portal>
        <Content
          className={cn(
            'flex min-w-40 max-w-60 flex-col gap-1 rounded-lg bg-white text-sm shadow',
            activeRoute === items[0] && 'pb-1',
            activeRoute === items[items.length - 1] && 'pt-1',
          )}
          sideOffset={8}
          align='end'
        >
          {items.map(({ name, path }) => (
            <Item key={path} asChild>
              <Link
                href={`/${path}`}
                className={cn(
                  'px-3 py-2 text-zinc-500 transition hover:outline-none',
                  activeRoute.name !== name &&
                    'hover:mx-1 hover:rounded hover:bg-zinc-100 hover:px-2 hover:text-zinc-700',
                  activeRoute.name === name && 'bg-zinc-100 text-zinc-900',
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
