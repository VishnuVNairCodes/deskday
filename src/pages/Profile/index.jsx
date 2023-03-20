import { Avatar, FieldSet } from "../../components";
import "./Profile.css";

const Profile = () => (
  <div className="profile-container">
    <h5 className="profile-heading">Personal Info</h5>
    <div className="employee-card">
      <Avatar size="large" />
      <div className="employee-card-details">
        <h4 className="employee-card-name">John Doe</h4>
        <p className="employee-card-email">john@gmail.com</p>
        <div className="employee-card-change-profile">
          <i className="fa-regular fa-pen-to-square"></i>
          <p>Change Profile Picture</p>
        </div>
      </div>
    </div>
    <div className="employee-details-container">
      <FieldSet fieldName="Full name" fieldData="John doe" />
    </div>
  </div>
);

export { Profile };
