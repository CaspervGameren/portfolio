import './index.css';
import type { Component } from 'solid-js';
import { Nav, Header, Projects } from './components';

const App: Component = () => {
  return (
    <>
      <main class=''>
        <Nav />
        <Header />
        <Projects />
      </main>
    </>
  );
};

export default App;
