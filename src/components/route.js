import { Navigate } from "react-router-dom";
import { user } from "./Login";

const PrivateRoute = ({ auth, children }) => {
  return user ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
