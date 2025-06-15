import { CardTitle, WorkRow, WorkContainer } from '@/helpers/StyledComponents';
import tw from 'twin.macro';
import { works } from '@/helpers/work';
import { ScrollTrigger as ScrollTriggerContainer } from 'react-gsap';

function Work() {
    return (
        <div css={tw`pt-[100px] lg:pt-[60px]`}>
            <CardTitle text={'Work.'} />
            <WorkContainer css={tw`overflow-hidden`}>
                {works.map(work => (
                    <WorkRow
                        onClick={() => window.open(work.link, work.link !== '#' ? '_blank' : '_self')}
                        css={tw`w-full`}
                    >
                        <div>
                            <img
                                css={tw`lg:min-w-[240px] lg:max-w-[240px] rounded border border-white`}
                                src={work.image}
                                alt={work.name}
                                srcSet={work.image}
                            />
                        </div>

                        <div>
                            <div
                                className={'wName'}
                                css={tw`font-bold`}
                            >
                                {work.name}
                            </div>
                            <div
                                className={'wDescription'}
                                css={tw`font-light`}
                                dangerouslySetInnerHTML={{ __html: work.description }}
                            />
                            <ul
                                css={tw`mt-2 grid grid-cols-2 gap-1 space-y-1 lg:space-y-0 lg:flex items-center`}
                            >
                                {work.languages.map(lang => (
                                    <li
                                        key={lang}
                                        className={'wLang'}
                                        css={tw`bg-white rounded-2xl text-sm text-black`}
                                    >
                                        <div
                                            css={tw`py-1 px-2`}
                                        >
                                            {lang}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </WorkRow>
                ))}
            </WorkContainer>
        </div >
    )
}

export default Work;