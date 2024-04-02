import React from 'react';
import img1 from '../assets/Rectangle 20075.png'
import img2 from '../assets/Rectangle 20076.png'
import img3 from '../assets/Rectangle 20077.png'
import dot from '../assets/Group 34830.svg'


const BannerText = () => {
    return (
        <div className='text-white Source items-center flex justify-between gap-6 lg:flex-row flex-col h-fit my-auto'>
            <div className='space-y-6 lg:w-1/2 lg:text-left text-center'>
                <h3 className='lg:text-5xl text-2xl font-semibold w-3/4 lg:w-full mx-auto'>Your Best Medical Help Center</h3>
                <p className='text-sm'>Lorem Ipsum is simply dummy text they are printing typesetting has been the industry’s stardard.</p>
                <button className='btn bg-btn text-white'>All Services</button>
            </div>
            <div className='lg:w-1/2 lg:block hidden'>
                <div className='lg:w-[500px] ms-auto relative z-20'>
                    <div className='grid grid-cols-3 ms-auto'>
                        <img className='order-3 w-full h-auto -mt-10' src={img1} alt="" />
                        <img className='order-2 w-full h-auto mt-16 ms-20' src={img2} alt="" />
                        <img className='order-1 z-20 ms-36 w-full h-auto' src={img3} alt="" />
                    </div>
                    <img className='h-[100px] z-10 absolute top-1/2 left-[20%]' src={dot} alt="" />
                </div>
            </div>
            <div className='block lg:hidden relative'>
                <img className='w-[120px] h-auto absolute left-1/2 top-[10%] z-30' src={img1} alt="" />
                <img className='w-[120px] h-auto mt-20 z-20 relative' src={img2} alt="" />
                <img className='w-[120px] h-auto absolute right-1/2 top-[20%] z-10' src={img3} alt="" />
                <img className='h-[100px] absolute top-[60%] -left-[75%] z-0' src={dot} alt="" />
            </div>
        </div>
    );
};

export default BannerText;