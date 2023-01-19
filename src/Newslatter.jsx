import React from 'react';

const Newslatter = () => {
    return ( 
        <form action="https://formspree.io/f/xlekddpe"
        method="POST" className="w-screen min-h-[30vh] sm:min-h-[30vh] lg:min-h-[40vh] flex flex-col items-center justify-center p-5">
                <h1 className="font-bold text-3xl sm:text-3xl lg:text-4xl text-gray-800">Join Our Community</h1>
                <h3 className="text-sm sm:text-xl">Enter your email to join our newslatter</h3>
                <input type="text" name="news" placeholder="Enter Your Email" className="px-5 py-3 w-[60vw] sm:w-[40vw] border-2 my-3 outline-none" />
                <input type="submit" name="submit_news" value="Submit" className="bg-red-800 text-white px-6 py-3 outline-none cursor-pointer" />
            </form>
     );
}
 
export default Newslatter;