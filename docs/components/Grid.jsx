import React from 'react';

class Grid extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-0 mb-4">Grid utilities</h2>
                <p>Quickly and easily create layouts with the basic 12-column.</p>
                <div className="alert alert-primary mt-5 mb-6">
                    <div><strong>Work in progress!</strong> More detailed documentation is coming soon.</div>
                </div>
                <h3 id="basic-layout">Basic layout</h3>
                <p>Create basic grid layout using columns. With <code className="highlighter-rouge">.row</code> and <code className="highlighter-rouge">.col</code>, we can easily manipulate the layout.</p>
                <div className="example">
                    <div className="row mb-3">
                        <div className="col-12">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-6">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-6">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-4">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-4">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-4">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-2">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-2">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-2">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-2">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-2">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-2">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-12"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-6"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-2"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-2"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-2"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-2"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-2"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-2"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="column-spacing">Column spacing</h3>
                <p>Row provides <code className="highlighter-rouge">.gutters-[size]</code> attribute to specify spacings between columns.</p>
                <div className="example">
                    <div className="row gutters-0 mb-3">
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                    <div className="row gutters-xs mb-3">
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                    <div className="row gutters-sm mb-3">
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                    <div className="row gutters-md mb-3">
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                    <div className="row gutters-lg mb-3">
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lighter rounded"></div>
                        </div>
                        <div className="col-3">
                            <div className="h-5 bg-gray-lightest rounded"></div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row gutters-0 mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row gutters-xs mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row gutters-sm mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row gutters-md mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row gutters-lg mb-3"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lighter rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-3"</span><span className="nt">&gt;&lt;div</span> <span className="na">class=</span><span className="s">"h-5 bg-gray-lightest rounded"</span><span className="nt">&gt;&lt;/div&gt;&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
            </div>
        );
    }
}

export default Grid;