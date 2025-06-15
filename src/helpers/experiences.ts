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
            name: 'DigitalDaba',
            link: 'https://digitaldaba.com',
        },
        place: 'Agadir, Morocco',
        type: 'Remote',

        from: '2024 / October',
        to: 'Present',

        descriptions: [
            'Worked on multiple Mern and Full-stack projects',
            'Contributed with other developers'
        ],
        skills: ['NestJS', 'Vue.JS', 'Figma', 'Laravel', 'Filament', 'React', 'NextJS', 'Docker', "Agile"]
    },
    {
        role: 'Full Stack Developer',
        company: {
            name: 'GreyWeb',
            link: 'https://greyweb.cloud',
        },
        place: 'Russia, Moscow',
        type: 'Remote / Freelance',

        from: '2024 / April',
        to: '2024 / October',

        descriptions: [
            "Redesigned client's dashboard with ReactJS and Laravel",
            "Imported <a href=\"https://pterodactyl.io\">pterodactyl.io</a> and <a href=\"https://timeweb.cloud\">timeweb.cloud</a> APIs to the backend with Laravel.",
            "Contribute to the frontend dashboard with VueJS 3."
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

        from: '2024 / January',
        to: '2024 / April',

        descriptions: [
            "Collaborated with a team of developers to develop modern and friendly web solutions",
            "Integrate payment gateways such as CMI / Paypal / Stripe and Youcan Pay."
        ],
        skills: ['Figma', 'CI/CD', 'Mailu', 'Laravel', 'Filament', 'Next.JS', 'Express.JS']
    },
];