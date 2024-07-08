import rancyImage from '@/assets/images/works/rancy.png';
import cyyc12Image from '@/assets/images/works/cyyc12.png'
import walkincity from '@/assets/images/works/walkincity.png';
import paulromhosting from '@/assets/images/works/paulromhosting.png';

interface IWork {
    name: string;
    link: string;
    image: string;
    description: string;
    languages: string[];
};

export const works: IWork[] = [
    {
        name: 'Rancy Hotels (On work)',
        link: 'https://rancy-hotels.com',
        image: rancyImage,
        description: 'Freelance project for RancyHotels where I worked on main site (WordPress) and booking dashboard (Laravel and filament).',
        languages: ['WordPress', 'Laravel', 'Filament', 'Livewire', 'OOP', 'Tailwind CSS', 'CMI'],
    },
    {
        name: 'PaulromHosting',
        link: 'https://paulromhosting.net/',
        image: paulromhosting,
        description: 'Freelance project for paulromhosting where I turned <strong>Pterodactyl.io</strong> software into a game hosting store with credits.',
        languages: ['React.JS', 'Tailwind CSS', 'Laravel', 'PayPal', 'Stripe', 'Docker'],
    },
    {
        name: 'Walkin.City',
        link: 'https://walkin.city',
        image: walkincity,
        description: 'A fun project for virtual walking over cities lets users explore cities online with no cost.',
        languages: ['Next.JS', 'Tailwind CSS', 'Socket.io', 'MySQL', 'Zustand', 'NextAuth', 'Three.JS'],
    },
    {
        name: 'Cyyc12',
        link: 'https://cyyc12.vercel.app',
        image: cyyc12Image,
        description: 'Clone of my debian 12 kde as Webgui, all on client side nothing on the server.',
        languages: ['React.JS', 'Tailwind CSS', 'Styled-Components', 'Twin.Macro', 'Zustand'],
    },
];