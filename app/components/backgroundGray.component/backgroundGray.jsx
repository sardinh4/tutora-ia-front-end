import React from 'react';
import './backgroundGray.css'

export default function backgroundLinearGradient({children}) {

    return (
        <>
            <div className='background'>
                    {children}
            </div>
        </>
    )
}