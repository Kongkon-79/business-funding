
import React from 'react';

import FinancialSolutionsData from "../../../data/FinancialSolutions.json";
import Heading from '../../../utils/Heading';
import { headingTexts } from '../../../utils/heading-text';

const FinancialSolutions = () => {
    return (
        <div className='px-4 md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[212px] padding_top roboto_font'>
            <div className='flex items-center justify-center pb-[44px]'>
                <Heading text={headingTexts.financialSolutions__headingText}/>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[32px]'>
                {
                    FinancialSolutionsData?.map((data) => {
                        return <div key={data?.id} className='flex items-start gap-[8px]'>
                            <div className='w-[28px] h-[28px] rounded-full bg-primary flex items-center justify-center'>
                                <span className='text-base font-semibold leading-[20px] text-white'>{data?.id}</span>
                            </div>
                            <div>
                                <h5 className='text-xl font-semibold leading-[28px] text-primary pb-[5px]'>{data?.title}</h5>
                                <ul className='list-disc ml-2 pl-5'>
                                    <li className='text-base fotn-normal leading-[20px] text-black/60'>{data?.desc1}</li>
                                    <li className='text-base fotn-normal leading-[20px] text-black/60 pt-[5px]'>{data?.desc2}</li>
                                </ul>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default FinancialSolutions;