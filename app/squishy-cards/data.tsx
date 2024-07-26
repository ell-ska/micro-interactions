import type { ReactNode } from 'react'

export type Data = {
  id: number
  tag: string | undefined
  preTitle: string
  title: ReactNode
  prices: { id: number; content: ReactNode }[]
  button: string | undefined
  background: 'tower' | 'stack' | 'ovals'
}

export const data: Data[] = [
  {
    id: 1,
    tag: undefined,
    preTitle: 'from',
    title: (
      <>
        16 Jan
        <br />
        2024
      </>
    ),
    prices: [
      {
        id: 1,
        content: (
          <>
            Single payment <b>£3.990</b>
          </>
        ),
      },
      {
        id: 2,
        content: (
          <>
            Payment Plan (X3) <b>£1.490</b>
          </>
        ),
      },
    ],
    button: 'Enrol now',
    background: 'tower',
  },
  {
    id: 2,
    tag: undefined,
    preTitle: 'from',
    title: (
      <>
        7 May
        <br />
        2024
      </>
    ),
    prices: [
      {
        id: 1,
        content: (
          <>
            Single payment <b>£3.990</b>
          </>
        ),
      },
      {
        id: 2,
        content: (
          <>
            Payment Plan (X3) <b>£1.490</b>
          </>
        ),
      },
    ],
    button: 'Enrol now',
    background: 'stack',
  },
  {
    id: 3,
    tag: 'Soon Avaliable',
    preTitle: 'from',
    title: (
      <>
        10 Sept
        <br />
        2024
      </>
    ),
    prices: [
      {
        id: 1,
        content: (
          <>
            Single payment <b>£3.990</b>
          </>
        ),
      },
      {
        id: 2,
        content: (
          <>
            Payment Plan (X3) <b>£1.490</b>
          </>
        ),
      },
    ],
    button: undefined,
    background: 'ovals',
  },
]
