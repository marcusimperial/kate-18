import { FaChevronDown } from 'react-icons/fa';
import sets from './sets';

const Set = ({ set, i }) => {

    const onClick = () => {
        if ((i + 1) < sets?.length) return window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="grid h-[100dvh] grid-rows-[85%_15%] justify-items-center items-center">
            <div data-aos="fade-in" className="grid justify-items-center items-center">
                <h1 className="text-8xl md:text-9xl font-elegante text-purpureus text-center">{set?.name || '18 Set'}</h1>
                <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-3 p-3">
                    { set?.people?.map((person, i) => (<h1 key={`p${i}`} className="text-xl md:text-4xl text-center">{person}</h1>)) }
                </div>
            </div>
            <FaChevronDown onClick={onClick} className="animate-bounce self-start" size="40px" />
        </div>
    )
};

export default Set;