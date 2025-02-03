import React from 'react';
import whyChooseUsData from '../../../data/whyChooseUs'
import Heading from '../../../utils/Heading';
import { headingTexts } from '../../../utils/heading-text';


const WhyChooseUs = () => {
    return (
        <div className='container padding_top roboto_font'>
            <div className='flex items-center justify-center pb-[44px]'>
                <Heading text={headingTexts.whyChooseUs__headingText}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
                {
                    whyChooseUsData?.map((data)=>{
                        return <div key={data?.id} className='bg-primary py-[80px] px-[20px] rounded-[4px]'>
                            <img src={data?.img} alt='why choose us' width={80} height={80} className='w-[80px] h-[80px] mx-auto pb-[12px]'/>
                            <h5 className='text-[32px] font-semibold text-white leading-[28px] text-center'>{data?.title}</h5>
                        </div>  
                    })
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;