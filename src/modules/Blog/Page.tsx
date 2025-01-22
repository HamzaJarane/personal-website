import React, { useEffect } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import tw from 'twin.macro';
import Markdown from 'react-markdown'
import { getBlogPages, getPage } from '@/helpers/getBlog';
import useSWR from 'swr'
import { Loading } from '@/App';
import rehypeRaw from 'rehype-raw'
import './page.css';
import { BlogCategory, BlogGrid, BlogRow } from '@/helpers/StyledComponents';
import FooterProfileCard from '@/components/Cards/FooterProfileCard';
import { useTranslation } from 'react-i18next';

function Page() {
    const { slug } = useParams() as { slug: string };
    const { data, error, isLoading } = useSWR(slug, getPage);
    const { t } = useTranslation();
    const pages = getBlogPages();
    const navigate = useNavigate();
    const gotoPage = (slug: string) => navigate(`/blog/${slug}`);

    if (isLoading || !data) {
        return <Loading />;
    }

    if (error) {
        return <Navigate to={`/blog`} />;
    }

    return (
        <div css={tw`flex flex-col justify-center items-center`}>
            <div css={tw`w-[90%] lg:w-[70%] py-6`}>
                <Markdown
                    rehypePlugins={[rehypeRaw]}
                    className={'markdown-body'}
                >
                    {data}
                </Markdown>
            </div>

            <div
                css={tw`mt-10 w-[90%] lg:w-[70%]`}
            >
                <FooterProfileCard />
            </div>

            <div css={tw`text-center text-3xl font-semibold`}>
                {t('blog.you-might-also-like')}
            </div>

            <div css={tw`w-[90%] lg:w-[70%] my-10 grid grid-cols-1 lg:grid-cols-3 gap-3`}>
                {pages.sort(() => .5 - Math.random()).slice(0, 3).map((page) => (
                    <BlogRow key={page.slug} onClick={() => gotoPage(page.slug)}>
                        <div css={tw`font-semibold text-2xl text-center w-full`}>{page.title}</div>
                        <div css={tw`text-sm`}>
                            {page.description.length > 140 ? page.description.split('').splice(0, 140).join('') + '...' : page.description}
                        </div>
                        <div
                            css={[
                                tw`grid gap-2`,
                                page.categories.length >= 3 ? tw`grid-cols-3` :
                                    page.categories.length === 2 ? tw`grid-cols-2` :
                                        page.categories.length === 1 && tw`grid-cols-1`
                            ]}
                        >
                            {page.categories.map((category) => (
                                <BlogCategory className='blogCategory'>
                                    <div>{category}</div>
                                </BlogCategory>
                            ))}
                        </div>
                    </BlogRow>
                ))}
            </div>
        </div>
    )
}

export default Page;