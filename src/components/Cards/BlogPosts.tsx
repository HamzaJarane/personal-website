import { getBlogPages } from '@/helpers/getBlog';
import { BlogCategory, BlogGrid, BlogRow, CardTitle, ProfileButton } from '@/helpers/StyledComponents';
import React from 'react'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

function BlogPosts() {
    const pages = getBlogPages();
    const navigate = useNavigate();
    const gotoPage = (slug: string) => navigate(`/blog/${slug}`);
    const { t } = useTranslation();

    return (
        <div css={tw``}>
            <CardTitle text={t('blog.title')} />
            <BlogGrid blog={false}>
                {[...pages].reverse().slice(0, 4).map((page) => (
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
            </BlogGrid>
            <div css={tw`flex justify-center items-center mb-5`}>
                <ProfileButton onClick={() => navigate(`/blog`)} css={tw`p-3 font-semibold w-[219px]`}>
                    {t('blog.see_more')}
                </ProfileButton>
            </div>
        </div>
    )
}

export default BlogPosts;