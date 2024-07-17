import React from 'react'
import { CardTitle, CardDescription, CardDescriptionHighLight } from '@/helpers/StyledComponents';
import tw from 'twin.macro';

function AboutMe() {
    return (
        <div>
            <CardTitle text={'About me.'} />
            <CardDescription>
                My name is <CardDescriptionHighLight>Hamza</CardDescriptionHighLight>,
                I'm a <CardDescriptionHighLight>20</CardDescriptionHighLight> year old from <CardDescriptionHighLight>Morroco</CardDescriptionHighLight>.
            </CardDescription>

            <CardDescription>
                In <CardDescriptionHighLight>2020</CardDescriptionHighLight>, I began my career as a <CardDescriptionHighLight>Linux administrator</CardDescriptionHighLight>, which ignited my passion for <CardDescriptionHighLight>DevOps</CardDescriptionHighLight> and <CardDescriptionHighLight>Web development</CardDescriptionHighLight>.
                Now, as a <CardDescriptionHighLight>full-stack developer</CardDescriptionHighLight> with over two years of experience,
                I specialize in creating user-friendly websites and web applications using modern technologies.
            </CardDescription>

            <CardDescription>
                <CardDescriptionHighLight css={tw`text-xl underline`}>Languages</CardDescriptionHighLight>
            </CardDescription>

            <CardDescription>
                TypeScript / JavaScript and PHP.
            </CardDescription>

            <CardDescription>
                <CardDescriptionHighLight css={tw`text-xl underline`}>Frameworks</CardDescriptionHighLight>
            </CardDescription>

            <CardDescription>
                WordPress, Laravel, NextJS, ReactJS, VueJS, Tailwind CSS.
            </CardDescription>
        </div>
    )
}

export default AboutMe;