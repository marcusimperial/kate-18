import { FaChevronDown } from 'react-icons/fa';
import sets from './sets';

const Set = ({ set, i }) => {

    const onClick = () => {
        if ((i + 1) < sets?.length) return window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        else window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id={set?.id} className="grid h-[100dvh] pt-4 md:pt-0 grid-rows-[90%_10%] md:grid-rows-[80%_20%] justify-items-center items-center">
            <div data-aos="fade-in" className="grid justify-items-center items-center grid-rows-[auto_minmax(0,_1fr)]">
                <h1 data-aos="fade-in" data-aos-delay="200" className="text-7xl md:text-8xl lg:text-9xl font-elegante text-purpureus text-center">{set?.name || '18 Set'}</h1>
                <div className="grid md:grid-cols-3 md:gap-x-6 md:gap-3">
                    { set?.people?.map((person, i) => (<h1 key={`p${i}`} data-aos="fade-in" data-aos-offset="0" data-aos-delay={((i + 1) * 150).toString()} className="text-2xl md:text-3xl lg:text-4xl text-center">{person}</h1>)) }
                </div>
            </div>
            <FaChevronDown onClick={onClick} className="animate-bounce self-start" size="35px" />
        </div>
    )
};

export default Set;