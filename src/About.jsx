import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Newslatter from "./Newslatter";

const About = () => {
    return ( 
        <section className="h-fit w-screen">
            <div className="relative min-h-screen w-full  bg-about bg-fixed bg-cover flex flex-col items-center justify-center">
                <nav className="absolute top-0 left-0 flex items-end justify-end px-10 w-screen min-h-[10vh] bg-transparent">

                    <NavLink to="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Home</NavLink>
                    <NavLink to="/about" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent border-b-2 border-b-red-600 z-20 mx-3">About</NavLink>
                    <NavLink to="/contact" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Contact</NavLink>
                    <NavLink to="/services" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">services</NavLink>
                    <hr className="absolute bottom-0 left-0 w-screen bg-white/50 h-[1px] border-none z-10" />
                </nav>

                <h1 className="text-white font-extrabold uppercase text-6xl sm:text-7xl lg:text-8xl">About us</h1>
                <h2 className="text-white text-2xl uppercase text-center sm:text-3xl lg:text-4xl">Get the education you have always dreamed about. </h2>

            </div>

            <div className="min-h-[100vh] w-full">
                <div className="h-fit w-full px-5 py-10 sm:px-10 lg:px-20 flex flex-col items-start justify-center sm:flex-row">
                    <div className="lg:w-[50vw] mb-5">
                        <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold">What we're About</h1>
                    </div>
                    
                    <p className="pl-10 border-l-4 border-red-800 lg:w-[50%]">We are an international education consulting firm, registered in Nigeria as Transcend Interactive Solutions. We provide study-abroad solutions for people who want to study in the Uk. At Transcend Study Support we provide a range of services for prospective students with dreams to study in foreign universities with the goal to obtain a world-class education and internationally respected certificates. We represent a wide array of universities and we guide prospective students through the process of choosing the right course, finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                </div>

                <div className="h-fit w-full px-5 py-10 sm:px-10 lg:px-20 flex flex-col items-start justify-center sm:flex-row">
                <img src="./src/images/mission.jpg" alt="" className="w-[80vw] sm:w-[30vw] lg:w-[40vw]" />
                    <div className="lg:w-[50vw] mx-10">
                        <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold my-5">Mission</h1>
                        <p className="">We provide study-abroad solutions for people who want to study in the Uk. At Transcend Study Support we provide a range of services for prospective students with dreams to study in foreign universities with the goal to obtain a world-class education and internationally respected certificates. </p>
                    </div>
                </div>

                <div className="h-fit w-full px-5 py-10 sm:px-10 lg:px-20 flex flex-col items-start justify-center sm:flex-row">
                    <div className="lg:w-[50vw] mb-5">
                        <h1 className="text-3xl sm:text-3xl lg:text-5xl font-bold">Our Vision</h1>
                    </div>
                    
                    <p className="pl-10 lg:w-[50%]">We represent a wide array of universities and we guide prospective students through the process of choosing the right course, finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                </div>
            </div>

            <Newslatter />
            <Footer />
        </section>
     );
}
 
export default About;