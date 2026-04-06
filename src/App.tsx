import type { Component } from 'solid-js';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/contact';
import AboutMe from './components/AboutMe';
import { about } from './data/about';

const App: Component = () => {
  return (
    <>
      <Header />
      <main class="flex flex-col text-white gap-10 w-[90dvw] m-auto [&_section]:bg-black/40 [&_section]:rounded-2xl [&_section]:p-8">
        <AboutMe {...about}/>
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
