import rancyImage from '@/assets/images/works/rancy.png';

interface IWork {
    name: string;
    link: string;
    image: string;
    description: string;
    languages: string[];
};

export const works: IWork[] = [
    {
        name: 'Rancy Hotels',
        link: 'https://rancy-hotels.com',
        image: rancyImage,
        description: 'A freelance project with RancyHotels where i worked on main site (WordPress) and booking dashboard (Laravel)',
        languages: ['WordPress', 'Laravel', 'Filament', 'OOP', 'Tailwind CSS'],
    }
];