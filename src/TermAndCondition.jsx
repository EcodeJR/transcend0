import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Newslatter from "./Newslatter";

const TermsAndCondition = () => {
    return ( 
        <section className="h-fit w-screen">
            <div className="relative min-h-screen w-full  bg-terms bg-fixed bg-cover flex flex-col items-center justify-center">
                <nav className="absolute top-0 left-0 flex items-end justify-end px-10 w-screen min-h-[10vh] bg-transparent">
                <NavLink to="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent  z-20 mx-3">Home</NavLink>
                    <NavLink to="/about" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">About</NavLink>
                    <NavLink to="/contact" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Contact</NavLink>
                    <NavLink to="/services" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">services</NavLink>
                    <hr className="absolute bottom-0 left-0 w-screen bg-white/50 h-[1px] border-none z-10" />
                </nav>

                <h1 className="text-white font-extrabold text-6xl sm:text-7xl lg:text-8xl">Terms & Condition</h1>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl uppercase">no limits to what you can achieve!</h2>

            </div>

            <div className="min-h-screen w-full p-5 sm:px-10 lg:px-20 flex items-center justify-around flex-col">
                <div className="sm:flex sm:items-start justify-between">
                    <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold my-5">Terms</h1>
                    <p className="sm:w-[50%] lg:w-[70%]">We are an international education consulting firm, registered in Nigeria as Transcend Interactive Solutions. We provide study-abroad solutions for people who want to study in the Uk. At Transcend Study Support we provide a range of services for prospective students with dreams to study in foreign universities with the goal to obtain a world-class education and internationally respected certificates. We represent a wide array of universities and we guide prospective students through the process of choosing the right course, finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                </div>

                <div className="sm:flex sm:items-start justify-between my-10">
                    <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold my-5">Policies</h1>
                    <p className="sm:w-[50%] lg:w-[70%]">We are an international education consulting firm, registered in Nigeria as Transcend Interactive Solutions. We provide study-abroad solutions for people who want to study in the Uk. At Transcend Study Support we provide a range of services for prospective students with dreams to study in foreign universities with the goal to obtain a world-class education and internationally respected certificates. We represent a wide array of universities and we guide prospective students through the process of choosing the right course, finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                </div>

                <div className="sm:flex sm:items-start justify-between">
                    <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold my-5">Disclaimer</h1>
                    <p className="sm:w-[50%] lg:w-[70%]">We are an international education consulting firm, registered in Nigeria as Transcend Interactive Solutions. We provide study-abroad solutions for people who want to study in the Uk. At Transcend Study Support we provide a range of services for prospective students with dreams to study in foreign universities with the goal to obtain a world-class education and internationally respected certificates. We represent a wide array of universities and we guide prospective students through the process of choosing the right course, finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                </div>
            </div>


            <Newslatter />
            <Footer />
        </section>
     );
}
 
export default TermsAndCondition;