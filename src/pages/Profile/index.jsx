import { Avatar, FieldSet } from "../../components";
import { useAuth } from "../../contexts/auth-context";
import "./Profile.css";

const Profile = () => {
  const {
    employeeDetails: {
      firstName,
      lastName,
      mobileNumber,
      email,
      officeDeskNumber,
      designation,
      department,
    },
  } = useAuth();
  return (
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
        <FieldSet
          fieldName="Full name"
          fieldData={`${firstName} ${lastName}`}
        />
        <FieldSet fieldName="Mobile Number" fieldData={mobileNumber} />
        <FieldSet fieldName="Email" fieldData={email} />
        <FieldSet fieldName="Office desk number" fieldData={officeDeskNumber} />
        <FieldSet fieldName="Designation" fieldData={designation} />
        <FieldSet fieldName="Department" fieldData={department} />
      </div>
      <div className="profile-save-changes">
        <div className="profile-save-changes-btn-container">
          <button className="btn profile-cancel-btn">Cancel</button>
          <button className="btn profile-save-btn">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export { Profile };
