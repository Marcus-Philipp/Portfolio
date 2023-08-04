import React from 'react';

const Contact = () => {
    return (
        <section className='flex flex-col h-full items-center'>
            <div>
                <h2 className='text-white text-5xl text-center mb-20 mt-32'>Kontaktiere <span className='text-textColor'>Mich!</span></h2>
            </div>
            <div className='flex flex-col items-center'>
            <a href='https://github.com/Marcus-Philipp/' target='_blank' rel="noreferrer"><i className='bx bxl-github text-textColor text-shadow text-6xl mb-12' ></i></a>
            <a href='https://www.linkedin.com/in/marcus-philipp-7b786a261/' target='_blank' rel="noreferrer"><i className='bx bxl-linkedin text-textColor text-shadow text-6xl mb-12' ></i></a>
            <p className='text-textColor text-shadow text-xl lg:text-3xl'>philippmarcus89@gmail.com</p>
            </div>
        </section>
    );
};

export default Contact;