import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./Home";
import DemandList from "./demand/DemandList";


const ApplicationViews = (props) => {
    return (
        <React.Fragment>
            <Route
                exact
                path="/"
                render={props => {
                    return <Home />;
                }}
            />

            <Route
                path="/demands"
                render={props => {
                    return <DemandList />;
                }}
            />

        </React.Fragment >
    );
};


export default ApplicationViews;