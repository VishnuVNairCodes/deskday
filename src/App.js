import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/general" element={<General />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/team-members" element={<TeamMembers />} />
      </Routes>
    </div>
  );
}

export default App;
