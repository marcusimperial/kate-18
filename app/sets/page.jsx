"use client"; 

import { FaCalendar } from 'react-icons/fa';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Navbar from '../Navbar';

const Page = () => {

    useEffect(() => {
        AOS.init({
            delay: 100
        });
    }, [])

    return (
        <div className="grid">
            <Navbar />
        </div>
    )
};

export default Page;