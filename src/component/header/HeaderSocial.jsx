import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {CgTwitter} from 'react-icons/cg'

const HeaderSocial =()=>{
    return(
        <div className="header_social">
            <a href="#LinkedIn" target="blank"><BsLinkedin /></a>
            <a href="#Facebook" target="blank"><FaFacebookF /></a>
            <a href="#Github" target="blank"><FaGithub /></a>
            <a href="#Twitter" target="blank"><CgTwitter /></a>
        </div>
    );
}

export default HeaderSocial