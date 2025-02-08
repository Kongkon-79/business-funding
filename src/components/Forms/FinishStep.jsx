import React from 'react';

const FinishStep = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-[30px] md:gap-[45px] lg:gap-[65px] py-[20px] md:py-0">
        <div className="md:col-span-3 flex flex-col justify-center pr-[20px] md:pr-0 pl-[20px] md:pl-[34px] lg:pl-[47px]">
          <h4 className='text-lg md:text-xl font-medium leading-[28px] text-white'>
            Thank you for completing our application. Just click the button below and you'll be taken to the funding source that you match with.
          </h4>
          {/* buttton  */}
          <div className='pt-[20px] md:pt-[30px] lg:pt-[40px] flex items-center justify-center'>
            <button type='submit' className='w-full text-base font-normal leading-[20px] bg-white text-primary py-[14px] px-[40px] md:px-[170px] rounded-[4px]'>Finish</button>
          </div>
        </div>
        <div className="md:col-span-2 px-[20px] md:px-0">
          <img src="/assets/images/documents_finish.png" alt="document and finish" width={412} height={553} className='w-full' />
        </div>
      </div>
    </div>
  );
};

export default FinishStep;


