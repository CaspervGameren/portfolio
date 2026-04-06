import { onMount } from "solid-js"
import { runNavAnimation } from "../animations/navAnimations";

export default function Nav() {
    onMount(() => {
        runNavAnimation();
    });

    return (
        <nav class="sticky top-5 grid w-full col-span-2 py-8 row-start-1">
            <ul class="flex mx-auto justify-around [&>li]:hover:scale-110 [&>li]:hover:-translate-y-1 [&>li]:transition [&>li]:duration-300">
                <li class="px-5 cursor-pointer"><a href=""></a>Home</li>
                <li class="px-5 cursor-pointer">About me</li>
                <li class="px-5 cursor-pointer"><a href="#skills">Skills</a></li>
            </ul>
        </nav>
    )
}