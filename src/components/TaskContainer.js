import React from 'react';
import AddTask from './AddTask';
import PomodorosList from './PomodorosList';

export default class TaskContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentTask: "this is current task",
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target);
    }
    render(){
        return(
            <div id="taskContainer" className="w3-container">
                <div className="w3-row">
                    <h5 className="w3-header w3-center">WORKING ON</h5>
                    <h2 className="w3-header w3-center">{this.state.currentTask}</h2>
                </div>
                <PomodorosList pomodoros={this.props.pomodoros} toggleCompleted={this.props.toggleCompleted}/>
                <AddTask addPomodoros={this.props.addPomodoros}/>
            </div>
        )
    }
}
