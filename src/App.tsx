import type { Component } from 'solid-js';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/contact';
import AboutMe from './components/AboutMe';
import { about } from './data/about';

const App: Component = () => {
  return (
    <>
      <Header/>
      <main class="w-[90dvw] m-auto">
        <AboutMe {...about}/>
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
