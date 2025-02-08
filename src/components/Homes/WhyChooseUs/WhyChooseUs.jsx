import React, { useState } from 'react';
import whyChooseUsData from '../../../data/whyChooseUs';
import Heading from '../../../utils/Heading';
import { headingTexts } from '../../../utils/heading-text';

const WhyChooseUs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    return (
        <div className='container padding_top roboto_font'>
            <div className='flex items-center justify-center pb-[44px]'>
                <Heading text={headingTexts.whyChooseUs__headingText} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
                {whyChooseUsData?.map((data) => {
                    return (
                        <div
                            key={data?.id}
                            className='w-full md:w-[323px] h-[308px] bg-primary py-[80px] px-[20px] rounded-[4px] relative cursor-pointer'
                            onMouseOver={() => setHoveredCard(data.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {hoveredCard === data.id ? (
                                <div className='absolute top-0 left-0 w-full h-full bg-[#225C93] rounded-[4px] flex items-center justify-start pl-[40px] pr-[20px]'>
                                    <ul className='list-disc text-white text-left'>
                                        <li className='text-base font-semibold leading-[24px]'>{data?.list1}</li>
                                        <li className='text-base font-semibold leading-[24px]'>{data?.list2}</li>
                                        <li className='text-base font-semibold leading-[24px]'>{data?.list3}</li>
                                    </ul>
                                </div>
                            ) : (
                                <>
                                    <img
                                        src={data?.img}
                                        alt='why choose us'
                                        width={80}
                                        height={80}
                                        className='w-[80px] h-[80px] mx-auto pb-[12px]'
                                    />
                                    <h5 className='text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-white leading-[28px] text-center'>
                                        {data?.title}
                                    </h5>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WhyChooseUs;
