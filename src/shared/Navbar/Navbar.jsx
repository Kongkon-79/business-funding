import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../../common/Button';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className='container py-[15px] md:py-[20px] lg:py-[25px] xl:py-[30px] roboto_font bg-white sticky -top-1 z-50'>
            <div className='flex items-center justify-between'>
                {/* logo  */}
                <div>
                    <Link to='/'>
                        <img src='/assets/images/nav_logo.png' alt='nav logo' width={193} height={44} />
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
                <div className='hidden md:block'>
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
            <div className={`${isOpen ? "w-[70%] right-0" : "w-full -right-[100%]"} h-[50%] fixed -top-1 z-20 bg-white`}>
                {
                    isOpen && <ul className='flex flex-col items-center gap-[32px]'>
                        <div className='w-full flex items-center justify-start pl-4 pt-2'>
                            <X onClick={() => setIsOpen(!isOpen)} />
                        </div>
                        <li className='text-base font-normal leading-[24px] md:leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Home</li>
                        <li className='text-base font-normal leading-[24px] md:leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>How it Works</li>
                        <li className='text-base font-normal leading-[24px] md:leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Funding Option</li>
                        <li className='text-base font-normal leading-[24px] md:leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>Resources</li>
                        <li className='text-base font-normal leading-[24px] md:leading-[28px] text-primary hover:text-secondary hover:underline cursor-pointer'>About Us</li>
                    </ul>
                }
            </div>
            {/* small device end  */}
        </div>
    );
};

export default Navbar;