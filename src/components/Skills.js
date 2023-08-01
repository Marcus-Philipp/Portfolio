import React from 'react';
import 'boxicons/css/boxicons.min.css';


const Skills = () => {
    return (
        <section className='flex flex-col h-full items-center'>
            <div>
                <h2 className='text-white text-5xl'>Meine <span className='text-textColor'>Skills</span></h2>
            </div>
            <div className='flex w-full'>
                <div className='flex flex-col w-1/2 items-center'>
                    <h3>Technologien</h3>
                    <div>
                        <i class='bx bxl-html5'></i>
                        <p>HTML5</p>
                    </div>
                    <div>
                        <i class='bx bxl-css3' ></i>
                        <p>CSS3</p>
                    </div>
                    <div>
                        <i class='bx bxl-javascript' ></i>
                        <p>JavaScript</p>
                    </div>
                    <div>
                        <i class='bx bxl-react' ></i>
                        <p>React</p>
                    </div>
                    <div>
                        <i class='bx bxl-bootstrap' ></i>
                        <p>Bootstrap</p>
                    </div>
                    <div>
                        <i class='bx bxl-tailwind-css' ></i>
                        <p>Tailwind CSS</p>
                    </div>
                    <div>
                        <i class='bx bxl-nodejs' ></i>
                        <p>Node</p>
                    </div>
                    <div>
                        <i class='bx bxl-git'></i>
                        <p>GIT</p>
                    </div>
                    <div>
                        <i class='bx bxl-php' ></i>
                        <p>PHP</p>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 items-center'>
                    <h3>Soft Skills</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;