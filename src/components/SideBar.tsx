import React from 'react'
import tw, { styled } from 'twin.macro';
import Menu from './Icons/Menu';

const Nav = styled.button`
    ${tw`bg-white text-black border-2 border-black flex justify-center items-center rounded-2xl p-2`}

    &:hover {
        ${tw`bg-black text-white scale-105 transition-all ease-in-out duration-300`}
    }
`;

const SideBarSection = styled.div`
    ${tw`w-[65px] relative z-20 hidden md:block bg-white lg:flex flex-col gap-4 p-3 transition-all ease-in-out duration-300`}

    &:hover {
        ${tw`w-[300px]`}

        
    > :nth-child(2) {
        ${tw`!flex`}
    }
    }

`;

function SideBar() {
    return (
        <SideBarSection
            css={tw``}
        >
            <div css={tw`flex justify-end`}>
                <Menu />
            </div>

            <div css={tw`flex-col gap-4 hidden`}>
                <Nav>
                    About me 
                </Nav>
                
                <Nav>
                    Experience
                </Nav>
                
                <Nav>
                    Work
                </Nav>
                
                <Nav>
                    OpenSource
                </Nav>

                <Nav>
                    Blog
                </Nav>
            </div>
        </SideBarSection>
    )
}

export default SideBar;