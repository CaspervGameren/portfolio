import { For, Component } from "solid-js";

const NAV_ITEMS = ["Home", "Projects", "About", "Techstack", "Contact"];

export const Nav: Component = () => {
    return (
        <nav class="w-full flex items-center justify-between h-[80px] px-8">
            {/* <img src="" alt="Casper website logo" class="h-[60px]" /> */}
            <a href="#" data-text="CvG" class="text-6xl brand-gradient-text hover:[--gradient-opacity:1]">CvG</a>
            <ul class="flex items-center px-4 gap-x-2 h-[60px] rounded-md bg-[#333333]/10 backdrop-blur-md border border-white/20 shadow-lg">
                <For each={NAV_ITEMS}>
                    {(item) => (
                        <li class="cursor-pointer px-4 py-2 rounded-lg hover:brand-gradient bg-(--section-bg) text-white/90 hover:text-black font-bold">
                            {item}
                        </li>
                    )}
                </For>
            </ul>

            <a href="#contact" class="flex items-center hover:brand-gradient px-4 py-2 h-[60px] rounded-xl text-white hover:text-black font-bold  bg-(--section-bg)">
                Get in touch
            </a>
        </nav>
    );
};