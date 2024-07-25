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
    descriptions: string[];
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
        type: 'Remote / Freelance',

        from: '2024 / April',
        to: 'Present',

        descriptions: [
            "Redesigned client's dashboard with ReactJS and Laravel.",
            "Imported pterodactyl.io APIs to the backend using Laravel and filament.",
            "Contribute to the frontend dashboard with VueJS.",
        ],
        skills: ['Figma', 'Laravel', 'Filament', 'Vue.JS', 'Gitlab', 'Docker']
    },
    {
        role: 'Full Stack Developer',
        company: {
            name: 'Ajicod',
            link: 'https://ajicod.com',
        },
        place: 'Agadir, Morocco',
        type: 'Internship',

        from: '2023',
        to: 'Present',

        descriptions: [
            "Collaborated with a team of developers to develop modern and friendly web solutions.",
            "Integrate payment gateways such as CMI / Paypal / Stripe and Youcan Pay.",
        ],
        skills: ['Figma', 'CI/CD', 'Mailu', 'Laravel', 'Filament', 'Next.JS', 'Express.JS']
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