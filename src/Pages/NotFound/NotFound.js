import React from 'react';
import './NotFound.module.css'


const NotFound = () => {
    return (

        <div className="container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops!requested url not found, please try again<br></br><a className='text-decoration-none homepage' href="/">Go to Homepage</a></p>


        </div>


    );
};

export default NotFound;