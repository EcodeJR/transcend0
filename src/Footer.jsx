import React from 'react';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="flex flex-col items-start justify-between min-h-[50vh] w-full sm:px-10 sm:py-5 lg:px-20 lg:py-10 p-5 text-white bg-gray-900">
            <img src="./src/icons/Transcend_White.png" alt="" className="w-[200px]" />
            <div className="flex flex-col items-center justify-center lg:flex-row w-full py-5">
                <div className="p-10 flex flex-col items-center text-center text-white lg:items-start justify-around">
                    <h1 className="mb-10 text-xl font-bold">Address</h1>
                    <span className="text-sm sm:text-base lg:text-base font-bold"><i className='bx bx-current-location mx-5 text-lg'></i>No 3 Indus Close, Maitama, Abuja</span>
                    <a href="mailto:contact@transcendstudy.ng" className="text-sm sm:text-base lg:text-base font-bold"><i className='bx bxs-envelope mx-5 text-lg'></i>contact@transcendstudy.ng</a>
                    <a href="tel:+2348188460781" className="text-sm sm:text-base lg:text-base font-bold"><i className='bx bxs-phone-call mx-5 text-lg'></i>+2348188460781</a>
                </div>

                <div className="p-10 lg:mx-5 flex flex-col items-center lg:items-start justify-around">
                    <h1 className="mb-10 text-xl font-bold">Quick Links</h1>
                    <NavLink to="/" className="text-sm sm:text-base lg:text-base font-bold">Home</NavLink>
                    <NavLink to="/about" className="text-sm sm:text-base lg:text-base font-bold">About</NavLink>
                    <NavLink to="/contact" className="text-sm sm:text-base lg:text-base font-bold">Contact</NavLink>
                    <NavLink to="/services" className="text-sm sm:text-base lg:text-base font-bold">services</NavLink>
                </div>

                <div className="p-10 flex flex-col items-center lg:items-start justify-around">
                    <h1 className="mb-10 text-xl font-bold">Terms & Policies</h1>
                    <NavLink to="/faq" className="text-sm sm:text-base lg:text-base font-bold">FAQ</NavLink>
                    <NavLink to="/term&condition" className="text-sm sm:text-base lg:text-base font-bold">Terms & Condition</NavLink>
                    <NavLink to="/term&condition" className="text-sm sm:text-base lg:text-base font-bold">Privacy Policy</NavLink>
                </div>
                
            </div>
            <hr className="border-none bg-gray-400 w-full h-[2px] my-5" />
            <div className="w-full flex flex-col lg:flex-row items-center justify-between">
                <h1 className="text-sm"> © TrancendStudy. 2023 All Rights Reserved</h1>
                <div className="flex text-sm">
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=100087171070496" className="text-xl"><i className='bx bxl-facebook'></i></a>
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/transcend_study/" className="text-xl mx-3"><i className='bx bxl-instagram'></i></a>
                
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://api.whatsapp.com/send?phone=2348188460781&text=Hello my name is " className="text-xl"><i className='bx bxl-whatsapp'></i></a>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;