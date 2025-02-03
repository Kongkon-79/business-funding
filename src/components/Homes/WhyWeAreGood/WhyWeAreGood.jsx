import React from 'react';
import Heading from '../../../utils/Heading';
import { headingTexts } from '../../../utils/heading-text';
import whyWeAreGoodData from "../../../data/whyWeAreGood.json";

const WhyWeAreGood = () => {
    return (
        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] padding_all roboto_font'>
            <div className='flex items-center justify-center pb-[44px]'>
                <Heading text={headingTexts.whyWeAreGood__headingText} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-[66px]'>
                {
                    whyWeAreGoodData?.map((data) => {
                        return <div key={data?.id}>
                            <img src={data?.img} alt='why we are good' width={50} height={50} className='w-[50px] h-[50px] mx-auto'/>
                            <h5 className='text-2xl font-medium leading-[30px] text-primary text-center pb-[6px]'>{data?.title}</h5>
                            <p className='text-base font-normal leading-[20px] text-primary/50 text-center'>{data?.description}</p>
                        </div>
                    })
                }
            </div>

        </div>
    );
};

export default WhyWeAreGood;