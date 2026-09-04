import './index.css';
import type { Component } from 'solid-js';
import { Nav, Header, Projects } from './components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const App: Component = () => {
  return (
    <>
      <main class='bg-gray-900 text-white h-dvh'>
        <Nav />
        <Header />
        {/* <Projects /> */}
      </main>
    </>
  );
};

export default App;
