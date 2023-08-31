"use client"; 

import Navbar from './Navbar';
import Link from 'next/link';
import { FaChevronDown, FaDirections } from 'react-icons/fa';
import Carousel from './Carousel';

const Page = () => {

    const onClick = (e) => {
        const i = parseFloat(e.target.parentElement.id);
        console.log(i, e.target.id);
        if ((i + 1) < 4) return window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const getDirections = () => window.open('https://www.google.com/maps/dir/Edsa+Shangri-La,+Manila', '_blank');

    return (
        <div className="grid grid-rows-[auto_minmax(0,_1fr)]">
            <Navbar />
            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-fixed bg-center bg-[url('./assets/background.jpg')] pb-[450px] md:pb-0">
                
                <div id="0" className="grid h-[100dvh] grid-rows-[90%_10%] md:grid-rows-[80%_20%] justify-items-center md:items-center">
                    <div className="grid items-center justify-items-center p-3">
                        <div className="grid justify-items-center items-center">
                            <h1 data-aos="fade-in" className="text-2xl md:text-3xl text-center">Join us as we celebrate</h1>
                            <h1 data-aos="fade-in" data-aos-delay="400" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Eliza Kate&apos;s 18th Birthday</h1>
                            <div data-aos="fade-in" data-aos-delay="800" className="flex flex-wrap place-content-center items-center py-4 gap-3">
                                <Link className="text-2xl md:text-3xl hover:underline select-none" href="/sets">Find more &gt; </Link>
                                <Link className="text-2xl md:text-3xl hover:underline select-none" href="/rsvp">RSVP today &gt; </Link>
                                <Link className="text-2xl md:text-3xl hover:underline select-none" href="/debutant">The Debutant &gt; </Link>
                            </div>
                        </div>
                    </div>
                    <FaChevronDown onClick={onClick} className="animate-bounce self-start h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
                </div>

                <div id="1" className="grid h-[100dvh] grid-rows-[90%_10%] md:grid-rows-[80%_20%] justify-items-center md:items-center">
                    <div className="grid items-center justify-items-center p-3">
                        <div className="grid items-center justify-items-center lg:grid-cols-2 gap-3">
                            <div className="grid items-center justify-items-center gap-2 w-full">
                                <h1 data-aos="fade-in" data-aos-delay="400" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Where?</h1>
                                <div className="flex flex-col gap-1">
                                    <h1 data-aos="fade-in" data-aos-delay="400" className="text-3xl lg:text-4xl text-center">September 30, 2023, 5:00 PM</h1>
                                    <h1 data-aos="fade-in" data-aos-delay="400" className="text-2xl lg:text-3xl text-center">The Marquee, EDSA Shangri-La Hotel</h1>
                                </div>
                                <div data-aos="fade-in" data-aos-delay="400" onClick={getDirections} className="flex items-center p-1 lg:p-2 gap-2 border-2 border-lavender text-lavender rounded-lg select-none hover:scale-[0.98]">
                                    <h1 className="text-2xl lg:text-3xl">Get Directions</h1>
                                    <FaDirections size="35px" />
                                </div>
                            </div>

                            <div className="grid justify-items-center gap-2">
                                <h1 data-aos="fade-in" data-aos-delay="800" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Dress Code?</h1>
                                <div className="flex flex-col gap-1">
                                    <h1 data-aos="fade-in" data-aos-delay="800" className="text-3xl lg:text-4xl text-center">Any Pastel Color except for Purple</h1>
                                    <h1 data-aos="fade-in" data-aos-delay="800" className="text-2xl lg:text-3xl text-center">Formal Dress for Women, Slacks and Polo for Men</h1>
                                </div>
                                <div className="flex items-center">
                                    <img data-aos-offset="0" data-aos="fade-in" data-aos-delay="800" className="h-[55px] center" src="/pallete.png" />
                                    <img data-aos-offset="0" data-aos="fade-in" data-aos-delay="800" className="h-[60px] center" src="/pallete-2.png" />
                                </div>

                            </div>
                        </div>

                    </div>
                    <FaChevronDown onClick={onClick} className="animate-bounce self-start h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
                </div>

                <div id="2" className="grid h-[100dvh] grid-rows-[90%_10%] md:grid-rows-[80%_20%] justify-items-center md:items-center">
                    <div className="grid items-center justify-items-center p-3">
                        <div className="grid items-cetner justify-items-center gap-6">
                            <h1 data-aos="fade-in" data-aos-delay="400" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Kate&lsquo;s Birthdays</h1>
                            <h1 data-aos="fade-in" data-aos-delay="400" className="text-2xl lg:text-3xl text-center italic">A glimpse of Eliza Kate through the years</h1>
                            <Carousel />
                        </div>
                    </div>
                    <FaChevronDown onClick={onClick} className="animate-bounce self-start h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
                </div>

                <div lang="en" id="3" className="grid h-[100dvh] grid-rows-[90%_10%] md:grid-rows-[80%_20%] justify-items-center md:items-center">
                    <div data-aos="fade-in" className="grid justify-items-center items-center grid-rows-[auto_minmax(0,_1fr)] pt-10">
                        <h1 data-aos="fade-in" data-aos-delay="200" className="text-7xl md:text-8xl lg:text-9xl font-elegante text-purpureus text-center py-1">Meet the Family</h1>
                        <div className="grid md:grid-cols-2 md:gap-x-6 md:gap-3 p-3">
                            <div data-aos="fade-in" data-aos-offset="0" data-aos-delay="150" className="grid">
                                <h1 className="text-5xl md:text-6xl text-center">Ronaldo Garcia</h1>
                                <h1 data-aos="fade-in" data-aos-offset="0" data-aos-delay="150" className="text-2xl md:text-3xl lg:text-4xl text-center">Eliza Kate&lsquo;s Father</h1>
                            </div>
                            <div data-aos="fade-in" data-aos-offset="0" data-aos-delay="300" className="grid">
                                <h1 className="text-5xl md:text-6xl text-center">Conchita Garcia</h1>
                                <h1 data-aos="fade-in" data-aos-offset="0" data-aos-delay="150" className="text-2xl md:text-3xl lg:text-4xl text-center">Eliza Kate&lsquo;s Mother</h1>
                            </div>
                            <div data-aos="fade-in" data-aos-offset="0" data-aos-delay="450" className="grid">
                                <h1 className="text-5xl md:text-6xl text-center">Liza Garcia-Alfaro</h1>
                                <h1 data-aos="fade-in" data-aos-offset="0" data-aos-delay="150" className="text-2xl md:text-3xl lg:text-4xl text-center">Eliza Kate&lsquo;s Older Sister</h1>
                            </div>
                            <div data-aos="fade-in" data-aos-offset="0" data-aos-delay="600" className="grid">
                                <h1 className="text-5xl md:text-6xl text-center">Ezekiel Garcia</h1>
                                <h1 data-aos="fade-in" data-aos-offset="0" data-aos-delay="150" className="text-2xl md:text-3xl lg:text-4xl text-center">Eliza Kate&lsquo;s Older Brother</h1>
                            </div>
                            <div data-aos="fade-in" data-aos-offset="0" data-aos-delay="750" className="grid">
                                <h1 className="text-5xl md:text-6xl text-center">Eliza Kate Garcia</h1>
                                <h1 data-aos="fade-in" data-aos-offset="0" data-aos-delay="150" className="text-2xl md:text-3xl lg:text-4xl text-center">The Debutant</h1>
                            </div>
                            <div data-aos="fade-in" data-aos-offset="0" data-aos-delay="900" className="grid">
                                <h1 className="text-5xl md:text-6xl text-center">Liz Katherine Garcia</h1>
                                <h1 data-aos="fade-in" data-aos-offset="0" data-aos-delay="150" className="text-2xl md:text-3xl lg:text-4xl text-center">Eliza Kate&lsquo;s Younger Sister</h1>
                            </div>


                        </div>
                    </div>
                    <FaChevronDown onClick={onClick} className="animate-bounce self-start h-[30px] w-[30px] md:h-[35px] md:w-[35px]" />
                </div>

            </div>   
        </div>
    )
};

export default Page;