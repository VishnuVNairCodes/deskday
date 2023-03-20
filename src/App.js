import "./App.css";
import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
      <div className="main">body</div>
    </div>
  );
}

export default App;
