import React from 'react';
import Portrait from '../Portrait.png';

const Home = () => {
    return (
        <section className='flex flex-col-reverse mt-10 md:mt-20 lg:mt-0 lg:flex-row min-h-screen items-center justify-around text-center p-4 mb-20 lg:text-left lg:p-0 lg:mb-0'>
            <div className='text-white w-full lg:w-1/3 lg:ml-10'>
                <p className='text-3xl mb-3'>Hallo, Ich bin</p>
                <p className='text-5xl mb-3'><span className='text-textColor'>Marcus</span> Philipp</p>
                <p className='text-2xl mb-3'>und Ich bin ein <span className='text-textColor'>Frontend-Entwickler</span></p>
                <p className='text-lg'>Als kreativer und detailorientierter Frontend-Entwickler bin ich darauf spezialisiert, einzigartige Webanwendungen zu schaffen,
                    die Benutzer begeistern. Meine soliden Kenntnisse in HTML, CSS und JavaScript, kombiniert mit meiner Erfahrung in React.js,
                    ermöglichen es mir, qualitativ hochwertige und benutzerfreundliche Lösungen zu liefern.</p>
            </div>
            <div className='w-1/2 md:w-1/3 relative flex mb-10'>
                <img className='shadow-custom-color rounded-full bg-gradient-to-t from-textColor to-backgroundColor xl:mt-6' src={Portrait} alt='Portrait' />
                <div className='absolute flex max-w-full max-h-full justify-center items-center top-12 md:top-20 lg:top-32 xl:top-48 xl:left-5'>
                    <i className='bx bxl-html5 text-orange-500 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-6'></i>
                    <i className='bx bxl-css3 text-blue-500 text-5xl md:text-6xl lg:text-8xl'></i>
                    <i className='bx bxl-javascript text-yellow-400 text-5xl md:text-6xl lg:text-8xl mt-10'></i>
                    <i className='bx bxl-react text-blue-300 text-5xl md:text-6xl lg:text-7xl xl:text-8xl'></i>
                </div>
            </div>
        </section>
    );
};

export default Home;