import { For, Component } from "solid-js";

const NAV_ITEMS = ["Home", "Projects", "About", "Techstack", "Contact"];
const GRADIENT = "bg-gradient-to-r from-[#24e88b] via-[#21e891] to-[#42e8d3]";

export const Nav: Component = () => {
    return (
        <nav class="w-full flex items-center justify-between h-[80px] px-8">
            <img src="" alt="Casper website logo" class="h-[60px]" />

            <ul class="relative flex items-center px-4 gap-x-2 h-[60px] rounded-md bg-[#333333]/10 backdrop-blur-md border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                <For each={NAV_ITEMS}>
                    {(item) => (
                        <li class="relative group cursor-pointer px-4 py-2 rounded-lg transition-colors">
                            <div class={`absolute inset-0 ${GRADIENT} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md`} />
                            <span class="relative z-10 font-medium text-white/90">
                                {item}
                            </span>
                        </li>
                    )}
                </For>
            </ul>

            <a href="/contact" class="flex items-center bg-[#333333] px-6 h-[60px] rounded-xl text-white">
                Get in touch
            </a>
        </nav>
    );
};