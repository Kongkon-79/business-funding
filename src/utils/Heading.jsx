import React from 'react';

const Heading = ({text = "empty text"}) => {
    return (
        <div>
            <h6 className='text-[32px] font-semibold leading-[28px] text-primary pb-[5px] text-center'>{text}</h6>
            <div className='w-full h-[7px] rounded-[4px] bg-gradient-to-r from-[#224260] to-[#2242604D]'/>
        </div>
    );
};

export default Heading;