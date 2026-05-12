export interface Skill {
    name: string,
    icon: string,
    href?: string,
    details?: SkillDetails,
}

export interface SkillDetails {
    description: string,
    experience: string,
    projects?: string[],
}

export interface Skills {
    languages: Skill[],
    frameworks: Skill[],
    tools: Skill[],
}