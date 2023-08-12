"use client"; 

import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Input from './Input';
import Inform from './Inform';
import { getData, updateData } from "./firestore";

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

    const onConfirm = async () => {
        if (!value) return;
        if (clicked?.status) return;
        updateClicked({ status: true });
        // mark that it is clicked
        // attempt to get data 
        let id = await getData('emails', value);
        if (!id) id = await getData('numbers', value);
        if (!id) return updateClicked({ status: true, success: false, running: true });
        // return err
        const op = await updateData(id);
        if (!op) return updateClicked({ status: true, success: false, running: true });
        return updateClicked({ status: true, success: true, running: true });
        // else complete
    };

    return (
        <div className="grid grid-rows-[auto_minmax(0,_1fr)] h-[100dvh]">
            <Navbar />

            <div className="grid items-center justify-items-center text-glaucous bg-cover bg-center bg-fixed bg-[url('./assets/background.jpg')]">

                { !clicked?.running ? <Input clicked={clicked} onConfirm={onConfirm} onChange={onChange} /> : <Inform clicked={clicked} updateClicked={updateClicked} /> }

            </div>
        </div>
    )
};

export default Page;