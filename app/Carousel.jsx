"use client";

import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import images from "./images";

const Carousel = () => {

    const [index, setIndex] = useState(0);
    const [imgSrc, setImgSrc] = useState(images[index]);


    const goLeft = () => {
        if ((index - 1) < 0) return setIndex(images.length - 1);
        setIndex(index - 1);
    };

    const goRight = () => {
        if ((index + 1) > (images.length - 1)) return setIndex(0);
        setIndex(index + 1);
    };

    useEffect(() => setImgSrc(images[index]), [index]);

    return (
        <div data-aos="fade-in" data-aos-delay="800" className="grid p-3 h-[450px] text-white w-full bg-periwinkle/30 relative items-center justify-items-center rounded-xl">
            <img className="max-w-full max-h-full rounded-lg overflow-hidden" src={`https://firebasestorage.googleapis.com/v0/b/kate-18.appspot.com/o/${imgSrc?.img}?alt=media`} />
            <h1 className="text-xl md:text-2xl text-purpureus italic">{imgSrc?.sub}</h1>
            <div onClick={goLeft} className="rounded-full bg-lavender/80 pointer absolute z-10 left-5 top-1/2 text-glaucous select-none hover:scale-[1.2]">
                <FaAngleLeft size="40px" />
            </div>

            <div onClick={goRight} className="rounded-full bg-lavender/80 pointer absolute z-10 right-5 top-1/2 text-glaucous select-none hover:scale-[1.2]">
                <FaAngleRight size="40px" />
            </div>
        </div>
    )
};

export default Carousel;