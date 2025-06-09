import React from 'react'
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = tw.footer`w-full items-center pt-8`;
const TopBorder = tw.div`w-full border-t-2 border-dashed border-white/50 mb-6 [border-spacing:4px]`;
const ContentWrapper = tw.div`w-full flex justify-between mt-11 mb-6`;
const Column = tw.div`flex flex-col gap-2 px-4 lg:px-28 text-5xl font-[Yellowtail]`;

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
            <div css={tw`font-[Oswald] text-5xl px-3 flex justify-between`}>
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
                </Column>
                
                <Column>
                    <StyledLinkElement href={''}>Linkedin</StyledLinkElement>
                    <StyledLinkElement href={''}>Github</StyledLinkElement>
                </Column>
            </ContentWrapper>
        </FooterWrapper>
    )
}

export default Footer;