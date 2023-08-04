import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useMediaQuery } from 'react-responsive';

const SoftSkills = ({ text, percentage }) => {

    const { ref, inView } = useInView({ threshold: 1 });
    const [progress, setProgress] = useState(0);
    const isDesktop = useMediaQuery({ minDeviceWidth: 1024 });

    useEffect(() => {
        if (inView && isDesktop) {
            setTimeout(() => setProgress(percentage), 2200);
        } else if (inView) {
            setTimeout(() => setProgress(percentage), 1000);
        }
    }, [inView, percentage, isDesktop]);

    return (
        <div ref={ref} className='flex flex-col flex-1 items-center mb-10'>
            <div style={{ width: 100, height: 100, marginBottom: 15 }}>
                <CircularProgressbar 
                value={progress} 
                text={`${progress}%`} 
                styles={{ 
                    trail: { stroke: 'black' },
                    path: { stroke: '#14FFEC' },
                    text: { fill: 'white' }, 
                    }} />
            </div>
            <p className='text-white text-shadow'>{text}</p>
        </div>
    );
};

export default SoftSkills;