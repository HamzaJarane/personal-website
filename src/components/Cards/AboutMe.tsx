import React from 'react'
import { CardTitle, CardDescription, CardDescriptionHighLight } from '@/helpers/StyledComponents';
import tw from 'twin.macro';

function AboutMe() {
    return (
        <div>
            <CardTitle>
                About me.
            </CardTitle>

            <CardDescription>
                My name is <CardDescriptionHighLight>Hamza</CardDescriptionHighLight>,
                I'm a <CardDescriptionHighLight>20</CardDescriptionHighLight> year old from <CardDescriptionHighLight>Morroco</CardDescriptionHighLight>.
            </CardDescription>

            <CardDescription>
                In 2020, I began my career as a Linux administrator, which ignited my passion for DevOps and web development.
                Now, as a full-stack developer with over two years of experience,
                I specialize in creating user-friendly websites and web applications using modern technologies.
            </CardDescription>

            <CardDescription>
                <CardDescriptionHighLight css={tw`text-xl`}>Languages</CardDescriptionHighLight>
            </CardDescription>

            <CardDescription>
                TypeScript / JavaScript and PHP.
            </CardDescription>

            <CardDescription>
                <CardDescriptionHighLight css={tw`text-xl`}>Frameworks</CardDescriptionHighLight>
            </CardDescription>

            <CardDescription>
                WordPress, Laravel, NextJS, ReactJS, VueJS, Tailwind CSS.
            </CardDescription>
        </div>
    )
}

export default AboutMe;