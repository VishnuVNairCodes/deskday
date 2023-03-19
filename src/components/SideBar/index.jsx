import { AsideLogout } from "./components/AsideLogout";
import "./SideBar.css";

const SideBar = () => {
  return (
    <aside className="aside">
      <header className="aside-header">DeskDay</header>
      <div className="aside-search">Search</div>
      <div className="aside-options-container">
        <div className="aside-options-heading">Service Desk</div>
        <div className="aside-option">My Tickets</div>
        <div className="aside-option">My Requests</div>
      </div>
      <AsideLogout />
    </aside>
  );
};

export { SideBar };
