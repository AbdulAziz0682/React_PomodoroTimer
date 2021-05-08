import "./styles.css";
import Navbar from "./Navbar";
import PomodoroTimer from "./PomodoroTimer";
import TaskContainer from './TaskContainer';

export default function App() {
  return (
    <div className="w3-container w3-indigo w3-stretch">
      <Navbar />
      <PomodoroTimer />
      <TaskContainer />
    </div>
  );
}
