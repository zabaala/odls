import React from 'react';

class Collors extends React.Component {
    render() {
        return (
            <div className="text-wrap p-lg-6">
              <h2 className="mt-0 mb-4">Colors</h2>
              <p>Convey meaning through color with a handful of color utility classes.</p>
              <h3 id="contextual-colors">Contextual colors</h3>
              <p>A background fill can be applied to a container using one of the <code className="highlighter-rouge">.bg-[color]</code> classes.</p>
              <div className="example">
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-primary rounded mr-4"></div>
                  <div>
                    <strong>Primary</strong><br/>
                    <code>.bg-primary</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-secondary rounded mr-4"></div>
                  <div>
                    <strong>Secondary</strong><br/>
                    <code>.bg-secondary</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-success rounded mr-4"></div>
                  <div>
                    <strong>Success</strong><br/>
                    <code>.bg-success</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-info rounded mr-4"></div>
                  <div>
                    <strong>Info</strong><br/>
                    <code>.bg-info</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-warning rounded mr-4"></div>
                  <div>
                    <strong>Warning</strong><br/>
                    <code>.bg-warning</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-danger rounded mr-4"></div>
                  <div>
                    <strong>Danger</strong><br/>
                    <code>.bg-danger</code>
                  </div>
                </div>
              </div>
              <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-primary rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Primary<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-primary<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-secondary rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Secondary<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-secondary<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-success rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Success<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-success<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-info rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Info<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-info<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-warning rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Warning<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-warning<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-danger rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Danger<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-danger<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
              </div>
              <h3 id="other-colors">Other colors</h3>
              <p>Instead of using contextual classes you can use ordinary color names.</p>
              <div className="example">
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-blue rounded mr-4"></div>
                      <div>
                        <strong>Blue</strong><br/>
                        <code>.bg-blue</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-azure rounded mr-4"></div>
                      <div>
                        <strong>Azure</strong><br/>
                        <code>.bg-azure</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-indigo rounded mr-4"></div>
                      <div>
                        <strong>Indigo</strong><br/>
                        <code>.bg-indigo</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-purple rounded mr-4"></div>
                      <div>
                        <strong>Purple</strong><br/>
                        <code>.bg-purple</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-pink rounded mr-4"></div>
                      <div>
                        <strong>Pink</strong><br/>
                        <code>.bg-pink</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-red rounded mr-4"></div>
                      <div>
                        <strong>Red</strong><br/>
                        <code>.bg-red</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-orange rounded mr-4"></div>
                      <div>
                        <strong>Orange</strong><br/>
                        <code>.bg-orange</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-yellow rounded mr-4"></div>
                      <div>
                        <strong>Yellow</strong><br/>
                        <code>.bg-yellow</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-lime rounded mr-4"></div>
                      <div>
                        <strong>Lime</strong><br/>
                        <code>.bg-lime</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-green rounded mr-4"></div>
                      <div>
                        <strong>Green</strong><br/>
                        <code>.bg-green</code>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-teal rounded mr-4"></div>
                      <div>
                        <strong>Teal</strong><br/>
                        <code>.bg-teal</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-cyan rounded mr-4"></div>
                      <div>
                        <strong>Cyan</strong><br/>
                        <code>.bg-cyan</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-gray rounded mr-4"></div>
                      <div>
                        <strong>Gray</strong><br/>
                        <code>.bg-gray</code>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mb-4">
                      <div className="w-7 h-7 bg-gray-dark rounded mr-4"></div>
                      <div>
                        <strong>Dark gray</strong><br/>
                        <code>.bg-gray-dark</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row"</span><span className="nt">&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-azure rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Azure<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-azure<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-indigo rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Indigo<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-indigo<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-purple rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Purple<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-purple<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-pink rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Pink<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-pink<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-red rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Red<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-red<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-orange rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Orange<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-orange<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-yellow rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Yellow<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-yellow<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-lime rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Lime<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-lime<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-green rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Green<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-green<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-4"</span><span className="nt">&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-teal rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Teal<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-teal<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-cyan rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Cyan<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-cyan<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-gray rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Gray<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-gray<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-gray-dark rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Dark gray<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-gray-dark<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
              </div>
              <h3 id="tinting-backgrounds">Tinting backgrounds</h3>
              <p>Translucent background fills to shade an element against a background. You can use one of few suffixes:<br/>
                <code className="highlighter-rouge">-darkest</code>, <code className="highlighter-rouge">-darker</code>, <code className="highlighter-rouge">-dark</code>, <code className="highlighter-rouge">-lightest</code>, <code className="highlighter-rouge">-lighter</code> or <code className="highlighter-rouge">-light</code>.</p>
              <div className="example">
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-blue-darkest rounded mr-4"></div>
                  <div>
                    <strong>Darkest blue</strong><br/>
                    <code>.bg-blue-darkest</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-blue-darker rounded mr-4"></div>
                  <div>
                    <strong>Darker blue</strong><br/>
                    <code>.bg-blue-darker</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-blue-dark rounded mr-4"></div>
                  <div>
                    <strong>Dark blue</strong><br/>
                    <code>.bg-blue-dark</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-blue rounded mr-4"></div>
                  <div>
                    <strong>Default blue</strong><br/>
                    <code>.bg-blue</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-blue-light rounded mr-4"></div>
                  <div>
                    <strong>Light blue</strong><br/>
                    <code>.bg-blue-light</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-blue-lighter rounded mr-4"></div>
                  <div>
                    <strong>Lighter blue</strong><br/>
                    <code>.bg-blue-lighter</code>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="w-7 h-7 bg-blue-lightest rounded mr-4"></div>
                  <div>
                    <strong>Lightest blue</strong><br/>
                    <code>.bg-blue-lightest</code>
                  </div>
                </div>
              </div>
              <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue-darkest rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Darkest blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue-darkest<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue-darker rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Darker blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue-darker<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue-dark rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Dark blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue-dark<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Default blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue-light rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Light blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue-light<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue-lighter rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Lighter blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue-lighter<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"d-flex align-items-center mb-4"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"w-7 h-7 bg-blue-lightest rounded mr-4"</span><span className="nt">&gt;&lt;/div&gt;</span>
  <span className="nt">&lt;div&gt;</span>
    <span className="nt">&lt;strong&gt;</span>Lightest blue<span className="nt">&lt;/strong&gt;&lt;br</span> <span className="nt">/&gt;</span>
    <span className="nt">&lt;code&gt;</span>.bg-blue-lightest<span className="nt">&lt;/code&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
              </div>
            </div>
        );
    }
}

export default Collors;