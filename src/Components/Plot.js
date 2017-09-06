import React from "react";

import "./Plot.css";

export default class Plot extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 0
        }

    }

    componentWillReceiveProps(nextProps){


    }

    render() {
        document.documentElement.style.setProperty(`--per`, this.props.percentageValue);
        return (
            <div className="plot-wrapper">
                <figure className="chart-one animate">
                    <svg role="img" xmlns="http://www.w3.org/2000/svg">
                        <circle className="circle-background"/>
                        <circle className="circle-foreground"/>
                    </svg>
                    <figcaption></figcaption>
                </figure>
            </div>
        )
    }
}