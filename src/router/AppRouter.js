import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { StoreScreen } from "../components/pages/StoreScreen";
import { UserHistoryScreen } from "../components/pages/UserHistoryScreen";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
    return (
        <Router>
            <>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={ StoreScreen } />
                    <Route exact path="/my-history" component={ UserHistoryScreen } />
                </Switch>
            </>
        </Router>
    )
}
