import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

import { isSignedIn } from "./services/security"

function PrivateRoute({ children, rest }) {

    if(isSignedIn()){
        return <Route {...rest}>{children}</Route>;
    }else{
        return <Redirect to="/" />;
    }
}

function Router() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/home">
                    <PrivateRoute path="/home">
                        <Home />
                    </PrivateRoute>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;