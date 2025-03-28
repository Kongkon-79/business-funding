import React from 'react';
import Button from '../../common/Button';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <div className='container padding_top roboto_font pb-[69px]'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0'>
                <h5 className='text-[24px] md:text-[28px] lg:text-[32px] font-normal leading-[26px] md:leading-[32px] lg:leading-[40px] text-primary'>Meet Capitalized, obtaining <br className='hidden lg:block'/>
                    working capital for your <br className='hidden lg:block'/>
                    business has never been easier.</h5>
                <div>
                    <Button />
                </div>
            </div>
            {/* second part  */}
            <div className='pt-[40px]'>
                <div className='grid grid-cols-1 md:grid-cols-10'>
                    <div className='md:col-span-4 pr-[107px]'>
                        <img src="/assets/images/nav_logo.png" alt='footer logo' width={193} height={44}  />
                        <p className='text-xl font-normal leading-[24px] text-secondary/70 pt-[27px]'>Business funding made fast and
                            simple for all types of business
                            needs, and credit situations.</p>
                        <div className='flex items-center gap-[18px] pt-[16px]'>
                            <div className='flex items-center justify-center w-[48px] h-[48px] rounded-full bg-primary'>
                                <Linkedin className='w-[48px] h-[14px text-white' />

                            </div>
                            <div className='flex items-center justify-center w-[48px] h-[48px] rounded-full bg-primary'>
                                <Facebook className='w-[48px] h-[14px text-white' />


                            </div>
                            <div className='flex items-center justify-center w-[48px] h-[48px] rounded-full bg-primary'>
                                <Instagram className='w-[48px] h-[14px text-white' />
                            </div>
                        </div>

                    </div>
                    <div className='md:col-span-2 pr-[52px]'>
                        <h5 className='text-2xl font-medium leading-[30px] text-primary'>Quick Links</h5>
                        <ul className='pt-[10px]'>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Home</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>How It Works</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Finding Option</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Resources</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>About Us</li>
                        </ul>
                    </div>
                    <div className='md:col-span-2 pr-[52px]'>
                        <h5 className='text-2xl font-medium leading-[30px] text-primary'>Legal Information</h5>
                        <ul className='pt-[10px]'>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Privacy Policy</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Terms of Service</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Disclosures</li>
                        </ul>
                    </div>
                    <div className='md:col-span-2 '>
                        <h5 className='text-2xl font-medium leading-[30px] text-primary'>Contact Us</h5>
                        <ul className='pt-[10px]'>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Email: example@gmail.com</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Phone:  (800) 919-5351</li>
                            <li className='text-base font-normal leading-[28px] text-secondary/70 py-1'>Physical Address: New York</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;