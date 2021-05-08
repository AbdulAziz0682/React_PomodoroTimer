import React from 'react';

export default class PomodoroItem extends React.Component{
    constructor(props){
        super(props);
        console.log("data to pomodoroItem");
        console.dir(this.props.data);
        this.state = this.props.data;
    }
    render(){
        return (
            <li id={this.state.id} key={this.state.id}><input type="checkbox" onChange={()=>this.props.toggleCompleted(this.state.id)} checked={this.state.isCompleted?"checked":""}/>
                <span>{this.state.title}</span>            
            </li>
        )
    }
}