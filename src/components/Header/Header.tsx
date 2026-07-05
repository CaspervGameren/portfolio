import { Component } from "solid-js";

export const Header: Component = () => {

    return (
        <header class="flex w-full items-center justify-center gap-x-12 py-60">
            <div class="flex flex-col justify-between gap-8 max-w-lg">
                <h1 class="text-6xl brand-gradient-text font-bolder">Software Developer</h1>
                <p class="text-2xl">Hey there, I am <strong class="brand-gradient-text font-bolder">Casper</strong>, Software Dev and student at Hogeschool Rotterdam CMGT</p>
                <div class="flex gap-4">
                    <a
                        href="/cv.pdf"
                        class="flex items-center justify-center hover:brand-gradient px-4 gap-x-2 h-[60px] rounded-md bg-[#333333]/10 backdrop-blur-md border border-white/20 shadow-lg"
                    >
                        Get in touch
                    </a>
                    <a
                        href="/cv.pdf"
                        class="flex items-center justify-center hover:brand-gradient px-4 gap-x-2 h-[60px] rounded-md bg-[#333333]/10 backdrop-blur-md border border-white/20 shadow-lg"
                    >
                        Download CV
                    </a>
                </div>
            </div>
            <img src="/images/portfolio-image.png" alt="Foto van mijn gezicht bewerkt met AI" class="justify-self-start w-150" />
        </header>
    );
};