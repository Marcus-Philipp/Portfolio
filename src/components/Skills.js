import React from 'react';
import SkillItem from './SkillItem';
import SoftSkills from './SoftSkills';
import 'boxicons/css/boxicons.min.css';


const Skills = () => {
    return (
        <section className='flex flex-col min-h-screen items-center'>
            <div>
                <h2 className='text-white text-5xl'>Meine <span className='text-textColor'>Skills</span></h2>
            </div>
            <div className='flex flex-col md:flex-col lg:flex-row w-full mt-28 mb-32'>
                <div className='flex flex-col items-center md:w-full lg:w-1/2'>
                    <h3 className='text-2xl text-white underline-thick mb-8'>Technologien</h3>
                    <div className='w-3/5'>
                        <SkillItem iconClass='bx bxl-html5' text='HTML5' color='text-orange-500' number='85' />
                        <SkillItem iconClass='bx bxl-css3' text='CSS3' color='text-blue-500' number='80' />
                        <SkillItem iconClass='bx bxl-javascript' text='JavaScript' color='text-yellow-400' number='70' />
                        <SkillItem iconClass='bx bxl-jquery' text='jQuery' color='text-blue-400' number='78' />
                        <SkillItem iconClass='bx bxl-typescript' text='TypeScript' color='text-blue-400' number='66' />
                        <SkillItem iconClass='bx bxl-react' text='React.js' color='text-blue-300' number='63' />
                        <SkillItem iconClass='bx bxl-react' text='React Native' color='text-blue-300' number='60' />
                        <SkillItem iconClass='bx bxl-vuejs' text='Vue.js' color='text-green-600' number='70' />
                        <SkillItem iconClass='bx bxs-file-json' text='JSON & API' color='text-black' number='69' />
                        <SkillItem iconClass='bx bxl-bootstrap' text='Bootstrap' color='text-purple-500' number='45' />
                        <SkillItem iconClass='bx bxl-tailwind-css' text='Tailwind CSS' color='text-blue-400' number='55' />
                        <SkillItem iconClass='bx bxs-devices' text='Responsive Web Design' color='text-black-500' number='70' />
                        <SkillItem iconClass='bx bxl-nodejs' text='Node.js' color='text-green-600' number='65' />
                        <SkillItem iconClass='bx bxl-git' text='GIT' color='text-orange-700' number='65' />
                        <SkillItem iconClass='bx bxl-php' text='PHP' color='text-blue-800' number='15' />
                    </div>
                </div>
                <div className='flex flex-col items-center md:w-full lg:w-1/2'>
                    <h3 className='text-2xl text-white underline-thick mb-20'>Soft Skills</h3>
                    <div className='w-3/5 flex flex-wrap gap-16'>
                        <SoftSkills text='Kreativität' percentage='80' />
                        <SoftSkills text='Detailorientierung' percentage='80' />
                        <SoftSkills text='Selbstmotivation' percentage='100' />
                        <SoftSkills text='Lernbereitschaft' percentage='100' />
                        <SoftSkills text='Problemlösungsfähigkeit' percentage='80' />
                        <SoftSkills text='Anpassungsfähigkeit' percentage='100' />
                        <SoftSkills text='Leidenschaft für Technik' percentage='80' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;