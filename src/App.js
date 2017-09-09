import React, { Component } from 'react';

import Form from "./Components/Form.js";
import {Title, Profiles, ResponsiveOverlay} from "./Components/UtilityBar";

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="App">
                <ResponsiveOverlay/>
                <div className="main-app">
                    <Title/>
                    <Form/>
                    <Profiles/>
                </div>
            </div>
        );
    }
}

export default App;
