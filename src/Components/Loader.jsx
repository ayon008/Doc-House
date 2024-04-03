import React from 'react';
import { FallingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center backdrop-filter backdrop-blur-lg">
            <FallingLines
                color="#4fa94d"
                width="100"
                visible={true}
                ariaLabel="falling-circles-loading"
            />
        </div>
    );
};

export default Loader;
