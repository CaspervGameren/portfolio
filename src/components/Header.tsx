import { onMount } from 'solid-js';
import { runEntraceAnimation, runScrollAnimation, runTypeIt } from '../animations/headerAnimations';
import Nav from './Nav';

export default function Header() {
    onMount(() => {
        runEntraceAnimation(runTypeIt);
        runScrollAnimation();
    });

    return (
        <header class="sticky grid w-full h-dvh bg-red-400 grid-cols-2 grid-rows-[auto_1fr] gap[20px] place-items-center">
            <Nav />
            <section class="flex flex-col items-start gap-2 row-start-2 justify-self-center">
                <h1 class="text-5xl flex flex-col">
                    <span>Greetings 👋!</span>
                    <span>My name is Casper</span>
                </h1>
                <article class="leading-1">
                    <p class="text-2xl">Feel free to have a look around here!</p>
                    <p class="text-2xl">I am a <span id="role"></span></p>
                </article>
                <a href="#" download="#">
                    <button class="h-10 w-fit bg-amber-200 p-2 rounded hover:cursor-pointer">Donwload CV</button>
                </a>
            </section>
            <aside class="row-start-2 justify-self-center">
                <img src="/src/assets/images/thispersondoesnotexist.jpg" alt="Image of myself holding my macbook"
                    class="w-75" />
            </aside>
        </header>
    )
}