import React from 'react';

export const Error=({e})=>{

    return(
        <>
        <p className="alert alert-danger error">
            {e}
        </p>
        </>
    )
}