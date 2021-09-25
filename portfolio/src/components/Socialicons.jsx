import React from 'react';
import {AiOutlineGithub} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillTwitterCircle} from 'react-icons/ai';

function Socialicons() {
    
    return (
        <div className="social">
            <AiOutlineGithub  className="git " size="2rem" color ="rgb(158, 12, 139)" />
            <AiFillLinkedin  className="linked " size ="3rem" color="rgb(158, 12, 139)" />
            <AiFillTwitterCircle className="twitter " size="3rem" color="rgb(158, 12, 139)" />
        </div>
    )
}

export default Socialicons
