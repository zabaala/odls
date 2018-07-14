import React from 'react';

class Buttons extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-0 mb-4">Buttons</h2>
                <p>Use Bootstrap’s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</p>
                <h3 id="button-tag">Button tag</h3>
                <p>The <code className="highlighter-rouge">.btn</code> classes are designed to be used with the <code className="highlighter-rouge">&lt;button&gt;</code> element. However, you can also use these classes on <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;input&gt;</code> elements (though some browsers may apply a slightly different rendering).</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-primary" role="button">Link</a>
                        <button className="btn btn-primary">Button</button>
                        <input type="button" className="btn btn-primary" value="Input" />
                        <input type="submit" className="btn btn-primary" value="Submit" />
                        <input type="reset" className="btn btn-primary" value="Reset" />
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">role=</span><span className="s">"button"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;button</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">value=</span><span className="s">"Input"</span> <span className="nt">/&gt;</span>
<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"submit"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">value=</span><span className="s">"Submit"</span> <span className="nt">/&gt;</span>
<span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"reset"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span> <span className="na">value=</span><span className="s">"Reset"</span> <span className="nt">/&gt;</span></code></pre>
                </div>
                <h3 id="button-variations">Button variations</h3>
                <p>Use any of the available button classes to quickly create a styled button . We provide a variety of colors for you to express different emotions.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-primary">Primary</a>
                        <a href="#" className="btn btn-secondary">Secondary</a>
                        <a href="#" className="btn btn-success">Success</a>
                        <a href="#" className="btn btn-info">Info</a>
                        <a href="#" className="btn btn-warning">Warning</a>
                        <a href="#" className="btn btn-danger">Danger</a>
                        <a href="#" className="btn btn-link">Link</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-link"</span><span className="nt">&gt;</span>Link<span className="nt">&lt;/a&gt;</span></code></pre>
                </div>
                <h3 id="disabled-buttons">Disabled buttons</h3>
                <p>Make buttons look inactive by adding the disabled boolean attribute to any <code className="highlighter-rouge">.btn</code> element. <code className="highlighter-rouge">&lt;a&gt;</code>s don’t support the disabled attribute, so you must add the <code className="highlighter-rouge">.disabled</code> class to make it visually appear disabled.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-primary disabled">Primary</a>
                        <a href="#" className="btn btn-secondary disabled">Secondary</a>
                        <a href="#" className="btn btn-success disabled">Success</a>
                        <a href="#" className="btn btn-info disabled">Info</a>
                        <a href="#" className="btn btn-warning disabled">Warning</a>
                        <a href="#" className="btn btn-danger disabled">Danger</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary disabled"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary disabled"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-success disabled"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-info disabled"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-warning disabled"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-danger disabled"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/a&gt;</span></code></pre>
                </div>
                <h3 id="color-variations">Color variations</h3>
                <p>The classic button, in different colors.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-blue">Blue</a>
                        <a href="#" className="btn btn-azure">Azure</a>
                        <a href="#" className="btn btn-indigo">Indigo</a>
                        <a href="#" className="btn btn-purple">Purple</a>
                        <a href="#" className="btn btn-pink">Pink</a>
                        <a href="#" className="btn btn-red">Red</a>
                        <a href="#" className="btn btn-orange">Orange</a>
                        <a href="#" className="btn btn-yellow">Yellow</a>
                        <a href="#" className="btn btn-lime">Lime</a>
                        <a href="#" className="btn btn-green">Green</a>
                        <a href="#" className="btn btn-teal">Teal</a>
                        <a href="#" className="btn btn-cyan">Cyan</a>
                        <a href="#" className="btn btn-gray">Gray</a>
                        <a href="#" className="btn btn-gray-dark">Dark gray</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-blue"</span><span className="nt">&gt;</span>Blue<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-azure"</span><span className="nt">&gt;</span>Azure<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-indigo"</span><span className="nt">&gt;</span>Indigo<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-purple"</span><span className="nt">&gt;</span>Purple<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-pink"</span><span className="nt">&gt;</span>Pink<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-red"</span><span className="nt">&gt;</span>Red<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-orange"</span><span className="nt">&gt;</span>Orange<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-yellow"</span><span className="nt">&gt;</span>Yellow<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-lime"</span><span className="nt">&gt;</span>Lime<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-green"</span><span className="nt">&gt;</span>Green<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-teal"</span><span className="nt">&gt;</span>Teal<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-cyan"</span><span className="nt">&gt;</span>Cyan<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-gray"</span><span className="nt">&gt;</span>Gray<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-gray-dark"</span><span className="nt">&gt;</span>Dark gray<span className="nt">&lt;/a&gt;</span></code></pre>
                </div>
                <h3 id="square-buttons">Square buttons</h3>
                <p>Add <code className="highlighter-rouge">.btn-square</code> to button to remove border-radius.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-square btn-primary">Primary</a>
                        <a href="#" className="btn btn-square btn-secondary">Secondary</a>
                        <a href="#" className="btn btn-square btn-success">Success</a>
                        <a href="#" className="btn btn-square btn-info">Info</a>
                        <a href="#" className="btn btn-square btn-warning">Warning</a>
                        <a href="#" className="btn btn-square btn-danger">Danger</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-square btn-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-square btn-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-square btn-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-square btn-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-square btn-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-square btn-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/a&gt;</span></code></pre>
                </div>
                <h3 id="pill-buttons">Pill buttons</h3>
                <p>Add <code className="highlighter-rouge">.btn-pill</code> class to any button to make them more rounded.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-pill btn-primary">Primary</a>
                        <a href="#" className="btn btn-pill btn-secondary">Secondary</a>
                        <a href="#" className="btn btn-pill btn-success">Success</a>
                        <a href="#" className="btn btn-pill btn-info">Info</a>
                        <a href="#" className="btn btn-pill btn-warning">Warning</a>
                        <a href="#" className="btn btn-pill btn-danger">Danger</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-pill btn-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-pill btn-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-pill btn-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-pill btn-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-pill btn-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-pill btn-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/a&gt;</span></code></pre>
                </div>
                <h3 id="outline-buttons">Outline buttons</h3>
                <p>In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the <code className="highlighter-rouge">.btn-outline-*</code> ones to remove all background images and colors on any button.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-outline-primary">Primary</a>
                        <a href="#" className="btn btn-outline-secondary">Secondary</a>
                        <a href="#" className="btn btn-outline-success">Success</a>
                        <a href="#" className="btn btn-outline-info">Info</a>
                        <a href="#" className="btn btn-outline-warning">Warning</a>
                        <a href="#" className="btn btn-outline-danger">Danger</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span className="nt">&gt;</span>Primary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-outline-secondary"</span><span className="nt">&gt;</span>Secondary<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-outline-success"</span><span className="nt">&gt;</span>Success<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-outline-info"</span><span className="nt">&gt;</span>Info<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-outline-warning"</span><span className="nt">&gt;</span>Warning<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-outline-danger"</span><span className="nt">&gt;</span>Danger<span className="nt">&lt;/a&gt;</span></code></pre>
                </div>
                <h3 id="button-size">Button size</h3>
                <p>Add <code className="highlighter-rouge">.btn-lg</code> or <code className="highlighter-rouge">.btn-sm</code> for additional sizes.</p>
                <div className="example">
                    <div className="btn-list">
                        <button type="button" className="btn btn-primary btn-lg">Large button</button>
                        <button type="button" className="btn btn-secondary btn-lg">Large button</button>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-lg"</span><span className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-lg"</span><span className="nt">&gt;</span>Large button<span className="nt">&lt;/button&gt;</span></code></pre>
                </div>
                <div className="example">
                    <div className="btn-list">
                        <button type="button" className="btn btn-primary btn-sm">Small button</button>
                        <button type="button" className="btn btn-secondary btn-sm">Small button</button>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-sm"</span><span className="nt">&gt;</span>Small button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-sm"</span><span className="nt">&gt;</span>Small button<span className="nt">&lt;/button&gt;</span></code></pre>
                </div>
                <p>Create block level buttons—those that span the full width of a parent—by adding <code className="highlighter-rouge">.btn-block</code>.</p>
                <div className="example">
                    <button type="button" className="btn btn-primary btn-block">Block level button</button>
                    <button type="button" className="btn btn-secondary btn-block">Block level button</button>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-block"</span><span className="nt">&gt;</span>Block level button<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-block"</span><span className="nt">&gt;</span>Block level button<span className="nt">&lt;/button&gt;</span></code></pre>
                </div>
                <h3 id="button-with-icon">Button with icon</h3>
                <p>Basic buttons are traditional buttons with borders and background with an extra commponent like an icon. You can place it either on the left or the right which ever you want with different color opitons.</p>
                <div className="example">
                    <div className="btn-list">
                        <button type="button" className="btn btn-dark"><i className="fe fe-upload mr-2"></i>Upload</button>
                        <button type="button" className="btn btn-warning"><i className="fe fe-heart mr-2"></i>I like</button>
                        <button type="button" className="btn btn-success"><i className="fe fe-check mr-2"></i>I agree</button>
                        <button type="button" className="btn btn-outline-primary"><i className="fe fe-plus mr-2"></i>More</button>
                        <button type="button" className="btn btn-danger"><i className="fe fe-link mr-2"></i>Link</button>
                        <button type="button" className="btn btn-info"><i className="fe fe-message-circle mr-2"></i>Comment</button>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-dark"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-upload mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Upload<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-warning"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-heart mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>I like<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-success"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-check mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>I agree<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-outline-primary"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-plus mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>More<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-danger"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-link mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Link<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-info"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-message-circle mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Comment<span className="nt">&lt;/button&gt;</span></code></pre>
                </div>
                <h3 id="social-buttons">Social buttons</h3>
                <div className="example">
                    <div className="btn-list">
                        <button type="button" className="btn btn-facebook"><i className="fa fa-facebook mr-2"></i>Facebook</button>
                        <button type="button" className="btn btn-twitter"><i className="fa fa-twitter mr-2"></i>Twitter</button>
                        <button type="button" className="btn btn-google"><i className="fa fa-google mr-2"></i>Google</button>
                        <button type="button" className="btn btn-youtube"><i className="fa fa-youtube mr-2"></i>Youtube</button>
                        <button type="button" className="btn btn-vimeo"><i className="fa fa-vimeo mr-2"></i>Vimeo</button>
                        <button type="button" className="btn btn-dribbble"><i className="fa fa-dribbble mr-2"></i>Dribble</button>
                        <button type="button" className="btn btn-github"><i className="fa fa-github mr-2"></i>Github</button>
                        <button type="button" className="btn btn-instagram"><i className="fa fa-instagram mr-2"></i>Instagram</button>
                        <button type="button" className="btn btn-pinterest"><i className="fa fa-pinterest mr-2"></i>Pinterest</button>
                        <button type="button" className="btn btn-vk"><i className="fa fa-vk mr-2"></i>VKontakte</button>
                        <button type="button" className="btn btn-rss"><i className="fa fa-rss mr-2"></i>RSS</button>
                        <button type="button" className="btn btn-flickr"><i className="fa fa-flickr mr-2"></i>Flickr</button>
                        <button type="button" className="btn btn-bitbucket"><i className="fa fa-bitbucket mr-2"></i>Bitbucket</button>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-facebook"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-facebook mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Facebook<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-twitter"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-twitter mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Twitter<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-google"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-google mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Google<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-youtube"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-youtube mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Youtube<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-vimeo"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-vimeo mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Vimeo<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-dribbble"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-dribbble mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Dribble<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-github"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-github mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Github<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-instagram"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-instagram mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Instagram<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-pinterest"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-pinterest mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Pinterest<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-vk"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-vk mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>VKontakte<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-rss"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-rss mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>RSS<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-flickr"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-flickr mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Flickr<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-bitbucket"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-bitbucket mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Bitbucket<span className="nt">&lt;/button&gt;</span></code></pre>
                </div>
                <p>You can use only icons.</p>
                <div className="example">
                    <div className="btn-list">
                        <button type="button" className="btn btn-icon btn-facebook"><i className="fa fa-facebook"></i></button>
                        <button type="button" className="btn btn-icon btn-twitter"><i className="fa fa-twitter"></i></button>
                        <button type="button" className="btn btn-icon btn-google"><i className="fa fa-google"></i></button>
                        <button type="button" className="btn btn-icon btn-youtube"><i className="fa fa-youtube"></i></button>
                        <button type="button" className="btn btn-icon btn-vimeo"><i className="fa fa-vimeo"></i></button>
                        <button type="button" className="btn btn-icon btn-dribbble"><i className="fa fa-dribbble"></i></button>
                        <button type="button" className="btn btn-icon btn-github"><i className="fa fa-github"></i></button>
                        <button type="button" className="btn btn-icon btn-instagram"><i className="fa fa-instagram"></i></button>
                        <button type="button" className="btn btn-icon btn-pinterest"><i className="fa fa-pinterest"></i></button>
                        <button type="button" className="btn btn-icon btn-vk"><i className="fa fa-vk"></i></button>
                        <button type="button" className="btn btn-icon btn-rss"><i className="fa fa-rss"></i></button>
                        <button type="button" className="btn btn-icon btn-flickr"><i className="fa fa-flickr"></i></button>
                        <button type="button" className="btn btn-icon btn-bitbucket"><i className="fa fa-bitbucket"></i></button>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-facebook"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-facebook"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-twitter"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-twitter"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-google"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-google"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-youtube"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-youtube"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-vimeo"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-vimeo"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-dribbble"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-dribbble"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-github"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-github"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-instagram"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-instagram"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-pinterest"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-pinterest"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-vk"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-vk"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-rss"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-rss"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-flickr"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-flickr"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-bitbucket"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fa fa-bitbucket"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span></code></pre>
                </div>
                <h3 id="icon-buttons">Icon buttons</h3>
                <p>Icon only button. Add <code className="highlighter-rouge">.btn-icon</code> class to remove unnecessary padding from button.</p>
                <div className="example">
                    <div className="btn-list">
                        <button type="button" className="btn btn-icon btn-primary"><i className="fe fe-activity"></i></button>
                        <button type="button" className="btn btn-icon btn-primary btn-github"><i className="fe fe-github"></i></button>
                        <button type="button" className="btn btn-icon btn-primary btn-success"><i className="fe fe-bell"></i></button>
                        <button type="button" className="btn btn-icon btn-primary btn-warning"><i className="fe fe-star"></i></button>
                        <button type="button" className="btn btn-icon btn-primary btn-danger"><i className="fe fe-trash"></i></button>
                        <button type="button" className="btn btn-icon btn-primary btn-purple"><i className="fe fe-bar-chart"></i></button>
                        <button type="button" className="btn btn-icon btn-primary btn-secondary"><i className="fe fe-git-merge"></i></button>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-primary"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-activity"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-primary btn-github"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-github"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-primary btn-success"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-bell"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-primary btn-warning"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-star"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-primary btn-danger"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-trash"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-primary btn-purple"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-bar-chart"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-icon btn-primary btn-secondary"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-git-merge"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span></code></pre>
                </div>
                <h3 id="button-dropdown">Button dropdown</h3>
                <p>Wrap the dropdown’s toggle (your button or link) and the dropdown menu within <code className="highlighter-rouge">.dropdown</code>, or another element that declares <code className="highlighter-rouge">position: relative;</code>. Dropdowns can be triggered from <code className="highlighter-rouge">&lt;a&gt;</code> or <code className="highlighter-rouge">&lt;button&gt;</code> elements to better fit your potential needs.</p>
                <div className="example">
                    <div className="btn-list">
                        <div className="dropdown">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                <i className="fe fe-calendar"></i>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                <i className="fe fe-calendar mr-2"></i>Show calendar
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
                                Show calendar
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                                <a className="dropdown-item" href="javascript:void(0)">Dropdown link</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>
     <span className="nt">&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-calendar"</span><span className="nt">&gt;&lt;/i&gt;</span>
  <span className="nt">&lt;/button&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>
     <span className="nt">&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-calendar mr-2"</span><span className="nt">&gt;&lt;/i&gt;</span>Show calendar
  <span className="nt">&lt;/button&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary dropdown-toggle"</span> <span className="na">data-toggle=</span><span className="s">"dropdown"</span><span className="nt">&gt;</span>
     Show calendar
  <span className="nt">&lt;/button&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"dropdown-menu"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span className="nt">&lt;/a&gt;</span>
    <span className="nt">&lt;a</span> <span className="na">class=</span><span className="s">"dropdown-item"</span> <span className="na">href=</span><span className="s">"#"</span><span className="nt">&gt;</span>Dropdown link<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="loading-button">Loading button</h3>
                <p>Add <code className="highlighter-rouge">.btn-loading</code> to use a loading state on a button. The width of the button depends on the length of the text inside.</p>
                <p>Since the loading spinner is implemented using the <code className="highlighter-rouge">:after</code> pseudo-element, it is not supported by the <code className="highlighter-rouge">&lt;input type="submit"&gt;</code> element.</p>
                <div className="example">
                    <div className="btn-list">
                        <button type="button" className="btn btn-primary btn-loading">Button text</button>
                        <button type="button" className="btn btn-success btn-loading btn-icon"><i className="fe fe-check"></i></button>
                        <button type="button" className="btn btn-warning btn-loading btn-sm">Button text</button>
                        <button type="button" className="btn btn-danger btn-loading btn-lg">Button text</button>
                        <button type="button" className="btn btn-secondary btn-loading btn-block">Button text</button>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-primary btn-loading"</span><span className="nt">&gt;</span>Button text<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-success btn-loading btn-icon"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-check"</span><span className="nt">&gt;&lt;/i&gt;&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-warning btn-loading btn-sm"</span><span className="nt">&gt;</span>Button text<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-danger btn-loading btn-lg"</span><span className="nt">&gt;</span>Button text<span className="nt">&lt;/button&gt;</span>
<span className="nt">&lt;button</span> <span className="na">type=</span><span className="s">"button"</span> <span className="na">class=</span><span className="s">"btn btn-secondary btn-loading btn-block"</span><span className="nt">&gt;</span>Button text<span className="nt">&lt;/button&gt;</span></code></pre>
                </div>
                <h3 id="list-of-buttons">List of buttons</h3>
                <p>You can now create a list of buttons with the <code className="highlighter-rouge">.btn-list</code> container.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-success">Save changes</a>
                        <a href="#" className="btn btn-secondary">Save and continue</a>
                        <a href="#" className="btn btn-danger">Cancel</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-list"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-success"</span><span className="nt">&gt;</span>Save changes<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Save and continue<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-danger"</span><span className="nt">&gt;</span>Cancel<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <p>If the list is very long, it will automatically wrap on multiple lines, while keeping all buttons evenly spaced.</p>
                <div className="example">
                    <div className="btn-list">
                        <a href="#" className="btn btn-secondary">One</a>
                        <a href="#" className="btn btn-secondary">Two</a>
                        <a href="#" className="btn btn-secondary">Three</a>
                        <a href="#" className="btn btn-secondary">Four</a>
                        <a href="#" className="btn btn-secondary">Five</a>
                        <a href="#" className="btn btn-secondary">Six</a>
                        <a href="#" className="btn btn-secondary">Seven</a>
                        <a href="#" className="btn btn-secondary">Eight</a>
                        <a href="#" className="btn btn-secondary">Nine</a>
                        <a href="#" className="btn btn-secondary">Ten</a>
                        <a href="#" className="btn btn-secondary">Eleven</a>
                        <a href="#" className="btn btn-secondary">Twelve</a>
                        <a href="#" className="btn btn-secondary">Thirteen</a>
                        <a href="#" className="btn btn-secondary">Fourteen</a>
                        <a href="#" className="btn btn-secondary">Fifteen</a>
                        <a href="#" className="btn btn-secondary">Sixteen</a>
                        <a href="#" className="btn btn-secondary">Seventeen</a>
                        <a href="#" className="btn btn-secondary">Eighteen</a>
                        <a href="#" className="btn btn-secondary">Nineteen</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-list"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>One<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Two<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Three<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Four<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Five<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Six<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Seven<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Eight<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Nine<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Ten<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Eleven<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Twelve<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Thirteen<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Fourteen<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Fifteen<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Sixteen<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Seventeen<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Eighteen<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Nineteen<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <p>Use the <code className="highlighter-rouge">.text-center</code> or the <code className="highlighter-rouge">.text-right</code> modifiers to alter the alignment.</p>
                <div className="example">
                    <div className="btn-list text-center">
                        <a href="#" className="btn btn-primary">Save changes</a>
                        <a href="#" className="btn btn-secondary">Save and continue</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-list text-center"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Save changes<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Save and continue<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <div className="example">
                    <div className="btn-list text-right">
                        <a href="#" className="btn btn-primary">Save changes</a>
                        <a href="#" className="btn btn-secondary">Save and continue</a>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"btn-list text-right"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-primary"</span><span className="nt">&gt;</span>Save changes<span className="nt">&lt;/a&gt;</span>
  <span className="nt">&lt;a</span> <span className="na">href=</span><span className="s">"#"</span> <span className="na">class=</span><span className="s">"btn btn-secondary"</span><span className="nt">&gt;</span>Save and continue<span className="nt">&lt;/a&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
            </div>

        );
    }
}

export default Buttons;