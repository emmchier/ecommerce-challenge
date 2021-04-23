import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { StoreScreen } from "../components/pages/StoreScreen";
import { UserHistoryScreen } from "../components/pages/UserHistoryScreen";
//import { ProductDetail } from "../components/products/ProductDetail";
import { Navbar } from "../components/ui/Navbar";

export const AppRouter = () => {
    
    return (
        
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={ StoreScreen } />
                <Route exact path="/my-history" component={ UserHistoryScreen } />
                {/* <Route exact path="/product/:productId" component={ ProductDetail } /> */}

                <Redirect to="/" />
            </Switch>
        </Router>
        
    )
}
