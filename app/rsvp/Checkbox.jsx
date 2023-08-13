"use client";

import { useState } from "react";
import { FaSquare, FaCheckSquare } from 'react-icons/fa';

const Checkbox = ({ member, members, setMembers }) => {
    const [confirmed, setConfirmed] = useState(member?.confirm || false);

    const getIndex = () => members.findIndex(({ id }) => id === member?.id);

    const onCheck = () => {
        if (member?.confirm) return;
        setConfirmed(true);
        const index = getIndex();
        let arr = [ ...members ];
        arr[index] = { ...members[index], confirmStaged: true };
        setMembers([ ...arr ]);
    };

    const onUnCheck = () => {
        if (member?.confirm) return;
        setConfirmed(false);
        const index = getIndex();
        let arr = [ ...members ];
        arr[index] = { ...members[index], confirmStaged: false };
        setMembers([ ...arr ]);
    };

    return (
        <div className="grid items-center justify-items-center">
            <div className={`flex items-center gap-2 select-none ${confirmed ? 'opacity-100' : 'opacity-70'}`}>
                { confirmed ? <FaCheckSquare onClick={onUnCheck} size="35px" /> : <FaSquare onClick={onCheck} size="35px"  />}
                <h1 className="text-3xl md:text-5xl">{member?.name}</h1>
            </div>
        </div>
    )
};

export default Checkbox;