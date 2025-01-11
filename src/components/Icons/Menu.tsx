import React from 'react'
import tw from 'twin.macro';

function Menu({ color = 'black', width = '40px', height = '7px' }: { color?: string, width?: string, height?: string }) {
    return (
        <div css={tw`flex flex-col gap-1 cursor-pointer`}>
            <div style={{ backgroundColor: color, width, height }} css={tw`rounded-full`}></div>
            <div style={{ backgroundColor: color, width, height }} css={tw`rounded-full`}></div>
            <div style={{ backgroundColor: color, width, height }} css={tw`rounded-full`}></div>
        </div>
    )
}

export default Menu;