import { Icon } from '@iconify-icon/solid';
import { Skill as SkillType } from "../types/skills";

export default function SkillCard({ name, icon }: SkillType) {
    return (
        <div class="flex flex-col gap-2 border-2 rounded-2xl p-4 justify-center items-center">
            <Icon icon={icon} width="80" height="80" />
            <h2>{name}</h2>
        </div>
    )
}