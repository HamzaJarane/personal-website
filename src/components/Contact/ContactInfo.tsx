import tw from 'twin.macro';
import { lazy } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faDownload, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

interface IContactRow {
    title: string;
    name: string;
    link: string;
    icon: IconDefinition;
}

const ContactInfo = () => {
    return (
        <div css={tw`w-full max-w-4xl mx-auto mt-12`}>
            <div css={tw`flex lg:flex-row flex-col justify-between items-center gap-3`}>
                <ContactRow
                    title={'Email'}
                    name={'contact@hamza.im'}
                    link={'mailto:contact@hamza.im'}
                    icon={faEnvelope}
                />
                <ContactRow
                    title={'Github'}
                    name={'HamzaJarane'}
                    link={'https://github.com/HamzaJarane/'}
                    icon={faGithub}
                />
                <ContactRow
                    title={'LinkedIn'}
                    name={'Hamza Jarane'}
                    link={'https://www.linkedin.com/in/hamza-jarane-b05511264'}
                    icon={faLinkedin}
                />
            </div>
            <div css={tw`flex flex-col items-center space-y-4 mt-7`}>
                <h3 css={tw`text-white font-[Oswald] text-xl mb-2`}>Download Resume</h3>
                <div css={tw`flex space-x-4`}>
                    <div css={tw`hover:scale-105`}>
                        <a
                            href="/English.pdf"
                            download
                            css={tw`transition-transform flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-[Oswald]`}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            <span>English</span>
                        </a>
                    </div>

                    <div css={tw`hover:scale-105`}>
                        <a
                            href="/Francais.pdf"
                            download
                            css={tw`transition-transform flex items-center space-x-2 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white font-[Oswald]`}
                        >
                            <FontAwesomeIcon icon={faDownload} />
                            <span>Français</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactRow = ({ title, name, link, icon }: IContactRow) => {
    return (
        <div css={tw`hover:scale-105 w-full`}>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                css={tw`flex items-center space-x-3 p-4 bg-white/5  border border-white/10 transition-transform`}
            >
                <div css={tw`w-12 h-12 rounded-full bg-white/10 flex items-center justify-center pointer-events-none`}>
                    <FontAwesomeIcon icon={icon} css={tw`text-white text-2xl`} />
                </div>
                <div css={tw`pointer-events-none`}>
                    <h3 css={tw`text-white font-[Oswald] text-lg`}>{title}</h3>
                    <span css={tw`text-white/80`}>{name}</span>
                </div>
            </a>
        </div>
    );
}

export default ContactInfo;