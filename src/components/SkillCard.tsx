import { Skill as SkillType } from "../types/skills";

export default function SkillCard({ name, icon }: SkillType) {
    return (
        <div class="border-2 flex flex-col p-5 justify-center items-center">
            <img src={icon} alt={name + " logo"} />
            <h2>{name}</h2>
        </div>
    )
}