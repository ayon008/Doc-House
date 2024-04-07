import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';


const ReviewCard = ({ data }) => {
    const { _id, patient, review, rating } = data;
    const { name, picture, profession } = patient;
    return (
        <div className='border p-10'>
            <div className='flex items-center gap-4'>
                <div className='w-[50px] h-[50px]'>
                    <img src={picture} className='w-full h-full rounded-full border-yellow-400 border-2' alt="" />
                </div>
                <div>
                    <h5 className='font-bold text-sm'>{name}</h5>
                    <p className='text-[#6C6B6B] text-xs'>{profession}</p>
                </div>
                <FaQuoteLeft size={"2rem"} />
            </div>
            <div>
                <p className='mt-6'>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;