import React from 'react';

const NextButton = ({ click, label }) => {
    return (
        <button onClick={click} label={label} className='btn btn-outline text-white bg-[#F7A582] rounded-full w-[50px] h-[50px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    );
};

export default NextButton;