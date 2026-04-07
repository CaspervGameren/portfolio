import { onMount } from "solid-js";
import { aboutMeScrollAnimation } from "../animations/aboutMeAnimations";

export default function AboutMe({ name, age, location, description }) {

    onMount(() => {
        aboutMeScrollAnimation();
    });

    return (
        <article class="relative about-wrapper h-dvh overflow-hidden">
            <div class="flex about w-fit h-full">
                <section class="w-screen shrink-0 flex flex-col justify-center items-center">
                    <h2>A little bit about me first:</h2>
                    <p>My name is: {name}</p>
                    <p>{age}</p>
                    <p>{location}</p>
                    <p>{description}</p>
                </section>
                {/* <section class="w-screen shrink-0 flex flex-col justify-center items-center">
                    <h2>I have loved how to code</h2>
                </section> */}
            </div>
        </article>
    );
}