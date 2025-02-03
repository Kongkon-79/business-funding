import { Menu } from 'lucide-react';
import React from 'react';
import Button from '../../common/Button';

const Navbar = () => {
    return (
        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] py-[15px] md:pt-[35px] lg:pt-[47px] md:pb-[45px] lg:pb-[65px] roboto_font'>
            <div className='flex items-center justify-between'>
                {/* logo  */}
                <div>
                    <img src='/assets/images/nav_logo.png' alt='nav logo' width={114} height={35} />
                </div>
                {/* menu  */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-[32px]'>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>Home</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>How it Works</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>Funding Option</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>Resources</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>About Us</li>
                    </ul>
                </div>
                {/* button  */}
                <div >
                    <Button/>
                </div>

                {/* small device  */}
                <div className='block md:hidden'>
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;