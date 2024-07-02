interface IExperience {
    role: string;   
    company: {
        name: string,
        link?: string,
    };
    place: string;
    type: string;
    from: string;
    to: string;
    description: string;
    skills: string[];
}

export const experiences: IExperience[] = [
    {
        role: 'Full Stack Developer',
        company: {
            name: 'GreyWeb',
            link: 'https://greyweb.cloud',
        },
        place: 'Russia, Moscow',
        type: 'Freelance / Remote',

        from: '2024 / April',
        to: 'Present',

        description: 'A Web / Servers / GameServers hosting solution in <strong>Russia</strong>.',
        skills: ['Figma', 'Laravel', 'Filament', 'Vue.JS', 'Gitlab', 'Docker']
    },
    {
        role: 'Full Stack Developer',
        company: {
            name: 'AjiCod',
            link: 'https://ajicod.com',
        },
        place: 'Agadir, Morocco',
        type: 'Remote / Self-employed',

        from: '2023',
        to: 'Present',

        description: 'A digital marketing agencey based on agadir, known now as <strong>DigitalBaba</strong>.',
        skills: ['Figma', 'CloudPanel', 'CI/CD', 'Mailu', 'Laravel', 'Filament', 'Next.JS', 'Express.JS']
    },

    // {
    //     role: '',
    //     company: {
    //         name: '',
    //         link: '',
    //     },
    //     place: '',
    //     type: '',

    //     from: '',
    //     to: '',

    //     description: '',
    //     skills: []
    // }
];