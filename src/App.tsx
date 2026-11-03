import { createEffect, type Component } from 'solid-js';
import { site } from './config/site';
import { Nav } from './components';

function setMetaData() {
  createEffect(() => {
    document.title = site.appName;

    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", site.appDescription);
  });
}

const App: Component = () => {
  return (
    <Nav />
  );
};


export default App;
