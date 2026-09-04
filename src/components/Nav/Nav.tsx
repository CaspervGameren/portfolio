import { For, Component } from "solid-js";

const NAV_ITEMS = ["Home", "Projects", "About", "Techstack", "Contact"];

export const Nav: Component = () => {
    return (
        <nav class="grid grid-cols-3 w-full h-20 items-center jusitfy-center px-6 border-b">
            <a href="#" data-text="CvG" class="">CvG</a>
            <ul class="flex justify-between">
                <For each={NAV_ITEMS}>
                    {(item) => (
                        <li class="cursor-pointer">
                            {item}
                        </li>
                    )}
                </For>
            </ul>

            <a href="#contact" class="justify-self-end">
                Get in touch
            </a>
        </nav>
    );
};