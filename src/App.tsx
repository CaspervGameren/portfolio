import type { Component } from 'solid-js';
import Nav from './components/Nav';
import Header from './components/Header';
import Skills from './components/Skills';
import Contact from './components/contact';

const App: Component = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <main class="w-[90dvw] m-auto">
        <Skills />
        <Contact />
      </main>
    </>
  );
};

export default App;
