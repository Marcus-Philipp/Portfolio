import React from 'react';
import Admin2 from '../Ich2.png';

const About = () => {
    return (
        <section className='flex min-h-screen text-white justify-between items-center'>
            <div className='w-96 h-96 ml-20'>
                <img className='w-full h-full rounded-full border-8 animate-colorchange' src={Admin2} alt='Profilbild' />
            </div>
            <div className='w-1/2 mr-5'>
                <h2 className='text-5xl mb-7'>Über <span className='text-textColor'>mich</span></h2>
                <h3 className='text-3xl mb-5'><span className='text-textColor'>Frontend-</span>Entwickler</h3>
                <p className='text-lg'>Ursprünglich von meiner Faszination für Technik geleitet, habe ich mich entschieden, meine Kenntnisse
                    und Fähigkeiten auf die digitale Welt auszudehnen.
                    Ich habe mir die Grundlagen von HTML, CSS, JavaScript sowie React.js und React Native selbst beigebracht.
                    Meine Lernbereitschaft, Selbstmotivation und technischer Hintergrund haben es mir ermöglicht, mich rasch in
                    neue Technologien und Konzepte einzuarbeiten.
                    Mit meiner Problemlösungsfähigkeit und der Fähigkeit, schnell auf sich ändernde Anforderungen zu reagieren,
                    habe ich erfolgreich anspruchsvolle Projekte abgeschlossen. Diese Projekte haben mir wertvolle Erfahrungen
                    und Kenntnisse gebracht, die mein technisches Verständnis und meine Fähigkeiten in der Frontend-Entwicklung
                    weiter vertieft haben. Durch die konsequente Anwendung dieser Fähigkeiten und Kenntnisse strebe ich danach,
                    einen messbaren Einfluss auf jedes Projekt zu haben, an dem ich beteiligt bin.</p>
            </div>
        </section>
    );
};

export default About;