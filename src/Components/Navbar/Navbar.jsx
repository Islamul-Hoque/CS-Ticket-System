import React from 'react';

const Navbar = () => {
    return (
        <div className=' sticky top-0 z-50 shadow backdrop-blur-md bg-base-900/80'>
            <div className="navbar max-w-7xl mx-auto px-6 md:px-[2rem] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>

                        <ul tabIndex="0" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a href="/">Home</a></li>
                            <li><a href="#FAQ">FAQ</a></li>
                            <li><a href="#Changelog">Changelog</a></li>
                            <li><a href="#Blog">Blog</a></li>
                            <li><a href="#Download">Download</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>

                    <a href='/' className="text-xl font-bold whitespace-nowrap cursor-pointer">CS — Ticket System</a>
                </div>

                <div className='navbar-end '>
                    <div className=" hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-black">
                            <li><a href="/">Home</a></li>
                            <li><a href="#FAQ">FAQ</a></li>
                            <li><a href="#Changelog">Changelog</a></li>
                            <li><a href="#Blog">Blog</a></li>
                            <li><a href="#Download">Download</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>

                    <div> <button className="btn border-none shadow-none rounded-[1rem] bg-[linear-gradient(125.07deg,#632ee3,#9f62f2_100%)] text-white">+&nbsp;&nbsp;New Ticket</button> </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;