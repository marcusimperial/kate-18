"use client"; 

import Navbar from '../Navbar';
import images from './images';

const Page = () => {

    return (
        <div className="grid grid-rows-[auto_minmax(0,_1fr)]">
            <Navbar />
            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-fixed bg-center bg-[url('./assets/background.jpg')] min-h-[100dvh]">
                <h1 data-aos="fade-in" data-aos-delay="200" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">The Debutant.</h1>
                <div className="flex flex-wrap p-2 justify-center overflow-auto">
                    {
                        images.map((image, i) => (
                            <div key={`i${i}`} data-aos="fade-in" data-aos-offset="0" data-aos-delay={((i + 1) * 150).toString()} className="max-w-[400px] max-h-[500px] rounded-lg">
                                <img className="w-full h-full object-cover" src={`https://firebasestorage.googleapis.com/v0/b/kate-18.appspot.com/o/${image}?alt=media`} />
                            </div>
                        ))
                    }
                </div>

            </div>     
        </div>
    )
};

export default Page;