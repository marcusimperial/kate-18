"use client"; 

import { FaCalendar, FaAngleDown, FaTimes  } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const router = useRouter();

    const [mobileClicked, setMobileClicked] = useState(false);

    useEffect(() => {
        window.onresize = () => setMobileClicked(false);
    }, []);

    const onBrowse = (to = '/') => {
        if (typeof window === undefined) return;
        window.location.replace(to);
    }

    return (
        <div className={`grid w-full auto-rows-min md:grid-flow-col justify-items-center md:justify-items-auto md:justify-between items-center bg-purpureus text-purple px-6 md:px-2  top-0 z-50 md:h-auto ${mobileClicked ? 'max-h-[100dvh] h-full fixed ease-in-out duration-300' : 'max-h-[100px] sticky ease-out duration-300'}`}>
            <div className="grid grid-flow-col justify-between items-center w-full gap-2">
                <h1 className="text-6xl md:text-6xl font-elegante">Eliza Kate</h1>

                { !mobileClicked ? <FaAngleDown data-aos="fade-in" size="40px" className="md:hidden" onClick={() => setMobileClicked(true)}/> : <FaTimes size="40px" data-aos="fade-in" className="md:hidden" onClick={() => setMobileClicked(false)}  />}
            </div>
            <div className={`md:flex flex-col md:flex-row items-center mt-32 md:mt-0 gap-y-18 md:gap-y-0 p-10 md:p-0 ${mobileClicked ? 'flex' : 'hidden'}`}>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <h1 className="text-5xl md:text-xl lg:text-2xl font-georgia" onClick={() => onBrowse('/')}>Home</h1>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <h1 className="text-5xl md:text-xl lg:text-2xl font-georgia" onClick={() => onBrowse('/debutant')}>Debutant</h1>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <h1 className="text-5xl md:text-xl lg:text-2xl font-georgia" onClick={() => onBrowse('/sets#lavenders')}>18 Lavenders</h1>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <h1 className="text-5xl md:text-xl lg:text-2xl font-georgia" onClick={() => onBrowse('/sets#candles')}>18 Candles</h1>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <h1 className="text-5xl md:text-xl lg:text-2xl font-georgia" onClick={() => onBrowse('/sets#treasures')}>18 Treasures</h1>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <h1 className="text-5xl md:text-xl lg:text-2xl font-georgia" onClick={() => onBrowse('/sets#k')}>18 K</h1>
                </div>
            </div>
            <div onClick={() => router.push('/rsvp')} className={`md:hidden lg:flex items-center gap-1 text-purpureus bg-purple rounded-lg p-2 md:p-1 md:px-1 px-3 select-none hover:scale-[0.98] ${mobileClicked ? 'flex' : 'hidden'}`}>
                <FaCalendar size="30px" />
                <h1 className="text-3xl md:text-2xl font-georgia">RSVP today</h1>
            </div>
        </div>
    )
};

export default Navbar;