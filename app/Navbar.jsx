import { FaCalendar } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="grid grid-flow-col justify-between items-center bg-purpureus text-purple md:px-24">
            <h1 className="text-6xl font-elegante">Eliza Kate</h1>
            <div className="flex items-center gap-x-4">
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <Link className="text-2xl font-georgia" href="/">Home</Link>
                </div>
                <div className="flex items-center p-1 border-gold hover:border-b-2 select-none">
                    <Link className="text-2xl font-georgia" href="/sets">18 Sets</Link>
                </div>
            </div>
            <div className="flex items-center gap-1 text-purpureus bg-purple rounded-lg p-1 px-3 select-none hover:scale-[0.98]">
                <FaCalendar size="25px" />
                <h1 className="text-2xl font-georgia">RSVP today</h1>
            </div>
        </div>
    )
};

export default Navbar;