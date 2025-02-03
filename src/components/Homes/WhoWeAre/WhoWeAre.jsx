import React from 'react';
import Heading from '../../../utils/Heading';
import { headingTexts } from '../../../utils/heading-text';

const WhoWeAre = () => {
    return (
        <div className='container padding_top roboto_font'>
            <div className='flex items-center justify-center pb-[44px]'>
                <Heading text={headingTexts.whoWeAre__headingText} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-[23px]'>
                <div className='md:col-span-1'>
                    <p className='text-base font-semibold text-[#01080EB2] leading-[28px]'>At Business Funiding, we are dedicated to helping individuals and
                        businesses achieve their financial goals. With over [X] years of
                        experience in the financial services industry, we have built a
                        reputation for delivering tailored solutions, innovative strategies,
                        and unparalleled customer service. Our mission is to provide
                        clarity, confidence, and control in every financial decision our
                        clients make.</p>
                    <p className='text-base font-semibold text-[#01080EB2] leading-[28px] pt-[56px]'>Our core values are the foundation of everything we do:</p>
                    <ul className='list-disc pl-5 ml-2'>
                        <li className='text-base font-semibold text-[#01080EB2] leading-[28px]'>Integrity: We prioritize transparency and honesty in all our interactions.</li>
                        <li className='text-base font-semibold text-[#01080EB2] leading-[28px]'>Innovation: We leverage cutting-edge technology to deliver smarter financial solutions.</li>
                        <li className='text-base font-semibold text-[#01080EB2] leading-[28px]'>Client-Centric Approach: Your goals are our priority, and we tailor our services to meet your unique needs.</li>
                        <li className='text-base font-semibold text-[#01080EB2] leading-[28px]'>Excellence: We strive for the highest standards in everything we do.</li>
                    </ul>
                </div>
                <div className='md:col-span-1'>
                    <img src='/assets/images/whoWeAre.png' alt='who we are' width={497} height={465} />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;