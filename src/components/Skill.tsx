export default function Skill({ skill }: any) {
    const filled = Math.round(skill.level / 20)
    const remainder = (skill.level % 20) / 20 * 100

    return (
        <div class="border-2 flex flex-col p-5">
            <img src={skill.icon} alt={skill.name + " logo"} />
            {/* <h2>{skill.name}</h2> */}
            <div class="flex mx-auto py-5">

                {Array.from({ length: 5 }, (_, i) => {
                    if (i < filled) return <div class="w-6 h-6 rounded-full bg-blue-500" />
                    if (i === filled && remainder > 0) return <div class="w-6 h-6 rounded-full" style={`background: conic-gradient(from -180deg, #3b82f6 ${remainder}%, #d1d5db ${remainder}%)`} />
                    return <div class="w-6 h-6 rounded-full bg-gray-300" />
                })}

            </div>
        </div>
    )
}