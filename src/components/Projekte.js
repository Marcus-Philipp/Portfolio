import React from 'react';
import ProjectItem from './ProjektItem';
import Vext from '../Vext.png';
import Pruefer from '../Pruefer.png'
import Crypt from '../Crypt.png';
import Fotomatic from '../Fotomatic.png';
import SchnickSchnack from '../Schnick-Schnack.png';
import TodoList from '../TodoList.png';
import Wetter from '../Wetter.png';
 
const Projects = () => {
    return (
        <section className='flex flex-col min-h-screen items-center'>
            <div>
                <h2 className='text-white text-5xl mb-20 text-center'>Meine <span className='text-textColor'>Projekte</span></h2>
            </div>
            <h3 className='text-2xl text-white underline-thick mb-20'>Desktop</h3>
            <div className='flex flex-wrap justify-around w-full md:w-3/4'>
                <ProjectItem url='https://vextv.netlify.app/' img={Vext} />
                <ProjectItem url='https://marcus-philipp.github.io/Kreditkartenpruefer/' img={Pruefer} />
                <ProjectItem url='https://marcus-philipp.github.io/Encrypter-----Decrypter/' img={Crypt} />
                <ProjectItem url='https://marcus-philipp.github.io/Fotomatic/' img={Fotomatic} />
                <ProjectItem url='https://marcus-philipp.github.io/Schere-Stein-Papier/' img={SchnickSchnack} />
            </div>
            <h3 className='text-2xl text-white underline-thick mb-20'>Mobile</h3>
            <div className='flex flex-wrap justify-around w-full md:w-3/4'>
                <ProjectItem url='https://todolist-react-native-marcus.netlify.app/' img={TodoList} />
                <ProjectItem url='https://sonnenschein-wetter.netlify.app/' img={Wetter} />
            </div>
        </section>
    );
};

export default Projects;