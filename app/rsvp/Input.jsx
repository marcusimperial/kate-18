"use client"; 

import { FaArrowRight, FaInfoCircle, FaSearch, FaCircleNotch } from 'react-icons/fa';

const Input = ({ clicked, onSearch, onChange }) => {

    const onKeyDown = (e) => {
        if (e.key !== 'Enter') return;
        e.preventDefault();
        onSearch();
    };

    return (
        <div className="grid items-center justify-items-center p-3 gap-4">
            <h1 data-aos="fade-in" data-aos-delay="300" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Rsvp for Eliza Kate&apos;s 18th</h1>

            <div data-aos="fade-in" data-aos-delay="500" className="grid gap-1">
                <div className="flex items-center gap-1 p-0.5 border-b-2 border-glaucous rounded-lg">
                    <FaSearch size="25px" />
                    <input 
                    onKeyDown={onKeyDown} 
                    onChange={onChange} 
                    type="text" 
                    className="bg-transparent text-center text-3xl md:text-4xl outline-none placeholder:text-glaucous/40 w-full" 
                    placeholder="you@mail.com or 9178492005"/>
                </div>
                
                <div className="flex items-center place-content-center gap-1">
                    <FaInfoCircle size="15px" />
                    <h1 className="text-md md:text-2xl italic text-center">Ensure you&apos;ve given your details to Kate or her family.</h1>
                </div>
                <div className="flex items-center place-content-center gap-1">
                <FaInfoCircle size="15px" />
                    <h1 className="text-md md:text-2xl italic text-center">Please don&apos;t include spaces. Numbers should start with 9.</h1>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="800" onClick={onSearch} className="flex items-center place-content-center p-3 gap-2 text-purpureus bg-lavender/30 rounded-xl select-none hover:bg-lavender/60">
                { !clicked?.status ? <FaArrowRight size="25px" /> : <FaCircleNotch className="animate-spin" size="25px" />}
                <h1 className="text-3xl md:text-4xl">{ !clicked?.status ? 'Find my info!' : 'Searching for you' }</h1>
            </div> 

        </div>
    )
};

export default Input;