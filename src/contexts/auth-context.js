import { createContext, useContext } from "react";
import { getEmployeeDetails } from "../services/get-employee-details";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const employeeDetails = getEmployeeDetails();
  return (
    <AuthContext.Provider value={{ employeeDetails }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
