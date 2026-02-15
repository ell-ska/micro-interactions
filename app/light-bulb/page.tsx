'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue } from 'framer-motion'

import { cn } from '@/utils/classnames'

export default function LightBulbPage() {
  const [mode, setMode] = useState<'off' | 'on'>('on')

  return (
    <section
      className={cn(
        'light-bulb flex flex-col items-center',
        mode === 'off' ? 'dark off' : 'on',
      )}
    >
      <LightBulb />
      <Switch />
    </section>
  )
}

const LightBulb = () => {
  return (
    <svg
      className='h-full w-48'
      viewBox='0 0 192 326'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        id='top-background'
        className='fill-[var(--color-top)]'
        d='M40 63.093C40 68.5504 16 68.5504 16 63.093C16 57.6357 40 57.6356 40 63.093Z'
      />
      <path
        id='base-background'
        className='fill-[var(--color-base)]'
        d='M40 63V86.8139C40 90.4051 29.6076 91.6331 22.5 90.498V66.6841C29.6076 67.8192 40 66.5912 40 63Z'
      />
      <path
        id='base-shine'
        className='fill-[var(--color-base-shine)]'
        d='M16 86.8139V63C16 64.8662 18.8065 66.0942 22.5 66.6841V90.498C18.8065 89.9082 16 88.6801 16 86.8139Z'
      />
      <path
        id='base-outline'
        className='stroke-[var(--color-outline)]'
        d='M16 63.093V86.907C16 92.3643 40 92.3643 40 86.907V63.093M16 63.093C16 68.5504 40 68.5504 40 63.093M16 63.093C16 57.6357 40 57.6356 40 63.093'
        strokeWidth='2'
      />
      <path
        id='wire-right'
        className='stroke-[var(--color-wire)]'
        d='M35 46.5L31 61.5'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        id='wire-left'
        className='stroke-[var(--color-wire)]'
        d='M21 46.5L25 61.5'
        strokeWidth='2'
        strokeLinecap='round'
      />
      <path
        id='bulb'
        className='fill-[var(--color-bulb)] stroke-[var(--color-outline)]'
        d='M27.5 1C14.5 1 1 11 1 28.5C1 35.5 1.36737 38.7171 7.5 47C12 53.0778 16 56.0928 16 63.0933C16 68.5506 40 68.5506 40 63.0933C40 56.0928 43 53.0754 47.5 46.9976C53.6326 38.7146 54 35.4976 54 28.4976C54 10.9976 41.5 1 27.5 1Z'
        fillOpacity='0.5'
        strokeWidth='2'
      />
      <path
        id='bulb-shine'
        className='stroke-[var(--color-bulb-shine)]'
        d='M26.0008 8C14.0003 8 4.5 24.5 11.0008 35.5'
        strokeOpacity='0.75'
        strokeWidth='4'
        strokeLinecap='round'
      />
    </svg>
  )
}

const initialX = 27.5

const Switch = () => {
  const svg = useRef<SVGSVGElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    if (!svg.current) return

    const bcr = svg.current.getBoundingClientRect()
    setSize({ w: bcr.width, h: bcr.height })
  }, [])

  const y = useMotionValue(20)
  const x = useMotionValue(initialX)

  return (
    <svg
      ref={svg}
      viewBox='0 0 55 45'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='h-full w-48 md:w-64'
    >
      <motion.line
        x1={initialX}
        y1='0'
        x2={x}
        y2={y}
        className='stroke-[var(--color-outline)]'
        strokeWidth='2'
      />
      <motion.circle
        drag
        dragElastic={0.4}
        dragMomentum
        // cx={x}
        // cy={y}
        style={{ x, y }}
        r='2'
        className='cursor-grab fill-[var(--color-outline)]'
      />
    </svg>
  )
}

//<div className='relative flex h-screen items-start justify-center overflow-hidden bg-gray-100'>
//  {/* Anchor Point */}
//  <div className='absolute top-0 z-10 h-1 w-1 rounded-full bg-black' />
//
//  {/* SVG String */}
//  <svg className='absolute top-0' width='200' height='1000'>
//    <motion.line x1='100' y1='0' x2={x} y2={y} stroke='black' strokeWidth='2' />
//  </svg>
//
//  {/* Pull handle */}
//  <motion.div
//    className='z-20 h-8 w-8 cursor-grab rounded-full bg-yellow-400'
//    drag
//    dragConstraints={{ top: 0, bottom: 200, left: -50, right: 50 }}
//    style={{
//      x,
//      y,
//      rotate,
//      touchAction: 'none', // Prevent scroll interference
//    }}
//    dragElastic={0.4}
//    dragMomentum={true}
//  />
//</div>
