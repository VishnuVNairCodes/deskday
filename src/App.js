import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
      <div className="app-body">
        <NavBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
