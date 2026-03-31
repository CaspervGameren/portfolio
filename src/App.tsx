import type { Component } from 'solid-js';
import Nav from './components/Nav';
import Header from './components/Header';
import Skills from './components/Skills';

const App: Component = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <main class="w-[90dvw] m-auto">
        <Skills/>
      </main>
    </>
  );
};

export default App;
