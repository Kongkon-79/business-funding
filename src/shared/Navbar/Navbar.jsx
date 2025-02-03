import React from 'react';

const Navbar = () => {
    return (
        <div className='container pt-[47px] pb-[65px] roboto_font'>
            <div className='flex items-center justify-between'>
                {/* logo  */}
                <div>
                    <img src='/public/assets/images/nav_logo.png' alt='nav logo' width={114} height={35}/>
                </div>
                {/* menu  */}
                <div>
                    <ul className='flex items-center gap-[32px]'>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>Home</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>How it Works</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>Funding Option</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>Resources</li>
                        <li className='text-base font-normal leading-[28px] text-primary hover:text-secondary hover:underline cursor-default'>About Us</li>
                    </ul>
                </div>
                {/* button  */}
                <div>
                    <button className='py-[10px] px-[16px] bg-[#224260] rounded-[8px] text-base font-normal leading-[28px] text-white'>Touch to funded</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;