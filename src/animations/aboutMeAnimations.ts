import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function aboutMeScrollAnimation() {
    const about = document.querySelector<HTMLElement>(".about");
    const wrapper = document.querySelector<HTMLElement>(".about-wrapper");

    if (!about || !wrapper) return;

    const sections = about.querySelectorAll("section");
    const amountToScroll = (sections.length - 1) * window.innerWidth;

    const tween = gsap.to(about, {
        x: -amountToScroll,
        ease: "none",
    });

    ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: () => `+=${amountToScroll}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
    });
}