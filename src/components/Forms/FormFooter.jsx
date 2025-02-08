import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const FormFooter = () => {
    return (
        <div className='container'>
            <div className='flex flex-col md:flex-row items-center justify-between pt-[15px] md:pt-[21px] lg:pt-[27px] pb-[20px] md:pb-[28px] lg:pb-[36px] border-t-[1px] border-primary/50 mt-[18px] md:mt-[23px] lg:mt-[27px]'>
                <p className='text-base font-normal leading-[30px] md:leading-[45px] lg:leading-[55px] text-primary/50'>@ 2025 Business Funding, All eights Reseerved</p>
                <div className='flex items-center gap-[18px] pt-[16px]'>
                    <Linkedin className='w-[14px] h-[14px text-primary' />
                    <Facebook className='w-[14px] h-[14px text-primary' />
                    <Instagram className='w-[14px] h-[14px text-primary' />
                </div>
                <p className='flex items-center gap-[48px]'>
                    <span className='text-base font-normal leading-[28px] text-primary/50'>Privacy Policy</span>
                    <span className='text-base font-normal leading-[28px] text-primary/50'>Terms & Condition</span>
                </p>
            </div>
        </div>
    );
};

export default FormFooter;