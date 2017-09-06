import React, { Component } from 'react';

import Form from "./Components/Form.js";
import Title from "./Components/UtilityBar";

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
            </div>
        );
    }
}

export default App;
