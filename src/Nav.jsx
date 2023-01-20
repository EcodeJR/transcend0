import React from 'react'

const Nav = () => {
    return ( 
        <div className="w-screen h-[10vh] flex items-center justify-between px-5 text-gray-800 bg-white sm:px-10 lg:px-20">
            <img src="./assets/Transcend_Blue.png" alt="" className="w-[100px]" />
            <div className="flex flex-col sm:flex-row items-center justify-around w-2/5">
            <a href="mailto:contact@transcendstudy.ng" className="text-sm sm:text-lg">contact@transcendstudy.ng</a>
            <a href="tel:+2348188460781" className="mx-5 text-sm sm:text-lg">+2348188460781</a>
                <div className="flex items-center justify-around">
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
        </div>
     );
}
 
export default Nav;