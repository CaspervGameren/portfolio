import { Show, For, onMount } from "solid-js";
import { skills } from '../data/skills';
import { runSkillAnimation } from "../animations/skillAnimations";
import SkillCard from "./SkillCard";

export default function () {

        onMount(() => {
            runSkillAnimation();
            ScrollTrigger.refresh();
        });
    
    return (
        <section>
            My Skills:
            <Show when={skills} fallback={<p>No skills to be shown here!</p>}>
                <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
                    <For each={skills.languages} fallback={<p>Data could not be loaded...</p>}>
                        {(skill) => <SkillCard {...skill} />}
                    </For>
                </div>
            </Show>c
        </section>
    )
}