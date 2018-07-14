import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sidebar from "./Sidebar";

import Alerts from "./Alerts";
import Avatars from "./Avatars";
import Introduction from "./Introduction";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="text-wrap p-lg-6">
                                            <Route exact path="/introduction" component={Introduction} />
                                            <Route exact path="/alerts" component={Alerts} />
                                            <Route exact path="/avatars" component={Avatars} />
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

export default App;

render(
    <App />,
    document.getElementById('root')
);