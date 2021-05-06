import React from 'react';
import Time from '../Time';
import Timer from './Timer';

export default class PomodoroTimer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTab: "pomodoro"
        }
    }
    showTab = (tab) => {
        this.setState({
            currentTab: tab
        });
        console.dir(this.state);
    }
    render(){
        return(
            <div className="w3-container w3-stretch">
                <div className="w3-bar w3-center w3-deep-purple w3-mobile">
                    <div onClick={() => this.showTab("pomodoro")} id="pomodoro">
                        <span className="w3-bar-item w3-hover-purple">Pomodoro</span>
                    </div>
                    <div onClick={() => this.showTab("shortBreak")} id="shortBreak">
                        <span className="w3-bar-item w3-hover-purple">Short Break</span>
                    </div>
                    <div onClick={() => this.showTab("longBreak")} id="longBreak">
                        <span className="w3-bar-item w3-hover-purple">Long Break</span>
                    </div>
                </div>
                {
                    this.state.currentTab==="pomodoro" ?
                    <Timer totalTime={new Time(2, 0)}/>
                    :
                    this.state.currentTab==="shortBreak" ? 
                    <Timer totalTime={new Time(0, 5)}/>
                    :
                    this.state.currentTab==="longBreak" ?
                    <Timer totalTime={new Time(0, 5)}/>
                    : <div>No tab</div>
                }
                
            </div>
        )
    }
}