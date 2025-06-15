import githubProfile from '@/assets/json/profile.json'
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function getProfileData(): {
    general: {
        key: string,
        link: string,
        name: string,
        icon: IconProp    
    }[],
    github: typeof githubProfile,
} {
    const data = {
        general: [
            {
                key: 'Linkedin',
                link: 'https://www.linkedin.com/in/hamza-jarane-b05511264/',
                name: 'Hamza Jarane',
                icon: faLinkedin
            },
            {
                key: 'Email',
                link: 'mailto:contact@hamza.im',
                name: 'contact@hamza.im',
                icon: faEnvelope
            }
        ],
        github: githubProfile,
    };

    return data;
}