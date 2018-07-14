import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Introduction from "./Introduction";
import Sidebar from "./Sidebar";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="my-3 my-md-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <Route exact path="/introduction" component={Introduction} />
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