import { Show, For } from "solid-js";
import { skills } from '../data/skills';
import Skill from "./Skill";

export default function () {
    return (
        <section>
            My Skills:
            <Show when={skills} fallback={<p>No skills to be shown here!</p>}>
                <div class="grid gap-4 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
                    <For each={skills.languages} fallback={<p>Data could not be loaded...</p>}>
                        {(skill) => <Skill skill={skill} />}
                    </For>
                </div>
            </Show>
        </section>
    )
}