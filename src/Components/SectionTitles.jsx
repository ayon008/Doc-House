import React from 'react';

const SectionTitles = ({ heading, description }) => {
    return (
        <div className='text-center'>
            <h3 className='font-bold text-2xl'>{heading}</h3>
            <p className='w-3/4 mx-auto my-10'>{description}</p>
        </div>
    );
};

export default SectionTitles;