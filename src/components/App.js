import "./styles.css";
import Navbar from "./Navbar";
import PomodoroTimer from "./PomodoroTimer";

export default function App() {
  return (
    <div className="w3-container w3-stretch">
      <Navbar />
      <PomodoroTimer />
    </div>
  );
}
