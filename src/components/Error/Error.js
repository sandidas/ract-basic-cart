import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    
    const error = useRouteError();
    console.log(error);
    return (
        <div>
           <p>Not Found</p>
        </div>
    );
};

export default Error;