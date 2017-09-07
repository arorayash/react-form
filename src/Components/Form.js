import React from "react";
import Plot from "./Plot.js"
import "./Form.css";

export default class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            value: "0",
            startDate: null,
            endDate: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);
    }

    handleValueChange(){
        //event.preventDefault();
        if(this.refs.valueField.value>=0 && this.refs.valueField.value<=100)
            this.setState({value: this.refs.valueField.value})
        else
            alert("Wrong val");

    }

    handleNameChange(){

    }

    handleSubmit(){

    }

    _onFocus(e){
        e.currentTarget.type = "date";
    }

    _onBlur(e){
        //console.log(e.currentTarget.placeholder);
        e.currentTarget.type = "text";
    }

    render() {
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input className="name" onChange={this.handleNameChange} placeholder="Name" type="text"/>
                    </div>
                    <div className="input-group">
                        <input className="value" onChange={this.handleValueChange} placeholder="Value(1-100)" ref="valueField" type="number"/>
                    </div>

                    <div className="input-group">
                        <input className="date start-date" onChange={this.handleChange} placeholder="Start Date" ref="startDateField" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                    </div>
                    <div className="input-group">
                        <input className="date end-date" onChange={this.handleChange} placeholder="End Date" ref="endDateField" type="text" onFocus = {this._onFocus} onBlur={this._onBlur}/>
                    </div>
                    <br/>

                    <Plot percentageValue={this.state.value}/>
                    <div className="submit input-group">
                        <input className="button" type="submit"/>
                    </div>
                </form>
            </div>
        )
    }
}