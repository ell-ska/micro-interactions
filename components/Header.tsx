import Image from 'next/image'
import Link from 'next/link'

import { Dropdown } from '@/components/Dropdown'
import logo from '@/public/logo.svg'

export const Header = () => {
  return (
    <header className='flex h-16 items-center justify-between px-6 md:px-8'>
      <Link href='/'>
        <Image src={logo} alt='logo' priority />
      </Link>
      <Dropdown />
    </header>
  )
}
