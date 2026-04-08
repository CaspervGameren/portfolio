import Icons from 'unplugin-icons/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [devtools(), solidPlugin(), tailwindcss(), Icons({compiler: 'solid'})],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});