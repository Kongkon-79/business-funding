import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../../common/Button';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='container py-[15px] md:pt-[35px] lg:pt-[47px] md:pb-[45px] lg:pb-[65px] roboto_font bg-white sticky -top-1 z-50'>
            <div className='flex items-center justify-between'>
                {/* logo  */}
                <div>
                    <Link to='/'>
                        <img src='/assets/images/nav_logo.png' alt='nav logo' width={193} height={44}  />
                    </Link>

                </div>
                {/* menu  */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-[32px]'>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Home</li></NavLink>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>How it Works</li></NavLink>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Funding Option</li></NavLink>
                        <NavLink to='/'><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Resources</li></NavLink>
                        <NavLink to="/about-us"><li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>About Us</li></NavLink>
                    </ul>
                </div>
                {/* button  */}
                <div >
                    <Link to="/touch-to-funded">
                        <Button />
                    </Link>

                </div>

                {/* small device  */}
                <div className='block md:hidden'>
                    {
                        isOpen ? <X onClick={() => setIsOpen(!isOpen)} /> : <Menu onClick={() => setIsOpen(!isOpen)} />
                    }

                </div>

            </div>
            <div className={`${isOpen ? "w-[70%] left-0" : "w-full -left-[100%]"} h-[40%] fixed top-[0px] z-20 bg-white`}>
                {
                    isOpen && <ul className='flex flex-col items-center gap-[32px]'>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer pt-4'>Home</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>How it Works</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Funding Option</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Resources</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>About Us</li>
                    </ul>
                }
            </div>
            {/* small device end  */}
        </div>
    );
};

export default Navbar;