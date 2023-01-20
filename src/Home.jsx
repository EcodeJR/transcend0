import React from 'react';
import Footer from "./Footer";
import Newslatter from "./Newslatter";
import { NavLink } from "react-router-dom";

const Home = () => {
    return ( 
        <main className="h-fit w-full">
            <div className="relative min-h-screen w-full  bg-hero bg-fixed bg-cover flex flex-col items-center justify-center">
                <nav className="absolute top-0 left-0 flex items-end justify-end px-3 sm:px-10 w-full min-h-[10vh] bg-transparent">
                    <NavLink to="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent border-b-2 border-b-red-600 z-20 mx-3">Home</NavLink>
                    <NavLink to="about" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">About</NavLink>
                    <NavLink to="contact" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Contact</NavLink>
                    <NavLink to="services" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">services</NavLink>
                    
                    
                    
                    <hr className="absolute bottom-0 left-0 w-full bg-white/50 h-[1px] border-none z-10" />
                </nav>

                <h1 className="text-white font-extrabold text-center text-6xl sm:text-7xl uppercase lg:text-8xl">a new future</h1>
                <h2 className="text-white text-2xl text-center sm:text-3xl uppercase lg:text-4xl">Network with students from around the world</h2>

            </div>




            <div className="p-5 sm:p-10 lg:p-20 w-full min-h-screen">
                <div className="flex items-center justify-center flex-col">
                    <span className="font-bold text-2xl sm:text-3xl lg:text-4xl text-gray-800 flex flex-col items-center justify-center">Would You Like To Know US <hr className="border-none h-[4px] w-[40px] bg-red-800" /></span>
                    <p className="m-5 text-center sm:m-10">We are an international education consulting firm, registered in Nigeria as Transcend Interactive Solutions. We provide study-abroad solutions for people who want to study in the Uk. At Transcend Study Support we provide a range of services for prospective students with dreams to study in foreign universities with the goal to obtain a world-class education and internationally respected certificates. We represent a wide array of universities and we guide prospective students through the process of choosing the right course, finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                    <NavLink to="/about" className="bg-red-800 py-3 px-4 sm:py-4 sm:px-8 lg:py-4 lg:px-5 text-white font-bold">Learn More</NavLink>
                </div>
                <div className="p-5 sm:p-10 lg:p-20 flex items-center justify-around flex-col-reverse lg:flex-row">
                    <div className="flex item-start justify-center flex-col">
                        <h1 className="text-2xl sm:text-3xl lg:text-3xl text-gray-800 font-bold">LETS GET YOU THE EDUCATION YOU DESERVE</h1>
                        <p className="text-xl font-bold mx-5 my-10 pl-10 border-l-4 border-red-800 text-gray-800">Study Abroad<br/>Statement of Purpose Review</p>

                        
                    </div>
                    <div className="min-h-[30vh] sm:min-h-[40vh] lg:min-h-[40vh] w-full lg:w-[50vw] mx-5 my-10 lg:my-0 relative bg-white overflow-hidden">
                        <img src="./assets/home_sec2.jpg" alt="" className="absolute z-20 w-[90%] sm:w-[80%] lg:w-[80%] h-auto top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]" />
                        <div className="absolute bottom-0 left-0 w-full h-[10vh] bg-red-800 z-10"></div>
                    </div>
                </div>
            </div>





            <div className="w-full min-h-[80vh] lg:min-h-[50vh] flex flex-col lg:flex-row bg-gray-200">
                <span className="text-3xl font-bold sm:text-3xl lg:text-4xl text-gray-800 flex flex-col items-start justify-center lg:-rotate-90 px-20 my-10">What We Offer <hr className="border-none h-[4px] w-[40px] bg-red-800" /></span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="group hover:bg-gray-900 px-5 py-10 sm:py-5 sm:px-5 lg:px-5 lg:py-5  hover:text-white h-full flex flex-col items-start justify-center">
                        <i className='bx bxs-plane-take-off text-6xl text-gray-800 group-hover:text-white'></i>
                        <h1 className="mb-10 mt-5 font-bold text-xl">Experience</h1>
                        <p>We represent a wide array of universities and we guide prospective students through the process of choosing the right course.</p>
                        <button className="border-red-800 border-2 py-3 my-3 group-hover:border-none group-hover:bg-red-800 px-6 sm:py-4 sm:px-5 lg:py-3 lg:px-5 text-red-800 group-hover:text-white font-bold">Learn More</button>
                    </div>

                    <div className="group hover:bg-gray-900 px-5 py-10 sm:py-5 sm:px-5 lg:px-5 lg:py-5  hover:text-white h-full flex flex-col items-start justify-center">
                    <i className='bx bxs-book text-6xl text-gray-800 group-hover:text-white'></i>
                        <h1 className="mb-10 mt-5 font-bold text-xl">Education</h1>
                        <p>Finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                        <button className="border-red-800 border-2 py-3 my-3 group-hover:border-none group-hover:bg-red-800 px-6 sm:py-4 sm:px-5 lg:py-3 lg:px-5 text-red-800 group-hover:text-white font-bold">Learn More</button>
                    </div>

                    <div className="group hover:bg-gray-900 px-5 py-10 sm:py-5 sm:px-5 lg:px-5 lg:py-5  hover:text-white h-full flex flex-col items-start justify-center">
                    <i className='bx bx-file text-6xl text-gray-800 group-hover:text-white'></i>
                        <h1 className="mb-10 mt-5 font-bold text-xl">Certification</h1>
                        <p>Study in foreign universities with the goal to obtain a world-class education and internationally respected certificates.</p>
                        <button className="border-red-800 border-2 py-3 my-3 group-hover:border-none group-hover:bg-red-800 px-6 sm:py-4 sm:px-5 lg:py-3 lg:px-5 text-red-800 group-hover:text-white font-bold">Learn More</button>
                    </div>

                    <div className="group hover:bg-gray-900 px-5 py-10 sm:py-5 sm:px-5 lg:px-5 lg:py-5 hover:text-white h-full flex flex-col items-start justify-center">
                    <i className='bx bx-rocket text-6xl text-gray-800 group-hover:text-white'></i>
                        <h1 className="mb-10 mt-5 font-bold text-xl">Career Boost</h1>
                        <p>We provide study-abroad solutions for people who want to study in the Uk.</p>
                        <button className="border-red-800 border-2 py-3 my-3 group-hover:border-none group-hover:bg-red-800 px-6 sm:py-4 sm:px-5 lg:py-3 lg:px-5 text-red-800 group-hover:text-white font-bold">Learn More</button>
                    </div>
                </div>
            </div>




            <div className="py-5 sm:py-10 lg:py-20 lg:flex">
                <div className="bg-gray-200 w-[80vw] h-[30vh] lg:h-[40vh] sm:h-[40vh] sm:w-[70vw] lg:w-[50vw] flex items-center justify-center relative">
                    <i className='bx bxs-quote-single-left absolute top-[50%] -translate-y-[50%] left-10 text-9xl text-gray-400'></i>
                
                    <h1 className="text-4xl sm:text-4xl lg:text-5xl text-gray-800 font-bold z-20">Why choose us</h1>
                </div>
                <div className="py-10 px-5 sm:px-10 lg:px-20 flex flex-col items-center justify-center lg:w-[50vw]">
                    <span>
                    <i className='bx bxs-badge text-3xl text-gray-800 text-red-800' ></i>
                    <h1 className="text-2xl font-bold">Best Industry</h1>
                    <p>Finding a university that is the best fit for them and walking them through the admission and visa application processes.</p>
                    </span>

                    <span className="my-5">
                    <i className='bx bx-world text-3xl text-gray-800 text-red-800'></i>
                    <h1 className="text-2xl font-bold">Learn Online</h1>
                    <p>Study in foreign universities with the goal to obtain a world-class education and internationally respected certificates.</p>
                    </span>

                    <span>
                    <i className='bx bx-user text-3xl text-gray-800 text-red-800'></i>
                    <h1 className="text-2xl font-bold">Professional</h1>
                    <p> At Transcend Study Support we provide a range of services for prospective students with dreams to study in foreign universities with the goal to obtain a world-class education and internationally respected certificates.</p>
                    </span>
                </div>
            </div>



            <div className="min-h-[60vh] sm:min-h-[70vh] w-full bg-homeSev bg-fixed bg-cover flex flex-col items-center justify-center p-10 lg:p-20">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white flex flex-col items-start justify-center mx-auto mb-5">Contact<br />Transcend Study <hr className="border-none h-[4px] w-[40px] bg-red-800" /></span>

                <form action="https://formspree.io/f/mknaggjp"
  method="POST" className="w-[90vw] min-h-[30vh] sm:min-h-[40vh] rounded-md p-10 sm:w-[60vw] lg:w-[50vw] sm:p-10 bg-white flex flex-col items-center justify-around">
                    <input type="text" name="Name" placeholder="Enter Your Name" className="outline-none px-3 py-2 w-full border-2" />
                    <input type="email" name="Email" placeholder="Enter Your Email" className="outline-none p-3 w-full border-2" />
                    <textarea type="text" name="News" placeholder="How can we be of help" className="outline-none px-5 py-2 border-2  my-3 w-full h-[15vh] sm:h-[20vh]" />
                    <input type="submit" name="submit_news" value="Submit" className="bg-red-800 text-white px-5 py-3 outline-none cursor-pointer" />
                </form>
            </div>



            <Newslatter />

            <Footer />

        </main>
     );
}
 
export default Home;