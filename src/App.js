import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/ÜberMich';
import Skills from './components/Skills';
import Projects from './components/Projekte';
import Contact from './components/Kontakt';

function App() {
  return (
    <section className='font-quicksand bg-backgroundColor'>
      <Navbar />
      <div id='Home' className='h-screen'><Home /></div>
      <div id='Über-mich' className='h-screen'><About /></div>
      <div id='Skills' className='h-screen'><Skills /></div>
      <div id='Projekte' className='h-screen'><Projects /></div>
      <div id='Kontakt' className='h-screen'><Contact /></div>
    </section>
  );
}

export default App;