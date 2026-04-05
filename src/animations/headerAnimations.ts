import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import TypeIt from 'typeit';

gsap.registerPlugin(ScrollTrigger);

export function runEntraceAnimation(onComplete: () => void) {
    const tl = gsap.timeline({onComplete});
        tl.from("h1", { duration: 1, opacity: 0, x: -200, ease: "power2.out", clearProps: "all" })
      .from("aside", { duration: 1, opacity: 0, y: 200, ease: "power2.out", clearProps: "all" }, ">0.2")
      .from("p", { duration: 1, opacity: 0, y: -50, ease: "power1.in", clearProps: "all" })
      .from("a button", { duration: 1, opacity: 0, clearProps: "all" })
}

export function runScrollAnimation() {
        gsap.to("header", {
        scrollTrigger: { trigger: "header", start: "top top", end: "+=400", scrub: 1, pin: true },
        height: "60dvh",
    })
}

export function runTypeIt() {
    new TypeIt("#role", { speed: 80, deleteSpeed: 40, loop: true })
        .type("Full-Stack Developer").pause(2000).delete()
        .type("Web Designer").pause(2000).delete()
        .go()
}