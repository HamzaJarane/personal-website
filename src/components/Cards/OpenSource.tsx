import React from 'react'
import tw from 'twin.macro';
import { CardTitle, WorkRow, WorkContainer } from '@/helpers/StyledComponents';
import { getOpenSource } from '@/helpers/getOpenSource';
import { useTranslation } from 'react-i18next';


function OpenSource() {
    const data = getOpenSource();
    const { t } = useTranslation();
    return (
        <div css={tw``}>
            <CardTitle text={t('opensource.title')} />
            <div
                css={tw`space-y-2 mb-3`}
            >
                {data.map(work => (
                    !work.fork && work.language && !work.name.toLowerCase().includes('solicode') && !work.name.toLowerCase().includes('soli') &&
                    <WorkRow
                        key={work.name}
                        href={work.html_url}
                        target={'_blank'}
                        css={tw`lg:border lg:border-white`}
                    >

                        <div>
                            <div
                                className={'wName'}
                                css={tw`font-bold flex space-x-2`}
                            >
                                <div
                                    css={tw`capitalize`}
                                >
                                    {/* @ts-ignore */}
                                    {work.name.replaceAll('-', ' ')}
                                </div>

                                <div
                                    css={tw`bg-white rounded-2xl text-sm text-black border border-black`}
                                >
                                    <div
                                        css={tw`py-1 px-2`}
                                    >
                                        {work.language}
                                    </div>
                                </div>
                            </div>
                            
                            <div
                                className={'wDescription'}
                                css={tw`font-light`}
                                dangerouslySetInnerHTML={{ __html: work.description ?? '<div></div>' }}
                            />
                        </div>
                    </WorkRow>
                ))}
            </div>
        </div>
    )
}

export default OpenSource;