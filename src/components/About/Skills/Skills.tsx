import { skills } from "../../../data/skills";
import SkillCategory from "./SkillCategory";

export default function Skills() {
    return (
        <div class="flex flex-col gap-20 py-8">
            <SkillCategory title="Languages" items={skills.languages} />
            <SkillCategory title="Frameworks" items={skills.frameworks} />
            <SkillCategory title="Tools" items={skills.tools} />
        </div>
    );
}