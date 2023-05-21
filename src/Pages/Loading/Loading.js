import React from 'react';
import loading from '../../../src/images/Loading_2.gif'

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <img src={loading} alt="" />

        </div>
    );
};

export default Loading;