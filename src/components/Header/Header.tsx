import { Component } from "solid-js";

export const Header: Component = () => {

    return (
        <header class="grid grid-cols-[auto_auto] gap-12 justify-center h-[600px] mb-50">
            <h1>Software Developer</h1>
            <img src="/images/portfolio-image.png" alt="Foto van mijn gezicht bewerkt met AI" class="justify-self-start" />
        </header>
    );
};