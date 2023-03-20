import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "" : "var(--clr-nav-link-inactive)",
    fontWeight: isActive ? "var(--fwt-semi-bold)" : "var(--fwt-regular)",
    borderBottom: isActive ? "4px solid transparent" : "none",
    background: isActive ? "var(--clr-gradient-text)" : "",
    backgroundClip: isActive ? "text" : "",
    webkitBackgroundClip: isActive ? "text" : "",
    webkitTextFillColor: isActive ? "transparent" : "",
  });
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
