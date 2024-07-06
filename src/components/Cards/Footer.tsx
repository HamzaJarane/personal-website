import React from 'react'
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    return (
        <div css={tw`my-3`}>
            Made with <FontAwesomeIcon css={tw`text-yellow-800`} icon={faCoffee} />
        </div>
    )
}

export default Footer;