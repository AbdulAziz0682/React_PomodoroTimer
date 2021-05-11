import "./styles.css";
import Navbar from "./Navbar";
import PomodoroTimer from "./PomodoroTimer";
import TaskContainer from './TaskContainer';
import React from "react";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: "",
      pomodoros: [
        {id: 1, title: "Create a Java Program", isCompleted: false}
      ]
    }
  }
  setStatus = (status)=>{
    if(status==="pomodoro"){
      document.body.style = "background-color: lightgreen;";
    }
    else if(status==="shortBreak"){
      document.body.style = "background-color: lightblue";
    }
    else if(status==="longBreak"){
      document.body.style = "background-color: cyan";
    }
    this.setState({status: status});
  }
  onTimeEnd = (e)=>{
    console.dir(e);
    if(e.id==="pomodoro"){
      this.setState({status: "shortBreak"});
    }else if(e.id==="shortBreak"){
      this.setState({status: "pomodoro"});
    }
    else if(e.id==="longBreak"){
      this.setState({status: "pomodoro"});
    }
  }
  addPomodoros = (pomodoros)=>{
    console.dir(this.state);
    let newId = this.state.pomodoros[this.state.pomodoros.length-1].id+1;
    let newPomodoros = pomodoros.map((element)=>{
      return {id: newId++, ...element};
    });
    this.setState((prevState)=>{
      return {pomodoros: [...prevState.pomodoros, ...newPomodoros]};
    });
  }
  toggleCompleted = (id) =>{
    console.log(id);
    let filteredPomodoro = this.state.pomodoros.map((element)=>{
      if(element.id===id){
        element.isCompleted = !element.isCompleted;
        return element;
      }
      return element;
    });
    this.setState((prevState)=>{
      return {pomodoros: filteredPomodoro}});
  }
  render(){
    {this.state.status === "pomodoro"?document.body.style="background-color: lightgreen":""}
    {this.state.status === "shortBreak"?document.body.style="background-color: lightblue":""}
    {this.state.status === "longBreak"?document.body.style="background-color: cyan":""}
    return (
      <div className="w3-container w3-indigo w3-stretch">
        <Navbar />
        <PomodoroTimer setStatus={this.setStatus} onTimeEnd={this.onTimeEnd}/>
        <TaskContainer pomodoros={this.state.pomodoros} addPomodoros={this.addPomodoros} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}
