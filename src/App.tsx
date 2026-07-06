import './index.css';
import type { Component } from 'solid-js';
import { Nav, Header, Projects } from './components';

const App: Component = () => {
  return (
    <>
      <main class='bg-[#222222] min-h-screen w-full flex flex-col items-center text-[#f1f1f1]'>
        <Nav />
        <Header />
        <Projects />
      </main>
    </>
  );
};

export default App;
