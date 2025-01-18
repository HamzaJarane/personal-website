import React, { useState } from 'react'
import tw, { styled, css } from 'twin.macro';
import Menu from './Icons/Menu';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = styled.button`
    ${tw`bg-white text-black border-2 border-black flex justify-center items-center rounded-2xl p-2`}

    &:hover {
        ${tw`bg-black text-white scale-105 transition-all ease-in-out duration-300`}
    }
`;

// const SideBarSection = styled.div`
//     ${tw`w-[65px] relative z-20 hidden bg-white lg:flex flex-col gap-4 p-3 transition-all ease-in-out duration-300`}

//     &:hover {
//         ${tw`w-[300px]`}
   
//         > :nth-child(2) {
//             ${tw`!flex`}
//         }
//     }
// `;

// const SideBarSectionPhone = styled.div<{ menuOpen: boolean }>`
//     ${tw`h-0 fixed z-20 lg:hidden bg-transparent flex flex-col gap-4 p-3`}
//     width: 100%;
//     transition: height 0.3s ease-in-out, background-color 0.3s ease-in-out;
  
//     ${({ menuOpen }) => menuOpen && css`
//         ${tw`bg-white`}

//         height: 350px;
        
//         & > :nth-child(2) {
//             ${tw`flex`}
//         }
//     `}
// `;

const SideBarSection = styled.div<{ menuOpen?: boolean }>`
  ${tw`fixed z-20 flex flex-col gap-4 p-3 overflow-hidden`}
  transition: height 0.3s ease-in-out, width 0.3s ease-in-out, background-color 0.3s ease-in-out;

  /* Desktop styles */
  ${tw`lg:relative lg:bg-white/80 lg:w-[65px] `}
  
  /* Mobile styles */
  ${tw`h-[40px] bg-transparent lg:h-auto`}
  width: 100%;

  /* Desktop hover state */
  @media (min-width: 1024px) {
    &:hover {
      ${tw`w-[300px] bg-white`}
      > :nth-child(2) {
        ${tw`flex`}
      }
    }
  }

  /* Mobile open state */
  ${({ menuOpen }) => menuOpen && css`
    ${tw`bg-white`}
    height: 350px;

    & > :nth-child(1) {
      ${tw`!text-black`}
    }
    
    & > :nth-child(2) {
      ${tw`flex`}
    }
  `}
`;

function SideBar() {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const Buttons = [
        {
            name: t('nav.about-me'),
            id: 'about-me',
            link: '/',
        },
        {
            name: t('nav.experience'),
            id: 'experience',
            link: '/',
        },
        {
            name: t('nav.work'),
            id: 'work',
            link: '/',   
        },
        {
            name: t('nav.open-source'),
            id: 'open-source',
            link: '/',   
        },
        {
            name: t('nav.blog'),
            link: '/blog',
        },
    ];

    const onClick = (nav: (typeof Buttons)[number]) => {
        if(!nav?.id) {
            navigate(nav.link);
        } else {
            if(location.pathname !== nav.link) {
                navigate(nav.link);
            }

            const element = document.getElementById(nav.id);
            if(element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }

        setMenuOpen(false);
    }

    return (
        <SideBarSection
            css={tw``}
            menuOpen={menuOpen}
        >
            <div css={tw`flex justify-end lg:text-black text-white`}>
                <Menu
                    onClick={() => setMenuOpen(e => !e)}
                    color={'currentColor'}
                />
            </div>

            <div css={tw`flex-col gap-4 hidden`}>
                {Buttons.map((nav) => (
                    <Nav
                        onClick={() => onClick(nav)}
                    >
                        {nav.name} 
                    </Nav>
                ))}
            </div>
        </SideBarSection>
    )
}

export default SideBar;