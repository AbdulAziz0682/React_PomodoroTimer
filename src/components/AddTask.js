import React from 'react';

export default class AddTask extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentValue: "1",
            task: ""
        }
    }
    toggleAddPanel=(e)=>{
        let addPanel = document.getElementById('addPanel');
        let addTaskButton = document.getElementById('addTaskButton');
        if(e.target.id==="addTaskButton"){
            addTaskButton.style = "display: none;";
            addPanel.style = "display: block;";
        }
        else if(e.target.id==="cancel"){
            addTaskButton.style = "display: block;";
            addPanel.style = "display: none;";
            this.setState({currentValue: "1", task: ""});
        }
    }
    handleSubmit = ()=>{
        let addPanel = document.getElementById('addPanel');
        let addTaskButton = document.getElementById('addTaskButton');
        addTaskButton.style = "display: block;";
        addPanel.style = "display: none;";
        
    }
    handleChange= (e)=>{
        if(Number.parseInt(e.target.value)<=0) this.setState({currentValue: "1"});
        else if(Number.parseInt(e.target.value)>=25) this.setState({currentValue: "25"});
        else if(Number.parseInt(e.target.value)<=25 && Number.parseInt(e.target.value)>=0) this.setState({currentValue: e.target.value});
        else return;
    }
    handleTaskInput = (e)=>{
        this.setState({task: e.target.value});
    }
    render(){
    return (
        <div className="w3-cell-row w3-mobile">
            <button id="addTaskButton" className="w3-button w3-block w3-center-align" type="button" onClick={(e)=>this.toggleAddPanel(e)}>Add</button>
            <div id="addPanel" className="w3-container w3-light-gray" style={{display: "none"}}>
                <div className="w3-row">
                    <input type="text" placeholder="What are you working on?" value={this.state.task} onChange={(e)=>this.handleTaskInput(e)} className="w3-input w3-border w3-rest" />
                    <p className="w3-rest" style={{fontWeight: "bold"}}>Est Promodos</p>
                    <input type="number" className="w3-input w3-border w3-quarter" onChange={(e)=>this.handleChange(e)} min="1" max="25" value={this.state.currentValue}/>
                </div>
                <div className="w3-row w3-stretch w3-right">
                    <button className="w3-button" id="cancel" type="button" onClick={(e)=>this.toggleAddPanel(e)}>Cancel</button>
                    <button className="w3-button" id="save" type="button" onClick={()=>this.handleSubmit()} disabled={""===this.state.task}>Save</button>
                </div>
            </div>
        </div>
    )
    }
}