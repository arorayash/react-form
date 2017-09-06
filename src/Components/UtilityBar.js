import React from 'react';
import "./UtilityBar.css";

import logo from "../github.svg";

export default function Title() {
    return (
        <h4 className="header">
            <a href="https://github.com/arorayash/tree-traversals"><img src={logo} alt=""/></a>
            <span className="header-text">KredX Assignment</span>
        </h4>
    );
}