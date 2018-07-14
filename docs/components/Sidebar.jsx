import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <a href="https://github.com/zabaala/ui-core" className="btn btn-block btn-primary mb-6">
                    <i className="fe fe-github mr-2"></i>Browse source code
                </a>

                <ul className="list-group list-group-transparent mb-0">
                    <li data-href="../docs/index.html" className="list-group-item list-group-item-action active">
                        <span className="icon mr-3"><i className="fe fe-flag"></i></span>
                        <Link to="/introduction">Introduction</Link>
                    </li>
                    <li data-href="../docs/alerts.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-alert-triangle"></i></span>
                        <Link to="/alerts">Alerts</Link>
                    </li>
                    <li data-href="../docs/avatars.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-user"></i></span>
                        <Link to="/avatars">Avatars</Link>
                    </li>
                    <li data-href="../docs/buttons.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-plus-square"></i></span>
                        <Link to="/buttons">Buttons</Link>
                    </li>
                    <li data-href="../docs/colors.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-feather"></i></span>
                        <Link to="/colors">Colors</Link>
                    </li>
                    <li data-href="../docs/cards.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-image"></i></span>
                        <Link to="/cards">Cards</Link>
                    </li>
                    <li data-href="../docs/charts.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-pie-chart"></i></span>
                        <Link to="/charts">Charts</Link>
                    </li>
                    <li data-href="../docs/form-components.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-check-square"></i></span>
                        <Link to="/form-components">Form components</Link>
                    </li>
                    <li data-href="../docs/tags.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-tag"></i></span>
                        <Link to="/tags">Tags</Link>
                    </li>
                    <li data-href="../docs/typography.html" className="list-group-item list-group-item-action">
                        <span className="icon mr-3"><i className="fe fe-type"></i></span>
                        <Link to="/typography">Typography</Link>
                    </li>
                </ul>
                <div className="d-none d-lg-block mt-6">
                    <a href="https://github.com/tabler/tabler/edit/dev/src/_docs/index.md" className="text-muted">Edit this page</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;