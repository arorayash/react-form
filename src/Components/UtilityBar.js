import React from 'react';
import "./UtilityBar.css";

import githubLogo from "../media/001-github-sign.svg";
import linkedinLogo from "../media/002-social-media-1.svg";
import dribbbleLogo from "../media/003-social-media.svg";

const socialLinks = {
    github : "https://github.com/arorayash",
    linkedIn : "https://www.linkedin.com/in/infoarorayash",
    dribbble : "https://dribbble.com/AroraYash"
}

export function Title() {
    return (
        <a href="https://github.com/arorayash/react-form">
            <h4 className="header-left">
                <span className="header-text">{"{"} source code {"}"}</span>
            </h4>
        </a>
    );
}

export function Profiles() {
    return (
        <div className="header-right">
            <a href={socialLinks.github}><img src={githubLogo} alt="Github"/></a>
            <a href={socialLinks.linkedIn}><img src={linkedinLogo} alt="LinkedIn"/></a>
            <a href={socialLinks.dribbble}><img src={dribbbleLogo} alt="Dribbble"/></a>
        </div>
    )
}