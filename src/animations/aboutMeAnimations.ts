import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function aboutMeScrollAnimation() {
    // const about = document.querySelector<HTMLElement>(".about");
    // if (!about) return;
    // let aboutWidth = about!.offsetWidth;
    // let amountToScroll = aboutWidth - window.innerWidth;

    // const tween = gsap.to(about, {
    //     x: -amountToScroll,
    //     duration: 3,
    //     ease: "none"
    // });

    // ScrollTrigger.create({
    //     trigger: ".about-wrapper",
    //     start: "top top",
    //     end: "+=" + amountToScroll,
    //     pin: true,
    //     animation: tween,
    //     scrub: 1,
    //     invalidateOnRefresh: true,
    //     markers: true,
    // });
}