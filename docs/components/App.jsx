import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import Sidebar from "./Sidebar";
import Alerts from "./Alerts";
import Avatars from "./Avatars";
import Buttons from "./Buttons";
import Cards from "./Cards";
import Charts from "./Charts";
import Colors from "./Colors";
import Grid from "./Grid";
import FormComponents from "./FormCompoments";
import Introduction from "./Introduction";
import Tags from "./Tags";
import Typography from "./Typography";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="my-3 my-md-5">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-wrap p-lg-12">
                                            <Route exact path="/" component={Introduction} />
                                            <Route path="/introduction" component={Introduction} />
                                            <Route path="/alerts" component={Alerts} />
                                            <Route path="/avatars" component={Avatars} />
                                            <Route path="/buttons" component={Buttons} />
                                            <Route path="/cards" component={Cards} />
                                            <Route path="/charts" component={Charts} />
                                            <Route path="/colors" component={Colors} />
                                            <Route path="/grid" component={Grid} />
                                            <Route path="/form-components" component={FormComponents} />
                                            <Route path="/tags" component={Tags} />
                                            <Route path="/typography" component={Typography} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

render(
    <App />,
    document.getElementById('root')
);