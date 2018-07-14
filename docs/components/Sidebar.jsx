import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <a href="https://github.com/zabaala/ui-core" className="btn btn-block btn-primary mb-6">
                    <i className="fe fe-github mr-2"></i>Browse source code
                </a>

                <div className="list-group list-group-transparent mb-0">
                    <a href="../docs/index.html" className="list-group-item list-group-item-action active"><span className="icon mr-3"><i className="fe fe-flag"></i></span>Introduction</a>
                </div>

                <div className="list-group list-group-transparent mb-0">
                    <a href="../docs/alerts.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-alert-triangle"></i></span>Alerts</a>
                    <a href="../docs/avatars.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-user"></i></span>Avatars</a>
                    <a href="../docs/buttons.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-plus-square"></i></span>Buttons</a>
                    <a href="../docs/colors.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-feather"></i></span>Colors</a>
                    <a href="../docs/cards.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-image"></i></span>Cards</a>
                    <a href="../docs/charts.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-pie-chart"></i></span>Charts</a>
                    <a href="../docs/form-components.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-check-square"></i></span>Form components</a>
                    <a href="../docs/tags.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-tag"></i></span>Tags</a>
                    <a href="../docs/typography.html" className="list-group-item list-group-item-action"><span className="icon mr-3"><i className="fe fe-type"></i></span>Typography</a>
                </div>
                <div className="d-none d-lg-block mt-6">
                    <a href="https://github.com/tabler/tabler/edit/dev/src/_docs/index.md" className="text-muted">Edit this page</a>
                </div>
            </div>
        );
    }
}

export default Sidebar;