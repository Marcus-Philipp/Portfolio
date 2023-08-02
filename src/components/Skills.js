import React from 'react';
import SkillItem from './SkillItem';
import 'boxicons/css/boxicons.min.css';


const Skills = () => {
    return (
        <section className='flex flex-col min-h-screen items-center'>
            <div>
                <h2 className='text-white text-5xl'>Meine <span className='text-textColor'>Skills</span></h2>
            </div>
            <div className='flex w-full'>
                <div className='flex flex-col w-1/2 items-center'>
                    <h3 className='text-2xl text-white underline-thick mb-8'>Technologien</h3>
                    <div className='w-1/2'>
                        <SkillItem iconClass='bx bxl-html5' text='HTML5' color='text-orange-500' number='85' />
                        <SkillItem iconClass='bx bxl-css3' text='CSS3' color='text-blue-500' number='80' />
                        <SkillItem iconClass='bx bxl-javascript' text='JavaScript' color='text-yellow-400' number='66' />
                        <SkillItem iconClass='bx bxl-react' text='React' color='text-blue-300' number='63' />
                        <SkillItem iconClass='bx bxl-react' text='React Native' color='text-blue-300' number='60' />
                        <SkillItem iconClass='bx bxl-bootstrap' text='Bootstrap' color='text-purple-500' number='45' />
                        <SkillItem iconClass='bx bxl-tailwind-css' text='Tailwind CSS' color='text-blue-400' number='55' />
                        <SkillItem iconClass='bx bxs-devices' text='Responsive Web Design' color='text-black-500' number='70' />
                        <SkillItem iconClass='bx bxl-nodejs' text='Node.js' color='text-green-600' number='65' />
                        <SkillItem iconClass='bx bxl-git' text='GIT' color='text-orange-700' number='65' />
                        <SkillItem iconClass='bx bxl-php' text='PHP' color='text-blue-800' number='15' />
                    </div>
                </div>
                <div className='flex flex-col w-1/2 items-center'>
                    <h3 className='text-2xl text-white underline-thick'>Soft Skills</h3>
                </div>
            </div>
        </section>
    );
};

export default Skills;