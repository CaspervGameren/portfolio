import { Component } from "solid-js";

export const Header: Component = () => {
    return (
        <header >
            <div class="flex mx-auto my-40 min-h40 min-w-40 h-50 w-fit items-center bg-white">
                <h1 class="flex flex-col items-center text-5xl font-bold text-black py-12 px-20">
                    <span><strong>Learning</strong></span>
                    <span>Like an</span>
                    <span><strong>LLM</strong></span>
                </h1>
            </div>
        </header>
    );
};