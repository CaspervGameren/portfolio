import { Component } from "solid-js";

export const Header: Component = () => {
    return (
        <header class="w-full flex justify-center items-center py-15 lg:py-60">
            <div class="flex flex-col lg:flex-row items-center gap-12 px-6">
                <div class="flex flex-col items-center lg:items-start gap-8 max-w-lg">
                    <h1 class="text-6xl brand-gradient-text font-bolder text-center lg:text-left">
                        Software Developer
                    </h1>
                    <p class="text-2xl text-center lg:text-left">
                        Hey there, I am <strong class="brand-gradient-text font-bolder">Casper</strong>, Software Dev and student at Hogeschool Rotterdam CMGT
                    </p>
                    <div class="flex gap-4 justify-center lg:justify-start">
                        <a href="/cv.pdf" class="flex items-center justify-center hover:brand-gradient px-4 gap-x-2 h-[60px] rounded-md bg-[#333333]/10 backdrop-blur-md border border-white/20 shadow-lg">
                            Get in touch
                        </a>
                        <a href="/cv.pdf" class="flex items-center justify-center hover:brand-gradient px-4 gap-x-2 h-[60px] rounded-md bg-[#333333]/10 backdrop-blur-md border border-white/20 shadow-lg">
                            Download CV
                        </a>
                    </div>
                </div>
                <img src="/images/portfolio-image.png" alt="Foto van mijn gezicht bewerkt met AI" class="w-120" />
            </div>
        </header>
    );
};