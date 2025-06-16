import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = tw.footer`w-full items-center pt-4 md:pt-8`;
const TopBorder = tw.div`w-full border-t-2 border-dashed border-white/50 mb-4 md:mb-6 [border-spacing:4px]`;
const ContentWrapper = tw.div`w-full flex justify-between mt-6 md:mt-11 mb-4 md:mb-6 gap-8 md:gap-0`;
const Column = tw.div`flex flex-col gap-2 px-4 lg:px-28 text-2xl md:text-4xl lg:text-5xl font-[Yellowtail]`;

const StyledLink = styled(Link)`
    &:hover {
        ${tw`underline`}
    }
`;

const StyledLinkElement = styled.a`
    &:hover {
        ${tw`underline`}
    }
`;

function Footer() {
    return (
        <FooterWrapper>
            <TopBorder />
            <div css={tw`font-[Oswald] text-2xl md:text-4xl lg:text-5xl px-3 flex flex-col md:flex-row justify-between gap-2 md:gap-0`}>
                <div>
                    Hamza Jarane
                </div>

                <div css={tw`text-white/50`}>
                    Software Developer
                </div>
            </div>
            <ContentWrapper>
                <Column>
                    <StyledLink to={'/'}>Home</StyledLink>
                    <StyledLink to={'/blog'}>Blog</StyledLink>
                    <StyledLink to={'/work'}>Work</StyledLink>
                    <StyledLink to={'/contact'}>Contact</StyledLink>
                </Column>
                
                <Column>
                    <StyledLinkElement href={'https://www.linkedin.com/in/hamza-jarane-b05511264'}>Linkedin</StyledLinkElement>
                    <StyledLinkElement href={'https://github.com/HamzaJarane'}>Github</StyledLinkElement>
                </Column>
            </ContentWrapper>
        </FooterWrapper>
    )
}

export default Footer;