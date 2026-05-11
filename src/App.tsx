import type { Component } from 'solid-js';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Skills from './components/About/Skills/Skills';

const App: Component = () => {
  return (
    <>
      <Nav />
      <Header />
      <main class="">
        {/* <AboutMe {...about} /> */}
        <Skills />
        {/* <Contact /> */}
      </main>
    </>
  );
};

export default App;
