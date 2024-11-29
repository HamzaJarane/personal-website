import tw from 'twin.macro';
import profileImage from '@/assets/images/profile-background.png'
import { getProfileData } from '@/helpers/getProfileData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProfileImage, FullName, FieldsGroup, Field, ProfileButton } from '@/helpers/StyledComponents';
import { faDesktop, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Tween } from 'react-gsap';
import profilePicture from '@/assets/images/profile-picture.png';

function Profile() {
    const data = getProfileData();

    return (
        data && <>
            <img src={profileImage} css={tw`fixed -top-2 z-10 lg:flex hidden h-screen lg:w-[30%]`} alt={"profileImage"} srcSet={profileImage} />
            <div
                css={tw`w-full lg:w-[30%] z-20 bg-cover bg-gradient-to-r from-black/30 to-black flex justify-center lg:justify-start lg:items-center lg:grid`}
            >
                <div
                    css={tw`p-10 gap-y-4 lg:fixed lg:top-1 lg:left-1`}
                >
                    <Tween from={{ x: '-300px' }} to={{ x: '0px', rotation: 360 }} duration={1} ease="back.out(1.7)" delay={1}>
                        <ProfileImage
                            src={profilePicture}
                            alt={"profilePicture"}
                            srcSet={profilePicture}
                        />
                    </Tween>

                    <FullName>
                        Hamza Jarane
                    </FullName>

                    <FieldsGroup>
                        <Field
                            href={data.github.html_url}
                            target={'_blank'}
                        >
                            <FontAwesomeIcon icon={faGithub} /> <span>{data.github.login}</span>
                        </Field>

                        {data.general.map((social) => (
                            <Field
                                key={social.name}
                                href={social.link}
                                target={'_blank'}
                            >
                                <FontAwesomeIcon icon={social.icon} /> <span>{social.name}</span>
                            </Field>
                        ))}
                    </FieldsGroup>
                    <div
                        css={tw`pt-2 flex space-x-2`}
                    >
                        <ProfileButton
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = `https://cyyc12.cyyc.lol/static/documents/Hamza%20Jarane's%20resume.pdf`;
                                link.download = 'Resume';
                                link.click();
                            }}
                        >
                            <div
                                css={tw`p-2`}
                            >
                                <FontAwesomeIcon icon={faDownload} /> Resume
                            </div>
                        </ProfileButton>

                        <ProfileButton
                            onClick={() => window.location.assign('https://cyyc12.cyyc.lol')}
                        >
                            <div
                                css={tw`p-2`}
                            >
                                <FontAwesomeIcon icon={faDesktop} /> Desktop
                            </div>
                        </ProfileButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;