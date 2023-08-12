"use client"; 

import { FaCalendarCheck, FaInfoCircle, FaSearch, FaCircleNotch } from 'react-icons/fa';

const Input = ({ clicked, onConfirm, onChange }) => {

    return (
        <div className="grid items-center justify-items-center p-3 gap-4">
            <h1 data-aos="fade-in" data-aos-delay="300" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">Rsvp for Eliza Kate's 18th</h1>

            <div data-aos="fade-in" data-aos-delay="500" className="grid gap-1">
                <div className="flex items-center gap-1 p-0.5 border-b-2 border-glaucous rounded-lg">
                    <FaSearch size="25px" />
                    <input onChange={onChange} type="text" className="bg-transparent text-center text-3xl md:text-5xl outline-none placeholder:text-glaucous/40 w-full" placeholder="email or number"/>
                </div>
                
                <div className="flex items-center place-content-center gap-1">
                    <FaInfoCircle size="15px" />
                    <h1 className="text-md md:text-2xl italic">Ensure you&apos;ve given your details to Kate or her family</h1>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="800" onClick={onConfirm} className="flex items-center place-content-center p-3 gap-2 text-purpureus bg-lavender/30 rounded-xl select-none hover:bg-lavender/60">
                { !clicked?.status ? <FaCalendarCheck size="25px" /> : <FaCircleNotch className="animate-spin" size="25px" />}
                <h1 className="text-3xl md:text-4xl">{ !clicked?.status ? 'Confirm my slot' : 'Confirming my slot' }</h1>
            </div> 

        </div>
    )
};

export default Input;