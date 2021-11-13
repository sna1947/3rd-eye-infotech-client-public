import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

 
// const PrivateRoute = (props) => {
const AdminRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user,admin, isLoding} = useAuth();
    if(isLoding){return <CircularProgress color="secondary" />}
    return (
        <Route
        {...rest}
        render = {({location})=>user.email  &&  admin ? children :
        <Redirect  to={{
            pathname: "/",
            state: { from: location }
          }}
          ></Redirect>}
        ></Route>
    );
};
export default AdminRoute;