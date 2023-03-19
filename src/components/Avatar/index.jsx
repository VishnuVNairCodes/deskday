import "./Avatar.css";

const Avatar = ({ size }) => {
  return <img className={`avatar avatar-${size}`} alt="avatar" />;
};

export { Avatar };
