import React from 'react';

class Cards extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-0 mb-4">Cards</h2>
                <p>A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.</p>
                <p>The <code className="highlighter-rouge">.card</code> element is simply a container with a shadow, a border, a radius, and some padding. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components.</p>
                <h3 id="default-card">Default card</h3>
                <div className="example example-bg">
                    <div className="example-column example-column-1">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Card title</h3>
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h3</span> <span className="na">class=</span><span className="s">"card-title"</span><span className="nt">&gt;</span>Card title<span className="nt">&lt;/h3&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="advanced-card">Advanced card</h3>
                <div className="example example-bg">
                    <div className="example-column example-column-1">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Card title</h3>
                                <div className="card-options">
                                    <a href="#" className="btn btn-primary btn-sm">Action 1</a>
                                    <a href="#" className="btn btn-secondary btn-sm ml-2">Action 2</a>
                                </div>
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                            </div>
                            <div className="card-footer">
                                This is standard card footer
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h3</span> <span className="na">class=</span><span className="s">"card-title"</span><span className="nt">&gt;</span>Card title<span className="nt">&lt;/h3&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-options"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-sm"</span><span className="nt">&gt;</span>Action 1<span className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-sm ml-2"</span><span className="nt">&gt;</span>Action 2<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-footer"</span><span className="nt">&gt;</span>
    This is standard card footer
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="blog-post-card">Blog post card</h3>
                <p>The best way to make your post eye-catching is adding an image to it. To do so, just add the image with the <code className="highlighter-rouge">.card-img-top</code> class. We’ve added the <code className="highlighter-rouge">.d-flex .flex-column</code> classes to the <code className="highlighter-rouge">.card-body</code> to have the author details be on the bottom of the card.</p>
                <div className="example example-bg">
                    <div className="example-column example-column-1">
                        <div className="card">
                            <a href="#"><img className="card-img-top" src="https://tabler.github.io/tabler/demo/photos/david-klaasen-54203-500.jpg" alt="And this isn't my nose. This is a false one." /></a>
                            <div className="card-body d-flex flex-column">
                                <h4><a href="#">And this isn't my nose. This is a false one.</a></h4>
                                <div className="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...</div>
                                <div className="d-flex align-items-center pt-5 mt-auto">
                                    <div className="avatar avatar-md mr-3" style={{backgroundImage: 'url(../demo/faces/female/18.jpg)'}}></div>
                                    <div>
                                        <a href="../profile.html" className="text-default">Rose Bradley</a>
                                        <small className="d-block text-muted">3 days ago</small>
                                    </div>
                                    <div className="ml-auto text-muted">
                                        <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;&lt;img</span> <span className="na">class=</span><span className="s">"card-img-top"</span> <span className="na">src=</span><span className="s">"./demo/photos/david-klaasen-54203-500.jpg"</span> <span className="na">alt=</span><span className="s">"And this isn&amp;#39;t my nose. This is a false one."</span><span className="nt">&gt;&lt;/a&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body d-flex flex-column"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h4&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>And this isn't my nose. This is a false one.<span className="nt">&lt;/a&gt;&lt;/h4&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...<span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center pt-5 mt-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"avatar avatar-md mr-3"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/18.jpg)"</span><span className="nt">&gt;&lt;/div&gt;</span>
      <span className="nt">&lt;div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"./profile.html"</span> <span className="na">class=</span><span className="s">"text-default"</span><span className="nt">&gt;</span>Rose Bradley<span className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"d-block text-muted"</span><span className="nt">&gt;</span>3 days ago<span className="nt">&lt;/small&gt;</span>
      <span className="nt">&lt;/div&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"ml-auto text-muted"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"icon d-none d-md-inline-block ml-3"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-heart mr-1"</span><span className="nt">&gt;&lt;/i&gt;&lt;/a&gt;</span>
      <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="row-deck">Row deck</h3>
                <p>If you want to create a couple of posts next to each other, add the <code className="highlighter-rouge">.row-deck</code> class to <code className="highlighter-rouge">.row</code>—then they will all have the same height.</p>
                <div className="example example-bg">
                    <div className="example-column example-column-2">
                        <div className="row row-cards row-deck">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">Short content</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body">Short content</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row row-cards row-deck"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>Short content<span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>Extra long content of card. Lorem ipsum dolor sit amet, consetetur sadipscing elitr<span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
            <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>Short content<span className="nt">&lt;/div&gt;</span>
        <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="post-card-with-aside-image">Post card with aside image</h3>
                <p>You can also add the image on the left side of the card. All you need do to is: add the <code className="highlighter-rouge">.card-aside</code> class to the element with the <code className="highlighter-rouge">.card</code> class. Then add the image in the <code className="highlighter-rouge">.card-aside-column</code> element. No worries, tabler will automatically center it and scale to right size:</p>
                <div className="example example-bg">
                    <div className="example-column example-column-2">
                        <div className="card card-aside">
                            <a href="#" className="card-aside-column" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/photos/david-klaasen-54203-500.jpg)'}}></a>
                            <div className="card-body d-flex flex-column">
                                <h4><a href="#">And this isn't my nose. This is a false one.</a></h4>
                                <div className="text-muted">Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...</div>
                                <div className="d-flex align-items-center pt-5 mt-auto">
                                    <div className="avatar avatar-md mr-3" style={{backgroundImage: 'url(../demo/faces/female/18.jpg)'}}></div>
                                    <div>
                                        <a href="../profile.html" className="text-default">Rose Bradley</a>
                                        <small className="d-block text-muted">3 days ago</small>
                                    </div>
                                    <div className="ml-auto text-red">
                                        <a href="javascript:void(0)" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card card-aside"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"card-aside-column"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/photos/david-klaasen-54203-500.jpg)"</span><span className="nt">&gt;&lt;/a&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body d-flex flex-column"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h4&gt;&lt;a</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>And this isn't my nose. This is a false one.<span className="nt">&lt;/a&gt;&lt;/h4&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"text-muted"</span><span className="nt">&gt;</span>Look, my liege! The Knights Who Say Ni demand a sacrifice! …Are you suggesting that coconuts migr...<span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center pt-5 mt-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"avatar avatar-md mr-3"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/18.jpg)"</span><span className="nt">&gt;&lt;/div&gt;</span>
      <span className="nt">&lt;div&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"./profile.html"</span> <span className="na">class=</span><span className="s">"text-default"</span><span className="nt">&gt;</span>Rose Bradley<span className="nt">&lt;/a&gt;</span>
        <span className="nt">&lt;small</span> <span className="na">class=</span><span className="s">"d-block text-muted"</span><span className="nt">&gt;</span>3 days ago<span className="nt">&lt;/small&gt;</span>
      <span className="nt">&lt;/div&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"ml-auto text-red"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"icon d-none d-md-inline-block ml-3"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-heart mr-1"</span><span className="nt">&gt;&lt;/i&gt;&lt;/a&gt;</span>
      <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="color-variations">Color variations</h3>
                <div className="example example-bg">
                    <div className="example-column example-column-2">
                        <div className="row row-cards row-deck">
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-status bg-purple"></div>
                                    <div className="card-header">
                                        <h3 className="card-title">Card status</h3>
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card">
                                    <div className="card-status card-status-left bg-blue"></div>
                                    <div className="card-header">
                                        <h3 className="card-title">Card status on left side</h3>
                                    </div>
                                    <div className="card-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row row-cards row-deck"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-6"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-status bg-purple"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h3</span> <span className="na">class=</span><span className="s">"card-title"</span><span className="nt">&gt;</span>Card status<span className="nt">&lt;/h3&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-md-6"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-status card-status-left bg-blue"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h3</span> <span className="na">class=</span><span className="s">"card-title"</span><span className="nt">&gt;</span>Card status on left side<span className="nt">&lt;/h3&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="card-with-switch">Card with switch</h3>
                <div className="example example-bg">
                    <div className="example-column example-column-1">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Card with switch</h3>
                                <div className="card-options">
                                    <label className="custom-switch m-0">
                                        <input type="checkbox" value="1" className="custom-switch-input" checked="" />
                                            <span className="custom-switch-indicator"></span>
                                    </label>
                                </div>
                            </div>
                            <div className="card-body">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h3</span> <span className="na">class=</span><span className="s">"card-title"</span><span className="nt">&gt;</span>Card with switch<span className="nt">&lt;/h3&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-options"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"custom-switch m-0"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"1"</span> <span className="na">class=</span><span className="s">"custom-switch-input"</span> <span className="na">checked</span><span className="nt">&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"custom-switch-indicator"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="card-with-loader">Card with loader</h3>
                <div className="example example-bg">
                    <div className="example-column example-column-1">
                        <div className="card">
                            <div className="card-header">
                                <h3 className="card-title">Card with loader</h3>
                            </div>
                            <div className="card-body">
                                <div className="dimmer active">
                                    <div className="loader"></div>
                                    <div className="dimmer-content">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-header"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;h3</span> <span className="na">class=</span><span className="s">"card-title"</span><span className="nt">&gt;</span>Card with loader<span className="nt">&lt;/h3&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"card-body"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dimmer active"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"loader"</span><span className="nt">&gt;&lt;/div&gt;</span>
      <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dimmer-content"</span><span className="nt">&gt;</span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem. A consequuntur, deserunt eaque error nulla temporibus!
      <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
            </div>
        );
    }
}

export default Cards;