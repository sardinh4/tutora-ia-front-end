'use client'

import { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const ScrollComponent = ({ content, elementId }) => {

    const elementPosition = () => {

        if (document.getElementById(elementId) == null) {
            return -100
        }
        else {
            const positionY = document.getElementById(elementId).getBoundingClientRect().bottom + 400

            return (
                positionY
            )
        }
    }

    var [isVisible, setIsVisible] = useState(false);

        const handleScroll = () => {
            const scrollY = window.scrollY;
            // Defina a altura em que o componente deve aparecer (em pixels)
            const triggerHeight = elementPosition()


            if (scrollY > triggerHeight) {
                setIsVisible(true);
            } else{
                setIsVisible(false);
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);

        
    

    return (<div onLoad={handleScroll} style={{ display: isVisible ? 'block' : 'none' }}>{content}</div>)
};


export default ScrollComponent;

