import { Component } from "solid-js";
import { ProjectProps } from "../../types/projectTypes";

export const ProjectCard: Component<{ project: ProjectProps }> = (props) => {
    console.log(props.project.description);
    return (
        <h3>{props.project.title}</h3>
    );
}