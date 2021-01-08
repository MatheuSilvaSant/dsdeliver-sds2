import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Orders from "../components/Orders";

const Routes: React.FC = () => {
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/orders">
                    <Orders />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;