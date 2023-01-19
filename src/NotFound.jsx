import React from 'react';
import { NavLink } from "react-router-dom";

const NotFound = () => {
    return ( 
        <section className="min-h-screen w-full bg-gray-800 flex flex-col items-center justify-center">
            <h1 className="text-white font-extrabold text-center text-6xl sm:text-7xl uppercase lg:text-8xl">404</h1>
            <p className="text-white text-xl text-center sm:text-xl uppercase lg:text-xl">Page Not Found</p>
            <NavLink to="/" className="text-white text-sm sm:text-xl lg:text-xl p-2 decoration-transparent mx-3 border-b-2 border-red-800">Go to Home Page</NavLink>
        </section>
     );
}
 
export default NotFound;