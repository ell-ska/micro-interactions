'use client'

import { Darker_Grotesque } from 'next/font/google'
import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { type Data, data } from './data'
import { cn } from '@/utils/classnames'

const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
})

export default function SquishyCardsPage() {
  return (
    <section className='grid size-full grid-cols-1 items-center gap-8 text-lg font-medium text-white sm:gap-12 lg:grid-cols-3'>
      {data.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  )
}

const Card = ({ tag, preTitle, title, prices, button, background }: Data) => {
  return (
    <motion.div
      whileHover='hover'
      variants={{
        hover: {
          scale: 0.975,
        },
      }}
      transition={{
        duration: 1,
        ease: 'backOut',
      }}
      className='relative isolate flex max-h-[540px] flex-col items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-[#AF9FFE] p-8 sm:rounded-[4.5rem] sm:p-12 lg:h-3/4'
    >
      {tag ? <Tag className='self-start'>{tag}</Tag> : <TagSpacer />}
      <div className='self-start'>
        <span>{preTitle}</span>
        <Title>{title}</Title>
      </div>
      <div className='self-start [&_b]:font-extrabold'>
        {prices.map(({ content, id }) => (
          <p key={id}>{content}</p>
        ))}
      </div>
      {button ? <Button>{button}</Button> : <ButtonSpacer />}
      <Background variant={background} />
    </motion.div>
  )
}

const Tag = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        'flex h-8 items-center gap-4 rounded-xl bg-white px-4 py-0.5 text-base text-zinc-900',
        className,
      )}
    >
      <div className='size-3 rounded-full bg-[#AF9FFE]' />
      {children}
    </div>
  )
}

const TagSpacer = () => {
  return <div className='h-8' />
}

const Title = ({ children }: { children: ReactNode }) => {
  return (
    <motion.h3
      initial={{ scale: 0.85, fontWeight: 600 }}
      variants={{
        hover: {
          scale: 1,
          fontWeight: 800,
        },
      }}
      transition={{
        duration: 1,
        ease: 'backOut',
      }}
      className={cn(
        darkerGrotesque.className,
        'origin-top-left text-7xl leading-[0.75]',
      )}
    >
      {children}
    </motion.h3>
  )
}

const Button = ({ children }: { children: ReactNode }) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: '#AF9FFE',
        color: 'white',
      }}
      className='rounded-2xl bg-white px-8 py-5 text-base text-zinc-900'
    >
      {children}
    </motion.button>
  )
}

const ButtonSpacer = () => {
  return <div className='h-16' />
}

const Background = ({ variant }: { variant: 'tower' | 'stack' | 'ovals' }) => {
  const className = 'absolute inset-0 -z-10'

  switch (variant) {
    case 'tower':
      return (
        <motion.svg
          variants={{
            hover: {
              scale: 1.15,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
          className={className}
          width='420'
          height='540'
          viewBox='0 0 420 540'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.g
            variants={{
              hover: {
                y: 64,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
            }}
          >
            <circle cx='210' cy='374' r='146' fill='#18181B' />
            <rect x='64' y='374' width='292' height='394' fill='#18181B' />
          </motion.g>
          <motion.circle
            variants={{
              hover: {
                y: 64,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              delay: 0.1,
            }}
            cx='210'
            cy='82'
            r='146'
            fill='#18181B'
          />
        </motion.svg>
      )
    case 'stack':
      return (
        <svg
          className={className}
          width='420'
          height='540'
          viewBox='0 0 420 540'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.path
            variants={{
              hover: {
                y: 80,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
            }}
            d='M163.723 -92.8314C189.281 -118.39 230.719 -118.39 256.277 -92.8314L348.831 -0.277127C374.39 25.281 374.39 66.719 348.831 92.2771L256.277 184.831C230.719 210.39 189.281 210.39 163.723 184.831L71.1686 92.2771C45.6105 66.719 45.6105 25.281 71.1686 -0.277127L163.723 -92.8314Z'
            fill='#1B1B1B'
          />
          <motion.path
            variants={{
              hover: {
                y: 80,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              delay: 0.1,
            }}
            d='M163.723 67.1686C189.281 41.6105 230.719 41.6105 256.277 67.1686L348.831 159.723C374.39 185.281 374.39 226.719 348.831 252.277L256.277 344.831C230.719 370.39 189.281 370.39 163.723 344.831L71.1686 252.277C45.6105 226.719 45.6105 185.281 71.1686 159.723L163.723 67.1686Z'
            fill='#1B1B1B'
          />
          <motion.path
            variants={{
              hover: {
                y: 80,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              delay: 0.2,
            }}
            d='M163.723 227.169C189.281 201.61 230.719 201.61 256.277 227.169L348.831 319.723C374.39 345.281 374.39 386.719 348.831 412.277L256.277 504.831C230.719 530.39 189.281 530.39 163.723 504.831L71.1686 412.277C45.6105 386.719 45.6105 345.281 71.1686 319.723L163.723 227.169Z'
            fill='#1B1B1B'
          />
        </svg>
      )
    case 'ovals':
      return (
        <motion.svg
          variants={{
            hover: {
              scale: 1.15,
            },
          }}
          transition={{
            duration: 1,
            ease: 'backInOut',
          }}
          className={className}
          width='420'
          height='540'
          viewBox='0 0 420 540'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            variants={{
              hover: {
                y: -80,
                scaleY: 0.63,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
            }}
            cx='210'
            cy='210'
            r='146'
            fill='#18181B'
          />
          <motion.ellipse
            variants={{
              hover: {
                y: -80,
                scaleY: 1.59,
              },
            }}
            transition={{
              duration: 1,
              ease: 'backInOut',
              delay: 0.1,
            }}
            cx='210'
            cy='448'
            rx='146'
            ry='92'
            fill='#18181B'
          />
        </motion.svg>
      )
  }
}
