"use client"; 

import Navbar from './Navbar';
import Link from 'next/link';

const Page = () => {

    return (
        <div className="grid grid-rows-[auto_minmax(0,_1fr)] h-[100dvh]">
            <Navbar />

            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-center bg-fixed bg-[url('./assets/background.jpg')]">
                <div className="grid items-center justify-items-center p-3 gap-1">
                    <h1 data-aos="fade-in" className="text-3xl md:text-4xl">Join us as we celebrate</h1>
                    <h1 data-aos="fade-in" data-aos-delay="600" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Eliza Kate&apos;s 18th Birthday</h1>
                    <div data-aos="fade-up" data-aos-delay="1000" className="flex items-center gap-5">
                        <Link className="text-2xl md:text-3xl hover:underline select-non" href="/sets">Find out more &gt;</Link>
                        <Link className="text-2xl md:text-3xl hover:underline select-non" href="/rsvp">RSVP today &gt; </Link>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Page;