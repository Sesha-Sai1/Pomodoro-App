import { Route, Routes } from "react-router-dom";
import "./App.css";
import Timer from "./components/Timer";
import MainPage from "./components/MainPage";
import CustomizeTimer from "./components/CustomizeTimer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/customize" element={<CustomizeTimer />} />
      </Routes>
    </div>
  );
}

export default App;
