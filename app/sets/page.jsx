"use client"; 

import Navbar from '../Navbar';
import Set from './Set';
import { FaChevronDown } from 'react-icons/fa';
import sets from './sets';

const Page = () => {
    const onClick = () => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });

    return (
        <div className="grid grid-rows-[auto_minmax(0,_1fr)]">
            <Navbar />
            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-fixed bg-center bg-[url('./assets/background.jpg')] pb-[450px] md:pb-0">
                <div className="grid h-[100dvh] grid-rows-[75%_25%] justify-items-center items-center">
                    <div className="grid gap-1">
                        <h1 data-aos="fade-in" data-aos-delay="200" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">The 18 Sets</h1>
                        <h1 data-aos="fade-in" data-aos-delay="600" className="text-2xl md:text-4xl text-center">18 Lavenders, 18 Candles, 18 Treasures, and 18 K</h1>
                    </div>
                    <FaChevronDown onClick={onClick} className="animate-bounce self-start" size="40px" />
                </div>

                { sets.map((set, i) => (<Set set={set} i={i} key={`s${i}`} />))}
            </div>     
        </div>
    )
};

export default Page;