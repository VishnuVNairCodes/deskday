import "./App.css";
import { Header, Main, NavBar, SideBar } from "./components";

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
