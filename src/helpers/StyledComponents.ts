import tw, { styled } from 'twin.macro';

export const CardDescription = styled.div`
    ${tw`font-light text-white mb-3 max-w-[90%]`}
`;

export const CardDescriptionHighLight = styled.span`
    ${tw`font-semibold text-white`}

    &:hover {
        ${tw`underline`}
    }
`;

export const CardTitle = styled.div`
    ${tw`text-[50px] text-white font-semibold my-5`}

    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: #fff;
`;

export const ProfileImage = styled.img`
    ${tw`rounded ring ring-white w-[190px]`}
`;

export const FullName = styled.div`
    ${tw`text-white font-bold text-[30px]`}

    &:hover {
        ${tw`underline`}
    }
`;

export const FieldsGroup = styled.div`
    ${tw`grid gap-y-1`}
`;

export const Field = styled.a`
    ${tw`text-white font-bold cursor-pointer text-[15px]`}

    &:hover {
        ${tw`underline text-red-700`}
    }

    & span {
        ${tw`ml-2`}
    }
`;

export const ExperienceTimeLine = styled.div`
    ${tw`relative pt-[10px] pl-[70px] py-1 space-y-2`}
    
    & .eHero-1 {
        ${tw`
            max-w-[90%]
            flex 
            flex-row 
            justify-between
            items-start

            before:absolute 
            before:left-0 
            before:h-full 
            before:px-px 
            before:bg-white
            before:ml-[2.5rem] 
            before:self-start 
            before:-translate-x-1/2 
            before:translate-y-3

            after:absolute 
            after:left-0 
            after:w-4 
            after:h-4 
            after:bg-white
            after:box-content
            after:rounded-full 
            after:ml-[2.5rem] 
            after:-translate-x-1/2 
            after:translate-y-1.5
        `}

        & div:first-child {
            ${tw`text-2xl font-bold text-white`}

            & span {
                ${tw`ml-1 font-light text-[18px]`}
            }
        }
    }

    & .eHero-2 {
        ${tw`flex justify-between max-w-[90%]`}

        & a {
            ${tw`font-medium text-xl text-white mb-1 sm:mb-0`}
            &:hover {
                ${tw`underline`}
            }
    
            & svg {
                ${tw`ml-2 text-[15px]`}
            }
        }
    }

    & .eDescription {
        ${tw` font-light text-white max-w-[90%]`}
    }

    & .eSkills {
        ${tw`flex space-x-2`}
    }

    & .eSkill {
        ${tw`bg-white rounded-2xl text-sm text-black `}

        & div {
            ${tw`py-1 px-2`}
        }
    }
`;

export const WorkContainer = styled.div`
    ${tw`space-y-2 mb-3`}
`;

export const WorkRow = styled.a`
    ${tw`p-3 rounded space-y-2 sm:flex sm:space-y-0 sm:space-x-4 justify-between max-w-[90%] text-white transition-all ease-in-out duration-200`}

    &:hover {
        ${tw`sm:bg-white`}

        & img {
            ${tw`sm:border-black`}
        }

        & .wName {
            ${tw`sm:text-black`}
        }
    
        & .wDescription {
            ${tw`sm:text-black`}
        }

        & .wLang {
            ${tw`sm:bg-black sm:text-white`}
        }
    }
`;