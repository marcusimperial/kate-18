"use client"; 

import Navbar from './Navbar';
import Link from 'next/link';

const Page = () => {

    return (
        <div className="grid h-[100dvh] grid-rows-[auto_minmax(0,_1fr)]">
            <Navbar />
            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-fixed bg-center bg-[url('./assets/background.jpg')] pb-0 md:pb-0">
                <div className="grid items-center justify-items-center p-3 gap-6">
                    <div className="grid items-center justify-items-center">
                        <h1 data-aos="fade-in" className="text-2xl md:text-3xl text-center">Join us as we celebrate</h1>
                        <h1 data-aos="fade-in" data-aos-delay="400" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Eliza Kate&apos;s 18th Birthday</h1>
                        <h1 data-aos="fade-in" data-aos-delay="800" className="text-3xl md:text-4xl text-center font-bold">On September 30, 2023, 5:00 PM at the EDSA Shangri-La Hotel</h1>
                        <h1 data-aos="fade-in" data-aos-delay="800" className="text-2xl md:text-3xl text-center font-bold">Ortigas Center, Mandaluyong City</h1>
                        <div className="flex py-4">
                            <Link className="text-2xl md:text-3xl hover:underline select-non" href="/rsvp">RSVP today &gt; </Link>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    )
};

export default Page;