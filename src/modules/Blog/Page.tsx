import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom';
import tw from 'twin.macro';
import Markdown from 'react-markdown'
import { getPage } from '@/helpers/getBlog';
import useSWR from 'swr'
import { Loading } from '@/App';
import rehypeRaw from 'rehype-raw'
import './page.css';

function Page() {
    const { slug } = useParams() as { slug: string };
    const { data, error, isLoading } = useSWR(slug, getPage);

    if (isLoading || !data) {
        return <Loading />;
    }

    if (error) {
        return <Navigate to={`/blog`} />;
    }

    return (
        <div css={tw`flex justify-center items-center `}>
            <div css={tw`w-[90%] lg:w-[70%] py-6`}>
                <Markdown 
                    rehypePlugins={[rehypeRaw]}
                    className={'markdown-body'}
                >
                    {data}
                </Markdown>
            </div>
        </div>
    )
}

export default Page;