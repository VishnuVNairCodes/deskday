import { Route, Routes } from "react-router-dom";
import { Profile, General, Notifications, TeamMembers } from "../../pages";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/general" element={<General />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/team-members" element={<TeamMembers />} />
      </Routes>
    </main>
  );
};

export { Main };
