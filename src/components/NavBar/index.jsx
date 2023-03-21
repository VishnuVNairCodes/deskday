import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const getActiveStyle = ({ isActive }) => ({
    color: isActive ? "" : "var(--clr-nav-link-inactive)",
    fontWeight: isActive ? "var(--fwt-semi-bold)" : "var(--fwt-regular)",
    borderBottom: isActive ? "4px solid transparent" : "none",
    background: isActive
      ? "radial-gradient(94.76% 4003.41% at 5.24% 29.55%, #4652CD 0%, #46CBEA 100%)"
      : "",
    backgroundClip: isActive ? "text" : "",
    WebkitBackgroundClip: isActive ? "text" : "",
    WebkitTextFillColor: isActive ? "transparent" : "",
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
