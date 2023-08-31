import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi';
const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className='sticky top-0 left-0 shadow-md p-3 w-full flex items-center gap-3 justify-between h-[72px] z-50 bg-white'>
            <div className="flex items-center gap-3">
                <Image src="/logo.svg" alt="Logo" width={48} height={48} className='w-8 h-8' />
                <h1 className='font-semibold font-bossa text-stone-800 text-xl sm:text-2xl'>Depok Kita</h1>
            </div>
            <ul className={`flex flex-col sm:flex-row fixed sm:relative bg-white top-0 ${open ? "left-0" : "-left-full"} transition-all duration-500 w-full h-screen sm:h-auto items-center font-jkt_semibold text-stone-700 gap-3 justify-evenly font-medium md:text-base flex-1`}>
                <li className="sm:hidden">
                    <div className="flex items-center gap-3">
                        <Image src="/logo.svg" alt="Logo" width={48} height={48} />
                        <h1 className='font-semibold font-bossa text-stone-800 text-2xl'>Depok Kita</h1>
                    </div>
                </li>
                <li>
                    <a href="#sosvent" className='transition-colors hover:text-stone-900'>
                        Social Event
                    </a>
                </li>
                <li>
                    <Link href="/" className='transition-colors hover:text-stone-900'>
                        Donasi
                    </Link>
                </li>
                <li>
                    <Link href="/" className='transition-colors hover:text-stone-900'>
                        Artikel
                    </Link>
                </li>
                <li>
                    <Link href="/" className='transition-colors hover:text-stone-900'>
                        Tentang Kami
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Galeri
                    </Link>
                </li>
                <li className='sm:hidden'>
                    <button onClick={() => setOpen(false)} className='text-4xl'>
                        <HiX className='text-[#3862AE]' />
                    </button>
                </li>
            </ul>
            <button onClick={() => setOpen(true)} className='sm:hidden text-2xl flex flex-col gap-1'>
                <HiMenuAlt3 className='text-[#3862AE]' />
            </button>
        </nav>
    )
}

export default Navbar