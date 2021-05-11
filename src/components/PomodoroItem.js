import React from 'react';

export default class PomodoroItem extends React.Component{
    constructor(props){
        super(props);
        this.state = this.props.data;
    }
    makeCurrent = (e)=>{
        this.props.makeCurrent(e.target.id);
    }
    render(){
        let tipStyle = {
            position: "absolute",
            bottom: "25px"
        }
        return (<>
            {   this.state.current 
                ?
                <li className="w3-border w3-leftbar w3-border-cyan" id={this.state.id} key={this.state.id}><input type="checkbox" onChange={()=>this.props.toggleCompleted(this.state.id)} checked={this.state.isCompleted?"checked":""}/>
                    <span>{this.state.title}</span>   
                </li>
                :
                <li onClick={(e)=>this.makeCurrent(e)} className="w3-tooltip w3-border" id={this.state.id} key={this.state.id}><input type="checkbox" onChange={()=>this.props.toggleCompleted(this.state.id)} checked={this.state.isCompleted?"checked":""}/>
                    <span>{this.state.title}</span>                
                    <span style={tipStyle} className="w3-text w3-tag w3-opacity w3-khaki">Click to make current task</span>    
                </li>
            }
            </>
        )
    }
}