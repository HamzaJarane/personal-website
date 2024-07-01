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
            name: 'AjiCod',
            link: 'https://ajicod.com',
        },
        place: 'Agadir, Morocco',
        type: 'Remote',

        from: '2023',
        to: 'Present',

        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora exercitationem alias, ipsum unde minima quam iusto ea libero voluptatum amet? Maxime laborum doloremque explicabo suscipit eaque? Distinctio rerum voluptatibus fugiat.',
        skills: ['Figma', 'Long tes']
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