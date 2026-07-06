import { Component, For } from 'solid-js';
import { ProjectCard } from './ProjectCard';
import { projectData } from '../../data/projectData';
import { ProjectProps } from '../../types/projectTypes';

console.log(`Project data found: ${projectData}`);
export const Projects: Component = () => {
    return (
        <section class="border-amber-200 border rounded-md p-8">
            <h2 class="text-2xl">Recent Projects</h2>
            <div class="grid md:grid-cols-dynamic gap-4">
                <For each={projectData}>
                    {(project) => (
                        <ProjectCard project={project} />
                    )}
                </For>
            </div>
        </section>
    );
}