import React from 'react';

const Home = () => {
    return (
        <section className='flex h-full items-center'>
            <div className='text-white w-1/3 ml-10'>
            <p className='text-3xl mb-3'>Hallo, Ich bin</p>
            <p className='text-5xl mb-3'><span className='text-textColor'>Marcus</span> Philipp</p>
            <p className='text-2xl mb-3'>Und Ich bin ein <span className='text-textColor'>Frontend-Entwickler</span></p>
            <p className='text-lg'>Als kreativer und detailorientierter Frontend-Entwickler bin ich darauf spezialisiert, einzigartige Webanwendungen zu schaffen, 
                die Benutzer begeistern. Meine soliden Kenntnisse in HTML, CSS und JavaScript, kombiniert mit meiner Erfahrung in React.js, 
                ermöglichen es mir, qualitativ hochwertige und benutzerfreundliche Lösungen zu liefern.</p>
            </div>
            <div>
                <img />
            </div>
        </section>
    );
};

export default Home;