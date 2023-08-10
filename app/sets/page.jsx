"use client"; 

import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import Set from './Set';
import { FaChevronDown } from 'react-icons/fa';
import sets from './sets';

const Page = () => {

    const music = useRef(typeof Audio !== "undefined" ? new Audio("./music.mp3") : undefined);
    if (music?.current) music.current.loop = true;

    useEffect(() => {
        AOS.init({
            delay: 100
        });
        window.onbeforeunload = () => sessionStorage.clear();
    }, []);

    const onClick = () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

    const playMusic = () => {
        if (sessionStorage.getItem('kate-18') === 'music-on') return console.log('music is playing');
        sessionStorage.setItem('kate-18', 'music-on');
        music.current?.play();
    };

    return (
        <div onClick={playMusic} className="grid grid-rows-[auto_minmax(0,_1fr)]">
            <Navbar />
            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-fixed bg-center bg-[url('./assets/background.jpg')] pb-80 md:pb-0">
                <div className="grid h-[100dvh] grid-rows-[75%_25%] justify-items-center items-center">
                    <div data-aos="fade-in" className="grid gap-1">
                        <h1 className="text-8xl md:text-9xl font-elegante text-purpureus text-center">The 18 Sets</h1>
                        <h1 className="text-2xl md:text-4xl text-center">Eliza Kate's Closest Family and Friends</h1>
                    </div>
                    <FaChevronDown onClick={onClick} className="animate-bounce self-start" size="40px" />
                </div>

                { sets.map((set, i) => (<Set set={set} i={i} key={`s${i}`} />))}
            </div>     
        </div>
    )
};

export default Page;