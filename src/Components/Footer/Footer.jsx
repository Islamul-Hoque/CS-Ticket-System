import React from 'react';

import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

const Footer = () => {
    return (
    <div className='bg-black'>
        <footer className='max-w-7xl mx-auto text-[#a1a1aa] py-[3rem] px-[2rem]'>
            <div className="footer border-b pb-[2rem] grid md:grid-cols-5 justify-between">
                <nav>
                    <h2 className='font-bold text-white mb-2'>CS — Ticket System</h2>
                    <p className='text-[0.8rem]'>CS — Ticket System helps you manage customer tickets, track progress, and resolve issues faster with an easy-to-use support dashboard.</p>
                </nav>

                <nav>
                    <h6 className='font-bold text-white mb-2'>Company</h6>
                    <a href='#About-Us' className="link link-hover">About Us</a>
                    <a href='#Our-Mission' className="link link-hover">Our Mission</a>
                    <a href='#Contact-Saled' className="link link-hover">Contact Saled</a>
                </nav>

                <nav>
                    <h6 className='font-bold text-white mb-2'>Services</h6>
                    <a href='#Products-Services' className="link link-hover">Products & Services</a>
                    <a href='#Customer-Stories' className="link link-hover">Customer Stories</a>
                    <a href='#Download-Apps' className="link link-hover">Download Apps</a>
                </nav>

                <nav>
                    <h6 className='font-bold text-white mb-2'>Information</h6>
                    <a href='#Privacy-Policy' className="link link-hover">Privacy Policy</a>
                    <a href='#Terms-Conditions' className="link link-hover">Terms & Conditions</a>
                    <a href='#Join-Us' className="link link-hover">Join Us</a>
                </nav>

                <nav>
                    <h6 className='font-bold text-white mb-2'>Social Links</h6>
                    <div className='flex gap-2 items-center justify-center'> 
                        <div className='bg-white text-black p-[0.2rem] text-[0.8rem] rounded-full'><RiTwitterXFill /></div> 
                        <a href="https://twitter.com/CS_TicketSystem" className="link link-hover text-[0.88rem] -mt-[0.15rem] md:-mt-[0.25rem]">@CS_TicketSystem</a>
                    </div>
                    <div className='flex gap-2 items-center justify-center'> 
                        <div className='bg-white text-black p-[0.2rem] text-[0.8rem] rounded-full'><FaLinkedinIn />  </div> 
                        <a href="https://www.linkedin.com/in/cs-ticket-system" className="link link-hover text-[0.88rem] -mt-[0.15rem] md:-mt-[0.25rem]">@cs-ticket-system</a>
                    </div>
                    <div className='flex gap-2 items-center justify-center'> 
                        <div className='bg-white text-black p-[0.2rem] text-[0.8rem] rounded-full'><FaFacebookF />   </div> 
                        <a href="https://www.facebook.com/CS.Ticket.System" className="link link-hover text-[0.88rem] -mt-[0.15rem] md:-mt-[0.25rem]">@CS.Ticket.System</a>
                    </div>
                    <div className='flex gap-2 items-center justify-center'> 
                        <div className='bg-white text-black p-[0.15rem] text-[0.85rem] rounded-full'><CgMail />      </div> 
                        <a href="mailto:cs.ticket.system@gmail.com" className="link link-hover text-[0.88rem] -mt-[0.15rem]">cs.ticket.system@gmail.com</a>
                    </div> 
                </nav>
            </div>
                <p className='text-center pt-8'> &copy; {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
        </footer>
    </div>

    )
}

export default Footer;