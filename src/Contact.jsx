import React from 'react';
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Newslatter from "./Newslatter";

const Contact = () => {
    return ( 
        <section className="h-fit w-screen">
            <div className="relative min-h-screen w-full  bg-contact bg-fixed bg-cover flex flex-col items-center justify-center">
                <nav className="absolute top-0 left-0 flex items-end justify-end px-3 sm:px-10 w-screen min-h-[10vh] bg-transparent">

                    <NavLink to="/" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">Home</NavLink>
                    <NavLink to="/about" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">About</NavLink>
                    <NavLink to="/contact" className="text-white text-sm sm:text-xl lg:text-xl p-3  border-b-2 border-b-red-600 decoration-transparent z-20 mx-3">Contact</NavLink>
                    <NavLink to="/services" className="text-white text-sm sm:text-xl lg:text-xl p-3 decoration-transparent z-20 mx-3">services</NavLink>
                    <hr className="absolute bottom-0 left-0 w-screen bg-white/50 h-[1px] border-none z-10" />
                </nav>

                <h1 className="text-white font-extrabold text-6xl sm:text-7xl uppercase lg:text-8xl">Contact us</h1>
                <h2 className="text-white text-2xl sm:text-3xl uppercase lg:text-4xl">Build a new future</h2>

            </div>

            <div className="w-full min-h-screen flex flex-col items-center justify-center">
                <div className="px-10 text-center text-gray-800 min-h-[30vh] w-full flex flex-col items-center justify-around sm:flex-row">
                    <div>
                        <h1 className="text-lg font-bold sm:text-xl">Address</h1>
                        <p>No 3 Indus Close, Maitama, Abuja</p>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold sm:text-xl">Email:</h1>
                        <p>contact@transcendstudy.ng<br />Work hours: Monday – Friday: 9am – 5pm </p>
                    </div>
                    <div>
                        <h1 className="text-lg font-bold sm:text-xl">Phone/whatsapp</h1>
                        <p>+2348188460781</p>
                    </div>
                </div>
            <form action="https://formspree.io/f/mknaggjp"
  method="POST" className="w-[70vw] min-h-[60vh] p-5 sm:w-[60vw] lg:w-[50vw] sm:p-10 bg-white flex flex-col items-center justify-around rounded-lg shadow-lg">
                    <input type="text" name="Name" placeholder="Enter Your Name" className="outline-none px-3 py-2 w-full border-2" />
                    <input type="email" name="Email" placeholder="Enter Your Email" className="outline-none p-3 w-full border-2" />
                    <textarea type="text" name="News" placeholder="How can we be of help" className="outline-none px-5 py-2 border-2  my-3 w-full h-[30vh]" />
                    <input type="submit" name="submit_news" value="Submit" className="bg-red-800 text-white px-5 py-3 outline-none cursor-pointer" />
                </form>
            </div>

            <Newslatter />
            <Footer />
        </section>
     );
}
 
export default Contact;