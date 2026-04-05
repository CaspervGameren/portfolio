import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function runSkillAnimation() {
    gsap.from(".card", {
        scrollTrigger: {
            trigger: ".card",
            start: "top 90%",   
        },
        duration: 0.6,
        opacity: 0,
        y: 100,
        stagger: 0.2,
        ease: "power2.out",
    });
}