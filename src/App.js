import "./App.css";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <div className="header">header</div>
      <div className="main">body</div>
    </div>
  );
}

export default App;
