import { useAuth } from "../../contexts/auth-context";
import { Avatar } from "../Avatar";
import "./AsideLogout.css";

const AsideLogout = () => {
  const {
    employeeDetails: { firstName, lastName },
  } = useAuth();
  return (
    <div className="aside-logout-container">
      <Avatar size="small" />
      <h1 className="aside-logout-name">
        {firstName} {lastName}
      </h1>
      <button className="btn-icon aside-logout-btn-icon">
        <i className="fa-solid fa-ellipsis-vertical"></i>
      </button>
    </div>
  );
};

export { AsideLogout };
