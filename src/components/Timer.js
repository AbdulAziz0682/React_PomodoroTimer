import React from 'react';
import Time from '../Time';

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.totalTime= this.props.totalTime;
        this.status= "stopped";
        this.intervalId= -1;
        this.state= (()=>{
            console.log(this);
            return {currentTime: this.props.totalTime.clone()}
        })();//Self calling function inorder to access parent properites, NOTE: only use arrow function in this case
        
    }
    getStatus = function(){
        console.log('getstatus');
    }
    toggleStart = (e) =>{
        e.preventDefault();
        if(this.status==="running"){
            clearInterval(this.intervalId)
            e.target.innerText = "STOP";
            this.status = "stopped";
            this.setState({});
        }
        else{
            this.tick();
            e.target.innerText = "START";
            this.status = "running";
        }
    }
    tick = () => {
        this.intervalId = setInterval(()=>{
            this.setState((pstate)=>{
                pstate.currentTime.decrementSec();
                return {currentTime: pstate.currentTime};
            })
            if(this.state.currentTime.toSeconds()<=0){
                this.setState((prevState)=>{
                    return (()=>{
                        console.log(this)
                        return {currentTime: this.totalTime.clone()};
                    })();//Self calling function inorder to access parent properites, NOTE: only use arrow function in this case
                })
                clearInterval(this.intervalId);
                return;
            }
        }, 1000);
    }
    render(){
        return(
            <div className="w3-container w3-center w3-indigo">
                <h1 className="w3-header w3-center">
                    {this.state.currentTime.toSecMinString()}
                </h1>
                <button type="button" className="w3-button w3-white w3-text-indigo" onClick={this.toggleStart}>
                    {this.status==="running"?"STOP":"START"}
                </button>
            </div>
        )
    }
}