import { useAuth } from "../../contexts/auth-context";
import "./Avatar.css";

const Avatar = ({ size }) => {
  const {
    employeeDetails: { profileImage },
  } = useAuth();
  return (
    <img className={`avatar avatar-${size}`} src={profileImage} alt="avatar" />
  );
};

export { Avatar };
