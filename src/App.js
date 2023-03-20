import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
      <div className="app-body">
        <nav className="nav">Haha</nav>
        <Main />
      </div>
    </div>
  );
}

export default App;
