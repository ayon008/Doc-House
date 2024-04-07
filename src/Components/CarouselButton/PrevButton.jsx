import React from 'react';

const PrevButton = () => {
    return (
        <button className='absolute top-1/2 transform -translate-y-1/2 btn btn-outline w-[50px] h-[50px] rounded-full p-2 text-[#F7A582]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="#F7A582" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    );
};

export default PrevButton;