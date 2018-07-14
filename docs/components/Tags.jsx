import React from 'react';

class Tags extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-0 mb-4">Tags</h2>
                <p>Small tag labels to insert anywhere</p>
                <h3 id="default-tag">Default tag</h3>
                <div className="example">
                    <div className="tags">
                        <span className="tag">First tag</span>
                        <span className="tag">Second tag</span>
                        <span className="tag">Third tag</span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>First tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Second tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Third tag<span className="nt">&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="link-tag">Link tag</h3>
                <div className="example">
                    <div className="tags">
                        <a href="#" className="tag">First tag</a>
                        <a href="#" className="tag">Second tag</a>
                        <a href="#" className="tag">Third tag</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>First tag<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Second tag<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Third tag<span className="nt">&lt;/a&gt;</span></code></pre>
                </div>
                <h3 id="rounded-tag">Rounded tag</h3>
                <div className="example">
                    <div className="tags">
                        <span className="tag tag-rounded">First tag</span>
                        <span className="tag tag-rounded">Second tag</span>
                        <span className="tag tag-rounded">Third tag</span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-rounded"</span><span className="nt">&gt;</span>First tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-rounded"</span><span className="nt">&gt;</span>Second tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-rounded"</span><span className="nt">&gt;</span>Third tag<span className="nt">&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="color-tag">Color tag</h3>
                <div className="example">
                    <div className="tags">
                        <span className="tag tag-blue">Blue tag</span>
                        <span className="tag tag-azure">Azure tag</span>
                        <span className="tag tag-indigo">Indigo tag</span>
                        <span className="tag tag-purple">Purple tag</span>
                        <span className="tag tag-pink">Pink tag</span>
                        <span className="tag tag-red">Red tag</span>
                        <span className="tag tag-orange">Orange tag</span>
                        <span className="tag tag-yellow">Yellow tag</span>
                        <span className="tag tag-lime">Lime tag</span>
                        <span className="tag tag-green">Green tag</span>
                        <span className="tag tag-teal">Teal tag</span>
                        <span className="tag tag-cyan">Cyan tag</span>
                        <span className="tag tag-gray">Gray tag</span>
                        <span className="tag tag-gray-dark">Dark gray tag</span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-blue"</span><span className="nt">&gt;</span>Blue tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-azure"</span><span className="nt">&gt;</span>Azure tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-indigo"</span><span className="nt">&gt;</span>Indigo tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-purple"</span><span className="nt">&gt;</span>Purple tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-pink"</span><span className="nt">&gt;</span>Pink tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-red"</span><span className="nt">&gt;</span>Red tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-orange"</span><span className="nt">&gt;</span>Orange tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-yellow"</span><span className="nt">&gt;</span>Yellow tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-lime"</span><span className="nt">&gt;</span>Lime tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-green"</span><span className="nt">&gt;</span>Green tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-teal"</span><span className="nt">&gt;</span>Teal tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-cyan"</span><span className="nt">&gt;</span>Cyan tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-gray"</span><span className="nt">&gt;</span>Gray tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-gray-dark"</span><span className="nt">&gt;</span>Dark gray tag<span className="nt">&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="avatar-tag">Avatar tag</h3>
                <div className="example">
                    <div className="tags">
                          <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/16.jpg)'}}></span>
                            Victoria
                          </span>
                        <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/41.jpg)'}}></span>
                            Nathan
                          </span>
                        <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/1.jpg)'}}></span>
                            Alice
                          </span>
                        <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/18.jpg)'}}></span>
                            Rose
                          </span>
                        <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/16.jpg)'}}></span>
                            Peter
                          </span>
                        <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/26.jpg)'}}></span>
                            Wayne
                          </span>
                        <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/7.jpg)'}}></span>
                            Michelle
                          </span>
                        <span className="tag">
                            <span className="tag-avatar avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/17.jpg)'}}></span>
                            Debra
                          </span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/16.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Victoria
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/41.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Nathan
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/1.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Alice
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/18.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Rose
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/16.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Peter
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/26.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Wayne
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/7.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Michelle
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-avatar avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/17.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  Debra
<span className="nt">&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="list-of-tags">List of tags</h3>
                <p>You can create a list of tags with the <code className="highlighter-rouge">.tags</code> container.</p>
                <div className="example">
                    <div className="tags">
                        <span className="tag">First tag</span>
                        <span className="tag">Second tag</span>
                        <span className="tag">Third tag</span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tags"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>First tag<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Second tag<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Third tag<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <p>If the list is very long, it will automatically wrap on multiple lines, while keeping all tags evenly spaced.</p>
                <div className="example">
                    <div className="tags">
                        <span className="tag">One</span>
                        <span className="tag">Two</span>
                        <span className="tag">Three</span>
                        <span className="tag">Four</span>
                        <span className="tag">Five</span>
                        <span className="tag">Six</span>
                        <span className="tag">Seven</span>
                        <span className="tag">Eight</span>
                        <span className="tag">Nine</span>
                        <span className="tag">Ten</span>
                        <span className="tag">Eleven</span>
                        <span className="tag">Twelve</span>
                        <span className="tag">Thirteen</span>
                        <span className="tag">Fourteen</span>
                        <span className="tag">Fifteen</span>
                        <span className="tag">Sixteen</span>
                        <span className="tag">Seventeen</span>
                        <span className="tag">Eighteen</span>
                        <span className="tag">Nineteen</span>
                        <span className="tag">Twenty</span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tags"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>One<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Two<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Three<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Four<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Five<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Six<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Seven<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Eight<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Nine<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Ten<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Eleven<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Twelve<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Thirteen<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Fourteen<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Fifteen<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Sixteen<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Seventeen<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Eighteen<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Nineteen<span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>Twenty<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="tag-remove">Tag remove</h3>
                <div className="example">
                    <div className="tags">
                          <span className="tag">
                            One
                            <a href="javascript:void(0)" className="tag-addon"><i className="fe fe-x"></i></a>
                          </span>
                        <span className="tag">
                            Two
                            <a href="javascript:void(0)" className="tag-addon"><i className="fe fe-x"></i></a>
                          </span>
                        <span className="tag">
                            Three
                            <a href="javascript:void(0)" className="tag-addon"><i className="fe fe-x"></i></a>
                          </span>
                        <span className="tag">
                            Four
                            <a href="javascript:void(0)" className="tag-addon"><i className="fe fe-x"></i></a>
                          </span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tags"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
    One
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag-addon"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-x"</span><span className="nt">&gt;&lt;/i&gt;&lt;/a&gt;</span>
  <span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
    Two
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag-addon"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-x"</span><span className="nt">&gt;&lt;/i&gt;&lt;/a&gt;</span>
  <span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
    Three
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag-addon"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-x"</span><span className="nt">&gt;&lt;/i&gt;&lt;/a&gt;</span>
  <span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
    Four
    <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag-addon"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-x"</span><span className="nt">&gt;&lt;/i&gt;&lt;/a&gt;</span>
  <span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="tag-addons">Tag addons</h3>
                <div className="example">
                    <div className="tags">
                        <div className="tag">
                            npm
                            <a href="#" className="tag-addon"><i className="fe fe-x"></i></a>
                        </div>
                        <div className="tag tag-danger">
                            npm
                            <span className="tag-addon"><i className="fe fe-activity"></i></span>
                        </div>
                        <div className="tag">
                            bundle
                            <span className="tag-addon tag-success">passing</span>
                        </div>
                        <span className="tag tag-dark">
                            CSS gzip size
                            <span className="tag-addon tag-warning">20.9 kB</span>
                          </span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  npm
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"tag-addon"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-x"</span><span className="nt">&gt;&lt;/i&gt;&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tag tag-danger"</span><span className="nt">&gt;</span>
  npm
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-addon"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-activity"</span><span className="nt">&gt;&lt;/i&gt;&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"tag"</span><span className="nt">&gt;</span>
  bundle
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-addon tag-success"</span><span className="nt">&gt;</span>passing<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag tag-dark"</span><span className="nt">&gt;</span>
  CSS gzip size
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"tag-addon tag-warning"</span><span className="nt">&gt;</span>20.9 kB<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/span&gt;</span></code></pre>
                </div>
            </div>
        );
    }
}

export default Tags;