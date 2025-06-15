import rancyImage from '@/assets/images/works/rancy.png';
import hamzaOSImage from '@/assets/images/works/hamzaOS.png';
import walkincity from '@/assets/images/works/walkincity.png';
import paulromhosting from '@/assets/images/works/paulromhosting.png';
import linksevent from '@/assets/images/works/linksevent.png';

interface IWork {
    name: string;
    link: string;
    image: string;
    description: string;
    languages: string[];
};

export const works: IWork[] = [
    {
        name: 'Rancy Hotels (Closed source)',
        link: '#',
        image: rancyImage,
        description: 'Freelance project for RancyHotels where I worked on main site (WordPress) and booking dashboard (Laravel and filament).',
        languages: ['WordPress', 'Laravel', 'Filament', 'Livewire', 'OOP', 'Tailwind CSS', 'CMI'],
    },
    {
        name: 'Paulrom Hosting (Closed source)',
        link: '#',
        image: paulromhosting,
        description: 'Freelance project for paulromhosting where I turned <strong>Pterodactyl.io</strong> software into a game hosting store with credits.',
        languages: ['React.JS', 'Tailwind CSS', 'Laravel', 'PayPal', 'Stripe', 'Docker'],
    },
    {
        name: 'Links Event (Closed source)',
        link: '#',
        image: linksevent,
        description: 'Freelance project for links event group, We worked on client area and admin area using nextjs, and the api using Laravel.',
        languages: ['React.JS', 'Tailwind CSS', 'Laravel', 'Next.JS'],
    },
    {
        name: 'Walkin.City',
        link: 'https://walkincity.hamza.im',
        image: walkincity,
        description: 'A fun project for virtual walking over cities lets users explore cities online with no cost.',
        languages: ['Next.JS', 'Tailwind CSS', 'Socket.io', 'MySQL', 'Zustand', 'NextAuth', 'Three.JS'],
    },
    {
        name: 'hamzaOS',
        link: 'https://os.hamza.im',
        image: hamzaOSImage,
        description: 'Clone of my (linux) debian 12 kde as Webgui, all on client side nothing on the server.',
        languages: ['React.JS', 'Tailwind CSS', 'Styled-Components', 'Twin.Macro', 'Zustand'],
    },
];