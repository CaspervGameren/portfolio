import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { onMount } from 'solid-js';
import TypeIt from 'typeit';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    onMount(() => {
        new TypeIt("#role", {
            speed: 80,
            deleteSpeed: 40,
            loop: true,
            waitUntilVisible: true,
        })
        .type("Full-Stack Developer")
        .pause(200)
        .delete()
        .type("Web Designer")
        .pause(200)
        .delete()
        .go()

        let tl = gsap.timeline();
        tl.from("h1", { duration: 1, opacity: 0, x: -200, ease: "power2.out", clearProps: "all" }, ">.3")
        .from("aside", { duration: 1, opacity: 0, y: 200, ease: "power2.out", clearProps: "all" }, ">0.2")
        .from("p", { duration: 3, opacity: 0, y: -50, ease: "power1.in" })
        .from("a button", { duration: 3, opacity: 0, });

            gsap.to("header", {
                scrollTrigger: {
                    trigger: "header",
                    start: "top top",
                    end: "+=400",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                },
                height: "60dvh",
            });
            gsap.to("h1, p, aside", {
                scrollTrigger: {
                    trigger: "header",
                    start: "top top", 
                    end: "400",
                    scrub: 1,
                },
            })
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