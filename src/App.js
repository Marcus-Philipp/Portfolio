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
      <div id='Home' className='min-h-screen'><Home /></div>
      <div id='Über-mich' className='min-h-screen'><About /></div>
      <div id='Skills' className='min-h-screen'><Skills /></div>
      <div id='Projekte' className='min-h-screen'><Projects /></div>
      <div id='Kontakt' className='min-h-screen'><Contact /></div>
    </section>
  );
}

export default App;