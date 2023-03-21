import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const getActiveStyle = ({ isActive }) =>
    isActive
      ? {
          color: "",
          fontWeight: "var(--fwt-semi-bold)",
          background: "var(--clr-nav-link-active)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          paddingBottom: "8px",
          borderBottom: "4px solid transparent",
          borderImage: "var(--clr-nav-link-active)",
          borderImageSlice: "1",
          width: "100%",
        }
      : {
          color: "var(--clr-nav-link-inactive)",
          fontWeight: "var(--fwt-regular)",
        };
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <NavLink style={getActiveStyle} className="nav-list-item-link" to="/">
            Profile
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            style={getActiveStyle}
            className="nav-list-item-link"
            to="/general"
          >
            General
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            style={getActiveStyle}
            className="nav-list-item-link"
            to="/notifications"
          >
            Notifications
          </NavLink>
        </li>
        <li className="nav-list-item">
          <NavLink
            style={getActiveStyle}
            className="nav-list-item-link"
            to="/team-members"
          >
            Team Members
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
