"use client"; 

import { FaCalendar, FaBars, FaTimes  } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

const Navbar = () => {
    const router = useRouter();

    const [mobileClicked, setMobileClicked] = useState(false);

    window.onresize = () => setMobileClicked(false);

    return (
        <div className={`grid w-full auto-rows-min md:grid-flow-col justify-items-center md:justify-items-auto md:justify-between items-center bg-purpureus text-purple px-6 md:px-12 lg:px-24 md:p-0.5 top-0 z-50 md:h-auto ${mobileClicked ? 'max-h-[100dvh] h-full fixed ease-in-out duration-300' : 'max-h-[100px] sticky ease-out duration-300'}`}>
            <div className="grid grid-flow-col justify-between items-center w-full gap-2">
                <h1 className="text-6xl md:text-6xl font-elegante">Eliza Kate</h1>
                { !mobileClicked ? <FaBars data-aos="fade-in" size="40px" className={`md:hidden`} onClick={() => setMobileClicked(true)}/> : <FaTimes size="40px" data-aos="fade-in" className="md:hidden" onClick={() => setMobileClicked(false)}  />}
            </div>
            <div className={`md:flex flex-col md:flex-row items-center mt-32 md:mt-0 gap-x-4 gap-y-18 md:gap-y-0 p-10 md:p-0 ${mobileClicked ? 'flex' : 'hidden'}`}>
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
            <div onClick={() => router.push('/rsvp')} className={`md:hidden lg:flex items-center gap-1 text-purpureus bg-purple rounded-lg p-2 md:p-1 px-3 select-none hover:scale-[0.98] ${mobileClicked ? 'flex' : 'hidden'}`}>
                <FaCalendar size="30px" />
                <h1 className="text-4xl md:text-2xl font-georgia">RSVP today</h1>
            </div>
        </div>
    )
};

export default Navbar;