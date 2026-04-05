import { onMount } from 'solid-js';
import { runEntraceAnimation, runScrollAnimation, runTypeIt } from '../animations/headerAnimations';

export default function Header() {
    onMount(() => {
        runEntraceAnimation(runTypeIt);
        runScrollAnimation();
    });

    return (
        <header class="sticky grid w-full h-dvh bg-red-400 grid-cols-2 grid-rows-1 gap[20px] place-items-center">
            <section class="flex flex-col items-start gap-2">
                <h1 class="text-5xl">Welcome to my portfolio!</h1>
                <article class="leading-1">
                    <p class="text-2xl">My name is Casper</p>
                    <p class="text-2xl">I am a <span id="role"></span></p>
                </article>
                <a href="#" download="#">
                    <button class="h-10 w-fit bg-amber-200 p-2 rounded hover:cursor-pointer">Donwload CV</button>
                </a>
            </section>
            <aside>
                <img src="/src/assets/images/thispersondoesnotexist.jpg" alt="Image of myself holding my macbook"
                    class="w-75" />
            </aside>
        </header>
    )
}