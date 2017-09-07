import React, { Component } from 'react';

import Form from "./Components/Form.js";
import {Title, Profiles} from "./Components/UtilityBar";

import './App.css';

class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="App">
                <Title/>
                <Form/>
                <Profiles/>
            </div>
        );
    }
}

export default App;
