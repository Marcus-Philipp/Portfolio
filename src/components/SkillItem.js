import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import 'boxicons/css/boxicons.min.css';

const SkillItem = ({ iconClass, text, color, number }) => {

    const [outerWidth, setOuterWidth] = useState(0);
    const [innerWidth, setInnerWidth] = useState(0);
    const [innerOpacity, setInnerOpacity] = useState(0);
    const [showText, setShowText] = useState(false);

    const { ref, inView } = useInView({
        threshold: 1,
    });

    useEffect(() => {

        if (inView) {
            const outerTimer = setTimeout(() => setOuterWidth(100), 0);

            const innerOpacityTimer = setTimeout(() => setInnerOpacity(1), 500);

            const innerTimer = setTimeout(() => setInnerWidth(number), 1000);

            const showTimer = setTimeout(() => setShowText(true), 2000);

            return () => {
                clearTimeout(outerTimer);
                clearTimeout(innerTimer);
                clearTimeout(innerOpacityTimer);
                clearTimeout(showTimer);
            };
        };

    }, [inView, number]);

    return (
        <div ref={ref} className='mb-8'>
            <i className={`${iconClass} ${color} text-3xl ml-1`}></i>
            <p className='text-white ml-1'>{text}</p>
            <div className='relative border-4 border-black rounded-full h-4 bg-black w-full transition-all duration-1000 ease-in' style={{ width: `${outerWidth}%` }}>
                <span className='absolute border-4 border-textColor h-full rounded-full transition-all duration-1000 ease-in' style={{ width: `${innerWidth}%`, opacity: innerOpacity }}></span>
                {showText && <span className='absolute text-white text-xs rounded-lg bottom-4 p-1 bg-black' style={{ left: `${innerWidth}%` }}>{number}%</span>}
            </div>
        </div>
    );
};

export default SkillItem;