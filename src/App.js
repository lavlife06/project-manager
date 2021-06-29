import React, { Fragment, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import CreateProject from "./components/createProject";
import UpdateProject from "./components/updateProject";
import Project from "./components/project";
import Navbar from "./components/navbar";

// import ProjectForm from "./components/projectForm";
import "antd/dist/antd.css";

const App = () => {
    return (
        <Router>
            <Fragment>
                <Navbar />
                <Route exact path="/" component={Home} />
                <section className="container">
                    {/* <Alert /> */}
                    <Switch>
                        <Route
                            exact
                            path="/createproject"
                            component={CreateProject}
                        />
                        <Route
                            exact
                            path="/updateproject"
                            component={UpdateProject}
                        />
                        <Route exact path="/viewproject" component={Project} />
                    </Switch>
                </section>
            </Fragment>
        </Router>
    );
};

export default App;
