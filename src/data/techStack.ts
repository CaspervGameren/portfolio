interface SkillItem {
    name: string;
    icon: string;
    desc?: string;
}

const skills = {
    'code': [
        { name: 'Git', icon: '' },
        { name: 'Github', icon: '' },
        { name: 'Visual Studio Code', icon: '' },
        { name: 'PHPStorm', icon: '' }
    ],
    'design': [
        { name: 'Figma', icon: '' },
        { name: 'Affinity', icon: '' },

    ],
    'languages': [
        { name: 'HTML5', icon: '' },
        { name: 'CSS3', icon: '' },
        { name: 'SASS', icon: '' },
        { name: 'JavaScript', icon: '' },
        { name: 'TypeScript', icon: '' },
        { name: 'Dart', icon: '' },
    ],
    'libraries': [
        { name: 'React-js', icon: '', desc: 'React is a JavaScript ui-library used to build fast and interactive websites' },
        { name: 'Solid-js', icon: '', desc: 'Solid is a JavaScript framework with more speed than React, used to build interactive websites' },
    ],
    'frameworks': [
        { name: 'SolidStart', icon: '', desc: 'Where Solid-js is a ui library, SolidStart includes back-end capabilities making it a framework' },
        { name: 'Svelte', icon: '', desc: 'Svelte is a growing JavaScript framework' },
    ]
}