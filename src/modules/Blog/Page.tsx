import { Navigate, useNavigate, useParams } from 'react-router-dom';
import tw from 'twin.macro';
import Markdown from 'react-markdown'
import { getBlogPages, getPage, getPageMetaBySlug } from '@/helpers/blog';
import useSWR from 'swr'
import rehypeRaw from 'rehype-raw'
import { BlogCategory, BlogRow } from '@/helpers/StyledComponents';
import FooterProfileCard from '@/components/Blog/FooterProfileCard';
import UtterancesComments from '@/components/Blog/utterancesComments';
import { Loading } from '@/components/Loading';
import './page.css';

function Page() {
    const { slug } = useParams() as { slug: string };
    const { data, error, isLoading } = useSWR(slug, getPage);
    const pages = getBlogPages();
    
    const pageMetaData = getPageMetaBySlug(slug);
    const navigate = useNavigate();
    const gotoPage = (slug: string) => navigate(`/blog/${slug}`);

    if (isLoading || !data) {
        return <Loading />;
    }

    if (error || !pageMetaData) {
        return <Navigate to={`/blog`} />;
    }

    return (
        <div css={tw`flex flex-col justify-center items-center`}>
            <div css={tw`w-[90%] lg:w-[70%] py-6`}>
                <div style={{ borderBottom: '1px solid #3d444db3' }} css={tw`mt-4 font-semibold leading-[1.25] m-[0.67em_0] pb-[0.3em] text-[2em]`}>{pageMetaData.title}</div>
                <div css={tw`font-bold`}>Published At: <span css={tw`font-normal capitalize`}>{formatPublishedAt(pageMetaData.published_at)}</span></div>
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

            <div css={tw`w-[90%] lg:w-[70%]`}>
                <UtterancesComments />
            </div>

            <div css={tw`text-center text-3xl font-semibold`}>
                You might also like
            </div>

            <div css={tw`w-[90%] lg:w-[70%] my-10 grid grid-cols-1 lg:grid-cols-3 gap-3`}>
                {[...pages].reverse().filter((page) => page.slug !== pageMetaData.slug).slice(0, 3).map((page) => (
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


const formatPublishedAt = (date: string, locale: string = 'en-US') => {
    return new Intl.DateTimeFormat(locale, {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date))
}

export default Page;