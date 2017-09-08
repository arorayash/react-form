import React from "react";

import Plot from "./Plot.js"
import "./Form.css";

function Tooltip(props) {
    return (
        <span className="warning-message">{props.text}</span>
    )
}

export default class Form extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "",
            value: "0",
            valueWarn: false,
            startDate: "",
            endDate: "",
            dateWarn: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleValueChange = this.handleValueChange.bind(this);

        this._onFocus = this._onFocus.bind(this);
        this._onBlur = this._onBlur.bind(this);

        this.showValueErrors = this.showValueErrors.bind(this);
        this.checkDateError = this.checkDateError.bind(this);
        this.showDateErrors = this.showDateErrors.bind(this);
    }

    handleNameChange(e){
        this.setState({name: e.target.value});
    }

    handleValueChange(e){
        //console.dir(e.target.value);
        if(e.target.value>=0 && e.target.value<=100)
        {
            this.setState({value: e.target.value, valueWarn:false});
        }
        else
        {
            this.setState({value: "0", valueWarn:true});
        }
    }

    checkValueErrors(){

    }

    showValueErrors(){
        let Warn;
        if(this.state.valueWarn === true)
        {
            Warn = <Tooltip text="Incorrect Value"/>
        } else {
            Warn = null;
        }
        return Warn;
    }

    _onFocus(e){
        e.currentTarget.type = "date";
    }

    _onBlur(e){
        if(e.target.name === "startDateField")
        {
            this.setState({
                startDate: e.target.value
            }, () =>  this.checkDateError());
        }

        if(e.target.name === "endDateField")
        {
            this.setState({
                endDate: e.target.value
            }, () => this.checkDateError());
        }

        //console.log(date.getTime());

        if(e.target.value == "")
            e.currentTarget.type = "text";
    }

    checkDateError(){
        if(this.state.startDate == null || this.state.endDate == null)
            return;

        let startdate = new Date(this.state.startDate);
        let enddate = new Date(this.state.endDate);
        if(startdate > enddate)
        {
            this.setState({dateWarn:true});
            return true;
        }
        else
        {
            this.setState({dateWarn:false});
            return false;
        }
    }

    showDateErrors(){
        let Warn;
        if(this.state.dateWarn === true)
        {
            Warn = <Tooltip text="Incorrect Date Range"/>
        } else {
            Warn = null;
        }
        return Warn;
    }

    handleSubmit(e){
        e.preventDefault();
        var dateErrors = this.checkDateError();
        if((this.state.name == "" || this.state.startDate == "" || this.state.endDate == "" || this.state.value > 100 || this.state.value < 0) || this.state.valueWarn === true || dateErrors === true)
            alert("Errors!");
        else
            alert("Submitted the form");
    }

    render() {
        let valueWarn = this.showValueErrors();
        let dateWarn = this.showDateErrors();
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group">
                        <input className="name"
                               onBlur={this.handleNameChange}
                               placeholder="Name"
                               type="text"/>
                    </div>
                    <div className="input-group">
                        <input className="date start-date"
                               onChange={this.handleChange}
                               placeholder="Start Date"
                               name="startDateField"
                               ref="startDateField"
                               onFocus = {this._onFocus}
                               onBlur={this._onBlur}/>
                    </div>
                    <div className="input-group">
                        <input className="date end-date"
                               onChange={this.handleChange}
                               placeholder="End Date"
                               name="endDateField"
                               ref="endDateField"
                               onFocus = {this._onFocus}
                               onBlur={this._onBlur}/>
                        {dateWarn}
                    </div>
                    <div className="input-group">
                        <input className="value"
                               onChange={this.handleValueChange}
                               placeholder="Value(1-100)"
                               min={0}
                               max={100}
                               ref="valueField"
                               type="number"
                               data-tip='custom show'/>
                        {valueWarn}
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