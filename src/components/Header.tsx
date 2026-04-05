import { onMount } from 'solid-js';
import { runEntraceAnimation, runScrollAnimation, runTypeIt } from '../animations/headerAnimations';

export default function Header() {
    onMount(() => {
        runEntraceAnimation(runTypeIt);
        runScrollAnimation();
    });

    return (
        <header class="grid w-full h-dvh bg-red-400 grid-cols-2 grid-rows-1 gap[20px] place-items-center">
            <section class="flex flex-col items-start gap-2">
                <h1 class="text-5xl py-5">Welcome to my portfolio!</h1>
                <p class="text-2xl">I am a <span id="role"></span></p>
                <a href="#" download="#">
                    <button class="h-10 w-fit bg-amber-200 p-2 rounded">Donwload CV</button>
                </a>
            </section>
            <aside>
                <img src="/src/assets/images/thispersondoesnotexist.jpg" alt="Image of myself holding my macbook"
                    class="w-75" />
            </aside>
        </header>
    )
}