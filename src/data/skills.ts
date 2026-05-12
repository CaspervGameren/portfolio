import { Skills } from "../types/skillsData";

export const skills: Skills = {
    languages: [
        { name: "HTML", icon: "logos:html-5", },
        { name: "CSS", icon: "logos:css-3", },
        { name: "SCSS", icon: "logos:sass", },
        { name: "JavaScript", icon: "logos:javascript", },
        { name: "TypeScript", icon: "logos:typescript-icon", },
        { name: "PHP", icon: "logos:php", },
        { name: "MySQL", icon: "logos:mysql" }
    ],
    frameworks: [
        { name: "SolidJS", icon: "logos:solidjs-icon", },
        { name: "React", icon: "logos:react", },
        { name: "Svelte", icon: "logos:svelte-icon", },
        { name: "Laravel", icon: "logos:laravel", },
        { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", },
    ],
    tools: [
        { name: "Visual Studio Code", icon: "logos:visual-studio-code", },
        { name: "PHPStorm", icon: "logos:phpstorm", },
        { name: "Git", icon: "logos:git-icon", },
        { name: "Github", icon: "logos:github-icon", href: "https://github.com/CaspervGameren" },
        { name: "Figma", icon: "logos:figma", },
    ]
}