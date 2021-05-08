import "./styles.css";
import Navbar from "./Navbar";
import PomodoroTimer from "./PomodoroTimer";
import TaskContainer from './TaskContainer';
import React from "react";

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pomodoros: [
        {id: 1, title: "Create a Java Program", isCompleted: false}
      ]
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
  return (
    <div className="w3-container w3-indigo w3-stretch">
      <Navbar />
      <PomodoroTimer />
      <TaskContainer pomodoros={this.state.pomodoros} addPomodoros={this.addPomodoros} toggleCompleted={this.toggleCompleted}/>
    </div>
  );
  }
}
