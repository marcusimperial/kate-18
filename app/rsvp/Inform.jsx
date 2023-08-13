"use client"; 

import { useRouter } from 'next/navigation';

const Inform = ({ clicked, updateClicked }) => {
    const router = useRouter();

    const onClick = () => {
        if (clicked?.success) return router.push('/sets');
        updateClicked({ running: false, status: false });
    };
    return (
        <div className="grid items-center justify-items-center p-3 gap-4">
            <h1 data-aos="fade-in" data-aos-delay="200" className="text-8xl md:text-9xl font-elegante text-purpureus text-center">{ clicked?.success ? `${clicked?.user?.name}, You're All Set!` : "That's Not Registered!"}</h1>
            <h1 data-aos="fade-in" data-aos-delay="500" className="text-3xl md:text-4xl text-center">{clicked?.success ? "Stay tuned for more updates. See you on September 30!" : "If you believe this is an error, please contact Kate or her family."}</h1>
            <div data-aos="fade-up" data-aos-delay="800" className="flex items-center gap-5">
                <h1 className="text-2xl md:text-3xl hover:underline select-none" onClick={onClick}>{ clicked?.success ? "Find more" : "Try again"} &gt;</h1>
            </div>
        </div>
    )
};

export default Inform;