import React from 'react';
import AddTask from './AddTask';
import PomodorosList from './PomodorosList';

export default class TaskContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="taskContainer" className="w3-container">
                <div className="w3-row">
                    <h5 className="w3-header w3-center">WORKING ON</h5>
                    <h2 className="w3-header w3-center">{this.props.currentTaskTitle}</h2>
                </div>
                <PomodorosList pomodoros={this.props.pomodoros} toggleCompleted={this.props.toggleCompleted} makeCurrent={this.props.makeCurrent}/>
                <AddTask addPomodoros={this.props.addPomodoros}/>
            </div>
        )
    }
}
