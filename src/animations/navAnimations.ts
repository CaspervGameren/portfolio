import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

export function runNavAnimation() {
    if(sessionStorage.getItem('visited') === "true") {
        return;
    }
    const tl = gsap.timeline();
    
    tl.from("nav", {duration: 1, y: -50});
}