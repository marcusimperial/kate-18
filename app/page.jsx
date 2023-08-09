"use client"; 

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Navbar from './Navbar';

const Page = () => {

    const audio = new Audio('./music.mp3');
    audio.loop = true;

    useEffect(() => {
        AOS.init({
            delay: 100
        });
    }, []);

    return (
        <div onClick={() => audio.play()} className="grid grid-rows-[auto_minmax(0,_1fr)] h-screen">
            <Navbar />

            <div className="grid items-center justify-items-center p-72 text-glaucous bg-cover bg-center bg-[url('./assets/background.jpg')]">
                <h1 data-aos="fade-in" className="text-3xl">Join us as we celebrate</h1>
                <h1 data-aos="fade-in" className="text-9xl font-elegante text-purpureus">Eliza Kate's 18th Birthday</h1>
                <div data-aos="fade-up" data-aos-delay="500" className="flex items-center gap-5">
                    <h1 className="text-2xl hover:underline select-none">Find out more &gt; </h1>
                    <h1 className="text-2xl hover:underline select-none">RSVP today &gt; </h1>
                </div>
            </div>
            <h1 className="text-9xl font-elegante"></h1>
        </div>
    )
};

export default Page;