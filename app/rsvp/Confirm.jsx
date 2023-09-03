"use client";

import { FaCalendarCheck } from 'react-icons/fa';
import Checkbox from "./Checkbox";

const Confirm = ({ user, members, setMembers, onConfirm }) => {

    return (
        <div className="grid grid-rows-[auto_minmax(0,_1fr)] items-center justify-items-center gap-3 p-3 overflow-hidden">

            <div className="grid items-center justify-items-center">
                <h1 data-aos="fade-in" data-aos-delay="400" className="text-7xl md:text-8xl text-purpureus font-elegante text-center">Hello, {user?.name}!</h1>
                <h1 data-aos="fade-in" data-aos-delay="400" className="text-3xl md:text-5xl text-center">Confirm your attendance by checking the box below.</h1>
                <h1 data-aos="fade-in" data-aos-delay="400" className="text-xl md:text-3xl text-center">If you were invited as a group, you&apos;ll be able to RSVP for them too</h1>
            </div>

            <div data-aos="fade-in" data-aos-delay="700" className="grid max-h-[300px] md:max-h-[400px] rounded-xl border-4 border-glaucous p-3 gap-2 overflow-auto">
                {members.map((member, i) => (<Checkbox members={members} member={member} setMembers={setMembers} key={`m${i}`} />))}
            </div>

            <div onClick={onConfirm} className="flex items-center place-content-center p-3 gap-2 text-purple bg-purpureus/80 rounded-xl select-none hover:bg-purpureus">
                <FaCalendarCheck size="35px" /> 
                <h1 className="text-3xl md:text-4xl">Confirm Attendance</h1>
            </div> 
        </div>
    )
};

export default Confirm;