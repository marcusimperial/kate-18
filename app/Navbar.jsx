"use client"; 

import { FaCalendar, FaBars, FaTimes  } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const router = useRouter();

    const [mobileClicked, setMobileClicked] = useState(false);

    return (
        <div className={`grid  auto-rows-min md:grid-flow-col justify-items-center md:justify-items-auto md:justify-between items-center bg-purpureus text-purple px-6 md:px-24 p-0.5 sticky top-0 z-50 md:h-auto ${mobileClicked ? 'h-[100dvh]' : 'h-auto'}`}>
            <div className="grid grid-flow-col justify-between items-center w-full gap-2">
            <h1 className="text-5xl md:text-6xl font-elegante">Eliza Kate</h1>
            { !mobileClicked ? <FaBars size="30px" className="md:hidden" onClick={() => setMobileClicked(true)}/> : <FaTimes size="30px" className="md:hidden" onClick={() => setMobileClicked(false)}  />}
            </div>
            <div className={`md:flex flex-col md:flex-row items-center py-32 md:py-0 gap-x-4 gap-y-18 md:gap-y-0 ${mobileClicked ? 'flex' : 'hidden'}`}>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <Link className="text-5xl md:text-2xl font-georgia" href="/">Home</Link>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <Link className="text-5xl md:text-2xl font-georgia" href="/sets#lavenders">Lavenders</Link>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <Link className="text-5xl md:text-2xl font-georgia" href="/sets#candles">Candles</Link>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <Link className="text-5xl md:text-2xl font-georgia" href="/sets#treasures">Treasures</Link>
                </div>
            </div>
            <div onClick={() => router.push('/rsvp')} className="hidden md:flex items-center gap-1 text-purpureus bg-purple rounded-lg p-1 px-3 select-none hover:scale-[0.98]">
                <FaCalendar size="25px" />
                <h1 className="text-2xl font-georgia">RSVP today</h1>
            </div>
        </div>
    )
};

export default Navbar;