import { Show, For, onMount } from "solid-js";
import { ScrollTrigger } from 'gsap/all';
import { skills } from '../data/skills';
import { runSkillAnimation } from "../animations/skillAnimations";
import SkillCard from "./SkillCard";

const allSkills = [...skills.languages, ...skills.frameworks, ...skills.tools];

export default function () {

        onMount(() => {
            runSkillAnimation();
            ScrollTrigger.refresh();
        });
    
    return (
        <section>
            My Skills:
            <Show when={skills} fallback={<p>No skills to be shown here!</p>}>
                <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(180px,1fr))]">
                    <For each={allSkills} fallback={<p>Data could not be loaded...</p>}>
                        {(skill) => <SkillCard {...skill} />}
                    </For>
                </div>
            </Show>
        </section>
    )
}