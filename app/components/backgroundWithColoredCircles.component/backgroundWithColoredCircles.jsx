import React from 'react';
import './backgroundWithColoredCircles.css'


export default function backgroundWithPurpleCircles({ children, circleColor, heightContainer}) {

    return(
        <div style={{ height: `${heightContainer}` }} className='background2 background'>
            <div style={{ backgroundColor: `${circleColor}` }} className='circle'></div>
            <div style={{ backgroundColor: `${circleColor}` }} className='circle2'></div>
            { children }
        </div>
    )
}