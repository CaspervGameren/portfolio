import { Icon } from "@iconify-icon/solid";
import { For } from "solid-js";

export default function SkillCategory({ title, items }: any) {
    return (
        <section class="flex flex-col items-center">
            <h3 class="text-2xl py-8">{title}</h3>
            <div class="col-span-full grid grid-cols-[repeat(auto-fit,minmax(140px,1fr))] w-full max-w-5xl justify-items-center gap-8">
                <For
                    each={items}
                    fallback={
                        <p>Please enable JavaScript to view this content</p>
                    }>
                    {(skill) => (
                        <div class="flex flex-col col-span-1 items-center bg-white p-8 text-black gap-2 rounded-md h-38 w-38 text-xs text-center">
                            <Icon class="mt-auto" icon={skill.icon} width="50"></Icon>
                            <p class="mt-auto">{skill.name}</p>
                        </div>
                    )}

                </For>
            </div>
        </section>
    );
}