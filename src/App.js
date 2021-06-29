import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import CreateProject from "./components/createProject";
import UpdateProject from "./components/updateProject";
import ProjectForm from "./components/projectForm";
import "antd/dist/antd.css";
import { Redirect } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Fragment>
                {/* <Navbar /> */}
                <Route exact path="/" component={Home} />
                <section className="container">
                    {/* <Alert /> */}
                    <Switch>
                        <Route
                            exact
                            path="/createproject"
                            component={ProjectForm}
                        />
                        <Route
                            exact
                            path="/updateproject"
                            component={UpdateProject}
                        />
                    </Switch>
                </section>
            </Fragment>
        </Router>
    );
};

export default App;
