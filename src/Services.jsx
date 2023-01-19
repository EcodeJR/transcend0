import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Newslatter from "./Newslatter";

const Join = () => {
    return ( 
    <section className="h-fit w-screen">
        <div className="relative min-h-screen w-full  bg-join bg-fixed bg-cover flex flex-col items-center justify-center">
                <nav className="absolute top-0 left-0 flex items-end justify-end px-10 w-screen min-h-[10vh] bg-transparent">

                    <NavLink to="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent  z-20 mx-3">Home</NavLink>
                    <NavLink to="/about" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">About</NavLink>
                    <NavLink to="/contact" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Contact</NavLink>
                    <NavLink to="/services" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent border-b-2 border-b-red-600 z-20 mx-3">Services</NavLink>
                    <hr className="absolute bottom-0 left-0 w-screen bg-white/50 h-[1px] border-none z-10" />
                </nav>

                <h1 className="text-white font-extrabold text-6xl sm:text-7xl uppercase lg:text-8xl">Services</h1>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl uppercase text-center">HND? Third-Class? There are no limits to what you can achieve!</h2>

            </div>

            <div className="min-h-screen w-full flex flex-col items-center justify-around text-gray-800 text-center p-5 sm:p-10">

                <div className="w-full">
                    <h1 className="text-lg italic font-bold">Study Abroad</h1>
                    <p className="text-base">While we represent several universities, we are committed to helping our students through admission and visa application processes ensuring that they are able to study a course suited to their dreams and aspirations. 
                    We present prospective students with a range of courses at various educational levels in collaboration with schools whose interests we represent. The available programmes include:</p>
                </div>
                <div className="flex flex-col sm:flex-row justify-around items-center w-full">
                <img src="./src/images/serv.jpg" alt="" className=" h-auto w-[70vw] sm:w-[20vw]" />
                <div className="p-5 sm:p-10">
                    <p className="text-lg italic font-bold">Doctorate programmes</p>
                    <p className="text-lg italic font-bold">Masters Programmes</p>
                    <p className="text-lg italic font-bold">Premasters programmes</p>
                    <p className="text-lg italic font-bold">Undergraduate Programmes</p>
                    <p className="text-lg italic font-bold">Postgraduate programmes</p>
                    <p className="text-lg italic font-bold">A’ Levels, Degree Foundation or Pre-university programmes</p>
                    <p className="text-lg italic font-bold">Ordinary and advanced diploma programmes</p>
                    <p className="text-lg italic font-bold">Top up courses (for HND and third-class class degree holders)</p>
                </div>
                </div>
            </div>

            <Newslatter />
            <Footer />
    </section>
     );
}
 
export default Join;