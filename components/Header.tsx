"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils';
import Image from 'next/image';


const Header = () => {
  const pathname = usePathname();

  return (
   <header className='my-10 justify-between gap-5'>
        <Link href="/" className=''>
            <Image src='/icons/logo.svg' width={40} height={40} alt='logo'/>
        </Link>
        <ul className='flex flex-row items-center gap-8'>
            <li>
                <Link href="/library" className={cn('text-base cursor-pointer capitalize',pathname === '\library' ? 'text-light-200' : 'text-light-100')}>Library</Link>
            </li>
        </ul>
   </header>
  )
}

export default Header