"use client"; 

import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Input from './Input';
import Inform from './Inform';
import { getData, getGroupMembers, updateData } from "./firestore";
import Confirm from './Confirm';

const Page = () => {

    const getClickedData = () => {
        try {
            if (localStorage.getItem('kate-18-data') === JSON.stringify({ status: false, running: false })) return false;
            const clickedData = JSON.parse(localStorage.getItem('kate-18-data'));
            if (!clickedData) return false;
            return clickedData;
        } catch {
            return false;
        }
    };

    const [clicked, setClicked] = useState({ status: false, running: false });
    useEffect(() => {
        const clickedData = getClickedData();
        if (clickedData) setClicked({ ...clickedData });
    }, []);
    const updateClicked = (data) => {
        
        setClicked({ ...data });
        localStorage.setItem('kate-18-data', JSON.stringify({ ...data }));
    };
    const [value, setValue] = useState('');

    const onChange = (e) => setValue(e.target.value || '');

    const [members, setMembers] = useState([]);
    const [user, setUser] = useState({});
 
    // const onConfirm = async () => {
    //     if (!value) return;
    //     if (clicked?.status) return;
    //     updateClicked({ status: true });
    //     // mark that it is clicked
    //     // attempt to get data 
    //     let id = await getData('emails', value);
    //     if (!id) id = await getData('numbers', value);
    //     if (!id) return updateClicked({ status: true, success: false, running: true });
    //     // return err
    //     const op = await updateData(id);
    //     if (!op) return updateClicked({ status: true, success: false, running: true });
    //     return updateClicked({ status: true, success: true, running: true });
    //     // else complete
    // };

    const onSearch = async () => {
        if (!value) return;
        if (clicked?.status) return;
        setClicked({ status: true });
        let data = await getData('emails', value);
        if (!data) data = await getData('numbers', value);
        if (!data) return updateClicked({ status: true, success: false, running: true });
        const user = await getData('guests', data?.ref);
        // get user 
        if (user?.group) {
            const groupMembersData = await getGroupMembers(user?.group);
            let groupMemberPromises = [];
            for (const { ref } of groupMembersData) groupMemberPromises.push(getData('guests', ref));
            const groupMembers = await Promise.all(groupMemberPromises);
            setMembers([ ...groupMembers ]);
        } else setMembers([ user ]);
        setUser({ ...user });
        return setClicked({ status: true, pending: true, running: true });
    };

    const onConfirm = () => {
        if (!members.some(({ confirm }) => confirm)) return;
        for (const { confirmStaged, id } of members) if (confirmStaged) updateData(id, true);
        updateClicked({ status: true, running: true, success: true, user: user });
    };

    return (
        <div className="grid grid-rows-[auto_minmax(0,_1fr)] h-[100dvh]">
            <Navbar />

            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-center bg-fixed bg-[url('./assets/background.jpg')]">

                {
                    !clicked?.running ?
                    <Input clicked={clicked} onSearch={onSearch} onChange={onChange} /> :
                    (
                        clicked?.pending ?
                        <Confirm members={members} user={user} setMembers={setMembers} onConfirm={onConfirm} /> :
                        <Inform user={user} clicked={clicked} updateClicked={updateClicked} />
                    )
                }

            </div>
        </div>
    )
};

export default Page;