import { Skill as SkillType } from "../types/skills";

export default function SkillCard({ name, icon, color }: SkillType) {
    return (
        <div class="flex flex-col gap-2 border-2 rounded-2xl p-4 justify-center items-center">
            <div
                style={{
                    "background-color": color,
                    "mask": `url(${icon}) center/contain no-repeat`,
                    "-webkit-mask": `url(${icon}) center/contain no-repeat`,
                    "width": "80px",
                    "height": "80px"
                }}
            />
            <h2>{name}</h2>
        </div>
    )
}