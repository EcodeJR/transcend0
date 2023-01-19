import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Newslatter from "./Newslatter";



const FAQ = () => {

    let answ = document.getElementById("answ");
    let answ2 = document.getElementById("answ2");
    let answ3 = document.getElementById("answ3");
    let answ4 = document.getElementById("answ4");
      function open1(){
         answ.classList.toggle('openA');
      };
      function open2(){
         answ2.classList.toggle('openA');
      };
      function open3(){
         answ3.classList.toggle('openA');
      };
      function open4(){
         answ4.classList.toggle('openA');
      };

    return ( 
        
        <section className="h-fit w-screen">
            <div className="relative min-h-screen w-full  bg-faq bg-fixed bg-cover flex flex-col items-center justify-center">
                <nav className="absolute top-0 left-0 flex items-end justify-end px-10 w-screen min-h-[10vh] bg-transparent">
                <NavLink to="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent  z-20 mx-3">Home</NavLink>
                    <NavLink to="/about" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">About</NavLink>
                    <NavLink to="/contact" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Contact</NavLink>
                    <NavLink to="/services" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">services</NavLink>
                    <hr className="absolute bottom-0 left-0 w-screen bg-white/50 h-[1px] border-none z-10" />
                </nav>

                <h1 className="text-white font-extrabold text-6xl sm:text-7xl lg:text-8xl">FAQ</h1>
                <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl uppercase">quality education</h2>

            </div>


                <div className="flex items-center justify-start flex-col lg:flex-row py-10 min-h-[100vh] sm:min-h-[60vh]">
                    <div className="bg-gray-200 w-[80vw] h-[50vh] sm:h-[40vh] sm:w-[70vw] lg:w-[50vw] flex items-center justify-center relative">
                    <i className='bx bxs-quote-single-left absolute top-[50%] -translate-y-[50%] left-10 text-9xl text-gray-400'></i>
                        <h1 className=" text-3xl sm:text-4xl lg:text-5xl text-gray-800 font-bold">FAQ</h1>
                    </div>


                    <div className="w-fit">
                        <div className="w-[80vw] lg:w-[40vw] m-5 h-fit bg-gray-700 p-2 text-white">
                            <div className="flex items-center  p-2 justify-between">
                                <h1>Queastion</h1>
                                <i onClick={open1} className='bx bxs-down-arrow'></i>
                            </div>
                            <h1 id="answ" className="hidden p-2">Answer</h1>
                        </div>

                        <div className="lg:w-[40vw] m-5 h-fit bg-gray-700 p-2 text-white">
                            <div className="flex items-center  p-2 justify-between">
                                <h1>Queastion</h1>
                                <i onClick={open2} className='bx bxs-down-arrow'></i>
                            </div>
                            <h1 id="answ2" className="hidden p-2">Answer</h1>
                        </div>

                        <div className="lg:w-[40vw] m-5 h-fit bg-gray-700 p-2 text-white">
                            <div className="flex items-center  p-2 justify-between">
                                <h1>Queastion</h1>
                                <i onClick={open3} className='bx bxs-down-arrow'></i>
                            </div>
                            <h1 id="answ3" className="hidden p-2">Answer</h1>
                        </div>


                        <div className="lg:w-[40vw] m-5 h-fit bg-gray-700 p-2 text-white">
                            <div className="flex items-center  p-2 justify-between">
                                <h1>Queastion</h1>
                                <i onClick={open4} className='bx bxs-down-arrow'></i>
                            </div>
                            <h1 id="answ4" className="hidden p-2">Answer</h1>
                        </div>
                        </div>
                </div>


            <Newslatter />
            <Footer />
        </section>
     );
}

 
export default FAQ;