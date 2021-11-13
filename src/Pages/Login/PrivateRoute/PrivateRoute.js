import { CircularProgress } from "@mui/material";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

 
// const PrivateRoute = (props) => {
const PrivateRoute = ({children, ...rest}) => {
    // const {children, ...rest} = props;
    const {user, isLoding} = useAuth();
    if(isLoding){return <CircularProgress color="secondary" />}
    return (
        <Route
        {...rest}
        render = {({location})=>user.email ? children :
        <Redirect  to={{
            pathname: "/login",
            state: { from: location }
          }}
          ></Redirect>}
        ></Route>
    );
};
export default PrivateRoute;