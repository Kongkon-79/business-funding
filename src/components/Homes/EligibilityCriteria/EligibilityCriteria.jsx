import React from 'react';
import Button from '../../../common/Button';

const EligibilityCriteria = () => {
    return (
        <div className='bg-primary/10'>
            <div className='container roboto_font'>
                <div className='grid grid-cols-1 md:grid-cols-10 gap-[38px] pt-[55px] pb-[60px]'>
                    <div className='md:col-span-3'>
                        <h5 className='text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-[30px] text-primary'>Eligibility Criteria</h5>
                        <p className='text-base font-medium leading-[20px] text-secondary/70 pt-[16px]'>To qualify for funding, businesses should
                            meet the following minimum requirements:</p>
                        <div className='pt-[32px]'>
                            <Button />
                        </div>
                    </div>
                    <div className='md:col-span-3 flex flex-col justify-between'>
                        <div className='flex items-start gap-[8px]'>
                            <div>
                                <img src="/assets/images/clock.png" alt='clock' width={32} height={32} />

                            </div>
                            <div>
                                <span className='text-[20px] 2xl:text-[24px] font-normal leading-[28px] text-primary'>Time in Business</span>
                                <p className='text-base font-normal text-secondary/50 leading-[20px] pt-[6px]'>At least 1 year.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-[8px]'>
                            <div>
                                <img src="/assets/images/clock.png" alt='clock' width={32} height={32} />

                            </div>
                            <div>
                                <span className='text-[20px] 2xl:text-[24px] font-normal leading-[28px] text-primary'>Personal Credit Score</span>
                                <p className='text-base font-normal text-secondary/50 leading-[20px] pt-[6px]'>A FICO score of 500 or above.</p>
                            </div>
                        </div>


                    </div> 
                    <div className='md:col-span-4 flex flex-col justify-between'>
                        <div className='flex items-start gap-[8px]'>
                            <div>
                                <img src="/assets/images/clock.png" alt='clock' width={32} height={32} />

                            </div>
                            <div>
                                <span className='text-[20px] 2xl:text-[24px] font-normal leading-[28px] text-primary'>Monthly Revenue</span>
                                <p className='text-base font-normal text-secondary/50 leading-[20px] pt-[6px]'>Gross monthly revenue of at least $20,000.</p>
                            </div>
                        </div>
                        <div className='flex items-start gap-[8px]'>
                            <div>
                                <img src="/assets/images/clock.png" alt='clock' width={32} height={32} />

                            </div>
                            <div>
                                <span className='text-[20px] 2xl:text-[24px] font-normal leading-[28px] text-primary'>Business Location:</span>
                                <p className='text-base font-normal text-secondary/50 leading-[20px] pt-[6px]'>Operations within any of the 50 U.S. states.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EligibilityCriteria;