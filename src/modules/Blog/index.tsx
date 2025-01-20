import { getBlogPages, getPage } from '@/helpers/getBlog';
import { BlogCategory, BlogGrid, BlogRow } from '@/helpers/StyledComponents';
import { useNavigate } from 'react-router-dom';
import tw from 'twin.macro';

function Blog() {
    const pages = getBlogPages();
    const navigate = useNavigate();
    const gotoPage = (slug: string) => navigate(`/blog/${slug}`);
    
    return (
        <BlogGrid>
            {pages.map((page) => (
                <BlogRow key={page.slug} onClick={() => gotoPage(page.slug)}>
                    <div css={tw`font-semibold text-2xl text-center w-full`}>{page.title}</div>
                    <div css={tw`text-sm`}>
                        {page.description.length > 140 ? page.description.split('').splice(0, 140).join('')+'...' : page.description}
                    </div>
                    <div css={tw`grid grid-cols-3 gap-2`}>
                        {page.categories.map((category) => (
                            <BlogCategory className='blogCategory'>
                                <div>{category}</div>
                            </BlogCategory>
                        ))}
                    </div>
                </BlogRow>
            ))}
        </BlogGrid>
    );
}

export default Blog;