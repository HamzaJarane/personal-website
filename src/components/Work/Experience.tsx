import { CardTitle, ExperienceTimeLine } from '@/helpers/StyledComponents';
import { experiences } from '@/helpers/experiences';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

function Experience() {
    return (
        <div>
            <CardTitle text={'Experience.'} />
            <div css={tw`-my-6`}>

                {experiences.map(experience => (
                    <ExperienceTimeLine
                        key={experience.company.name}
                    >
                        <div className={'eHero-1'}>
                            <div>{experience.role} - <span>{experience.type}</span></div>
                            {/* <div>{experience.from} - {experience.to}</div> */}
                        </div>

                        <div className={'eHero-2'}>
                            <a
                                href={experience.company.link ?? '#'}
                                target={'_blank'}
                            >
                                {experience.company.name}

                                <FontAwesomeIcon icon={faLink} />
                            </a>

                            <div>
                                {experience.place}
                            </div>
                        </div>

                        <div className={'eDescription'}>
                            {experience.descriptions.map((desc) =>
                                <div>
                                    &#x2022; <span key={desc} dangerouslySetInnerHTML={{ __html: desc }} />
                                </div>
                            )}
                        </div>

                        <ul className={'eSkills'}>
                            {experience.skills.map(skill =>
                                <li
                                    key={skill}
                                    className={'eSkill'}
                                >
                                    <div>{skill}</div>
                                </li>
                            )}
                        </ul>
                    </ExperienceTimeLine>
                ))}
            </div>
        </div>
    )
}

export default Experience;