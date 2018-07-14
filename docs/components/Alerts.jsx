import React from 'react';

class Alerts extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-0 mb-4">Alerts</h2>
                <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>
                <div className="alert alert-primary mt-5 mb-6">
                    <div><strong>Work in progress!</strong> More detailed documentation is coming soon.</div>
                </div>
                <h3 id="default-alerts">Default alerts</h3>
                <p>Add color contextual className.</p>
                <div className="example">
                    <div className="alert alert-primary" role="alert">
                        This is a primary alert—check it out!
                    </div>
                    <div className="alert alert-secondary" role="alert">
                        This is a secondary alert—check it out!
                    </div>
                    <div className="alert alert-success" role="alert">
                        This is a success alert—check it out!
                    </div>
                    <div className="alert alert-info" role="alert">
                        This is a info alert—check it out!
                    </div>
                    <div className="alert alert-warning" role="alert">
                        This is a warning alert—check it out!
                    </div>
                    <div className="alert alert-danger" role="alert">
                        This is a danger alert—check it out!
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-primary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  This is a primary alert—check it out!
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-secondary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  This is a secondary alert—check it out!
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-success"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  This is a success alert—check it out!
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-info"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  This is a info alert—check it out!
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-warning"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  This is a warning alert—check it out!
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-danger"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  This is a danger alert—check it out!
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="alert-with-icon">Alert with icon</h3>
                <p>Add <code className="highlighter-rouge">.alert-icon</code> className.</p>
                <div className="example">
                    <div className="alert alert-icon alert-primary" role="alert">
                        <i className="fe fe-bell mr-2" aria-hidden="true"></i> You have done 5 actions.
                    </div>
                    <div className="alert alert-icon alert-success" role="alert">
                        <i className="fe fe-check mr-2" aria-hidden="true"></i> The page has been added.
                    </div>
                    <div className="alert alert-icon alert-danger" role="alert">
                        <i className="fe fe-alert-triangle mr-2" aria-hidden="true"></i> The daily report has failed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-icon alert-primary"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"fe fe-bell mr-2"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/i&gt;</span> You have done 5 actions.
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-icon alert-success"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"fe fe-check mr-2"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/i&gt;</span> The page has been added.
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-icon alert-danger"</span> <span className="na">role=</span><span className="s">"alert"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;i</span> <span className="na">className=</span><span className="s">"fe fe-alert-triangle mr-2"</span> <span className="na">aria-hidden=</span><span className="s">"true"</span><span className="nt">&gt;&lt;/i&gt;</span> The daily report has failed. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="alert-dismissible">Alert dismissible</h3>
                <p>Add a dismiss button and the <code className="highlighter-rouge">.alert-dismissible</code> className, which adds extra padding to the right of the alert and positions the <code className="highlighter-rouge">.close</code> button. On the dismiss button, add the <code className="highlighter-rouge">data-dismiss="alert"</code> attribute, which triggers the JavaScript functionality. Be sure to use the <code className="highlighter-rouge">&lt;button&gt;</code> element with it for proper behavior across all devices.</p>
                <div className="example">
                    <div className="alert alert-warning alert-dismissible">
                        <button type="button" className="close" data-dismiss="alert"></button>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-warning alert-dismissible"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">className=</span><span className="s">"close"</span> <span className="na">data-dismiss=</span><span className="s">"alert"</span><span className="nt">&gt;&lt;/button&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="alert-with-avatar">Alert with avatar</h3>
                <div className="example">
                    <div className="alert alert-avatar alert-primary alert-dismissible">
                        <span className="avatar"></span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                    <div className="alert alert-avatar alert-success alert-dismissible">
                        <span className="avatar"></span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-avatar alert-primary alert-dismissible"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/4.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-avatar alert-success alert-dismissible"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">className=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/35.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="alert-with-buttons">Alert with buttons</h3>
                <div className="example">
                    <div className="alert alert-success alert-dismissible">
                        <button data-dismiss="alert" className="close"></button>
                        <h4>Some Message</h4>
                        <p>
                            Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
                            voluptate.
                        </p>
                        <div className="btn-list">
                            <button className="btn btn-success" type="button">Okay</button>
                            <button className="btn btn-secondary" type="button">No, thanks</button>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"alert alert-success alert-dismissible"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;button</span> <span className="na">data-dismiss=</span><span className="s">"alert"</span> <span className="na">className=</span><span className="s">"close"</span><span className="nt">&gt;&lt;/button&gt;</span>
  <span className="nt">&lt;h4&gt;</span>Some Message<span className="nt">&lt;/h4&gt;</span>
  <span className="nt">&lt;p&gt;</span>
    Lorem ipsum Minim ad pariatur eiusmod ea ut nulla aliqua est quis id dolore minim
    voluptate.
  <span className="nt">&lt;/p&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">className=</span><span className="s">"btn-list"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">className=</span><span className="s">"btn btn-success"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>Okay<span className="nt">&lt;/button&gt;</span>
    <span className="nt">&lt;button</span> <span className="na">className=</span><span className="s">"btn btn-secondary"</span> <span className="na">type=</span><span className="s">"button"</span><span className="nt">&gt;</span>No, thanks<span className="nt">&lt;/button&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
            </div>

        );
    }
}

export default Alerts;