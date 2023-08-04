import React from 'react';

const ProjectItem = ({ url, img }) => {
    return (
        <div className='h-60 ml-16 mr-16 mb-32 w-full md:w-1/4'>
            <a href={url} target='_blank' rel="noreferrer">
                <img src={img} alt='ProjectScreen' className='rounded-lg shadow-custom-color h-full w-full' />
                </a>
        </div>
    );
};

export default ProjectItem;