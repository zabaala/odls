import React from 'react';

class FormComponents extends React.Component {
    render() {
        return (
            <div className="text-wrap p-lg-6">
                <h2 className="mt-0 mb-4">Form components</h2>
                <h3 id="color-input">Color input</h3>
                <div className="example">
                    <div className="form-group">
                        <label className="form-label">Color Input</label>
                        <div className="row gutters-xs">
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="azure" className="colorinput-input" />
                                    <span className="colorinput-color bg-azure"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="indigo" className="colorinput-input" checked="" />
                                    <span className="colorinput-color bg-indigo"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="purple" className="colorinput-input" />
                                    <span className="colorinput-color bg-purple"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="pink" className="colorinput-input" />
                                    <span className="colorinput-color bg-pink"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="red" className="colorinput-input" />
                                    <span className="colorinput-color bg-red"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="orange" className="colorinput-input" />
                                    <span className="colorinput-color bg-orange"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="yellow" className="colorinput-input" />
                                    <span className="colorinput-color bg-yellow"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="lime" className="colorinput-input" />
                                    <span className="colorinput-color bg-lime"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="green" className="colorinput-input" />
                                    <span className="colorinput-color bg-green"></span>
                                </label>
                            </div>
                            <div className="col-auto">
                                <label className="colorinput">
                                    <input name="color" type="checkbox" value="teal" className="colorinput-input" />
                                    <span className="colorinput-color bg-teal"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Color Input<span className="nt">&lt;/label&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row gutters-xs"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"azure"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-azure"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"indigo"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span>  <span className="na">checked</span><span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-indigo"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"purple"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-purple"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"pink"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-pink"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"red"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-red"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"orange"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-orange"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"yellow"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-yellow"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"lime"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-lime"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"green"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-green"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-auto"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"colorinput"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"color"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"teal"</span> <span className="na">class=</span><span className="s">"colorinput-input"</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"colorinput-color bg-teal"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="image-input">Image input</h3>
                <div className="example">
                    <div className="form-group">
                        <label className="form-label">Image Check</label>
                        <div className="row gutters-sm">
                            <div className="col-sm-2">
                                <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" value="1" className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="https://tabler.github.io/tabler/demo/photos/nathan-anderson-316188-500.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" value="2" className="imagecheck-input" checked="" />
                                    <figure className="imagecheck-figure">
                                        <img src="https://tabler.github.io/tabler/demo/photos/nathan-dumlao-287713-500.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" value="3" className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="https://tabler.github.io/tabler/demo/photos/nicolas-picard-208276-500.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" value="4" className="imagecheck-input" checked="" />
                                    <figure className="imagecheck-figure">
                                        <img src="https://tabler.github.io/tabler/demo/photos/oskar-vertetics-53043-500.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" value="5" className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="https://tabler.github.io/tabler/demo/photos/priscilla-du-preez-181896-500.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                </label>
                            </div>
                            <div className="col-sm-2">
                                <label className="imagecheck mb-4">
                                    <input name="imagecheck" type="checkbox" value="6" className="imagecheck-input" />
                                    <figure className="imagecheck-figure">
                                        <img src="https://tabler.github.io/tabler/demo/photos/ricardo-gomez-angel-262359-500.jpg" alt="}" className="imagecheck-image" />
                                    </figure>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Image Check<span className="nt">&lt;/label&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"row gutters-sm"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-2"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"imagecheck mb-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"imagecheck"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"1"</span> <span className="na">class=</span><span className="s">"imagecheck-input"</span>  <span className="nt">/&gt;</span>
        <span className="nt">&lt;figure</span> <span className="na">class=</span><span className="s">"imagecheck-figure"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"./demo/photos/nathan-anderson-316188-500.jpg"</span> <span className="na">alt=</span><span className="s">"}"</span> <span className="na">class=</span><span className="s">"imagecheck-image"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/figure&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-2"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"imagecheck mb-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"imagecheck"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"2"</span> <span className="na">class=</span><span className="s">"imagecheck-input"</span>  <span className="na">checked</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;figure</span> <span className="na">class=</span><span className="s">"imagecheck-figure"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"./demo/photos/nathan-dumlao-287713-500.jpg"</span> <span className="na">alt=</span><span className="s">"}"</span> <span className="na">class=</span><span className="s">"imagecheck-image"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/figure&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-2"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"imagecheck mb-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"imagecheck"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"3"</span> <span className="na">class=</span><span className="s">"imagecheck-input"</span>  <span className="nt">/&gt;</span>
        <span className="nt">&lt;figure</span> <span className="na">class=</span><span className="s">"imagecheck-figure"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"./demo/photos/nicolas-picard-208276-500.jpg"</span> <span className="na">alt=</span><span className="s">"}"</span> <span className="na">class=</span><span className="s">"imagecheck-image"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/figure&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-2"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"imagecheck mb-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"imagecheck"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"4"</span> <span className="na">class=</span><span className="s">"imagecheck-input"</span>  <span className="na">checked</span> <span className="nt">/&gt;</span>
        <span className="nt">&lt;figure</span> <span className="na">class=</span><span className="s">"imagecheck-figure"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"./demo/photos/oskar-vertetics-53043-500.jpg"</span> <span className="na">alt=</span><span className="s">"}"</span> <span className="na">class=</span><span className="s">"imagecheck-image"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/figure&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-2"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"imagecheck mb-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"imagecheck"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"5"</span> <span className="na">class=</span><span className="s">"imagecheck-input"</span>  <span className="nt">/&gt;</span>
        <span className="nt">&lt;figure</span> <span className="na">class=</span><span className="s">"imagecheck-figure"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"./demo/photos/priscilla-du-preez-181896-500.jpg"</span> <span className="na">alt=</span><span className="s">"}"</span> <span className="na">class=</span><span className="s">"imagecheck-image"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/figure&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
    <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"col-sm-2"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"imagecheck mb-4"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;input</span> <span className="na">name=</span><span className="s">"imagecheck"</span> <span className="na">type=</span><span className="s">"checkbox"</span> <span className="na">value=</span><span className="s">"6"</span> <span className="na">class=</span><span className="s">"imagecheck-input"</span>  <span className="nt">/&gt;</span>
        <span className="nt">&lt;figure</span> <span className="na">class=</span><span className="s">"imagecheck-figure"</span><span className="nt">&gt;</span>
          <span className="nt">&lt;img</span> <span className="na">src=</span><span className="s">"./demo/photos/ricardo-gomez-angel-262359-500.jpg"</span> <span className="na">alt=</span><span className="s">"}"</span> <span className="na">class=</span><span className="s">"imagecheck-image"</span><span className="nt">&gt;</span>
        <span className="nt">&lt;/figure&gt;</span>
      <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="icon-input">Icon input</h3>
                <div className="example">
                    <div className="form-group">
                        <label className="form-label">Icon input</label>
                        <div className="input-icon mb-3">
                            <input type="text" className="form-control" placeholder="Search for..." />
                            <span className="input-icon-addon">
                              <i className="fe fe-search"></i>
                            </span>
                        </div>
                        <div className="input-icon">
                            <span className="input-icon-addon">
                              <i className="fe fe-user"></i>
                            </span>
                            <input type="text" className="form-control" placeholder="Username" />
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Icon input<span className="nt">&lt;/label&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-icon mb-3"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">placeholder=</span><span className="s">"Search for..."</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"input-icon-addon"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-search"</span><span className="nt">&gt;&lt;/i&gt;</span>
    <span className="nt">&lt;/span&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"input-icon"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"input-icon-addon"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-user"</span><span className="nt">&gt;&lt;/i&gt;</span>
    <span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="na">placeholder=</span><span className="s">"Username"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="toggle-switches">Toggle switches</h3>
                <div className="example">
                    <div className="form-group">
                        <div className="form-label">Toggle switches</div>
                        <div className="custom-switches-stacked">
                            <label className="custom-switch">
                                <input type="radio" name="option" value="1" className="custom-switch-input" checked="" />
                                <span className="custom-switch-indicator"></span>
                                <span className="custom-switch-description">Option 1</span>
                            </label>
                            <label className="custom-switch">
                                <input type="radio" name="option" value="2" className="custom-switch-input" />
                                <span className="custom-switch-indicator"></span>
                                <span className="custom-switch-description">Option 2</span>
                            </label>
                            <label className="custom-switch">
                                <input type="radio" name="option" value="3" className="custom-switch-input" />
                                <span className="custom-switch-indicator"></span>
                                <span className="custom-switch-description">Option 3</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Toggle switches<span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"custom-switches-stacked"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"custom-switch"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"option"</span> <span className="na">value=</span><span className="s">"1"</span> <span className="na">class=</span><span className="s">"custom-switch-input"</span> <span className="na">checked</span><span className="nt">&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"custom-switch-indicator"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"custom-switch-description"</span><span className="nt">&gt;</span>Option 1<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"custom-switch"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"option"</span> <span className="na">value=</span><span className="s">"2"</span> <span className="na">class=</span><span className="s">"custom-switch-input"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"custom-switch-indicator"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"custom-switch-description"</span><span className="nt">&gt;</span>Option 2<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"custom-switch"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"radio"</span> <span className="na">name=</span><span className="s">"option"</span> <span className="na">value=</span><span className="s">"3"</span> <span className="na">class=</span><span className="s">"custom-switch-input"</span><span className="nt">&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"custom-switch-indicator"</span><span className="nt">&gt;&lt;/span&gt;</span>
      <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"custom-switch-description"</span><span className="nt">&gt;</span>Option 3<span className="nt">&lt;/span&gt;</span>
    <span className="nt">&lt;/label&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <h3 id="form-fieldset">Form fieldset</h3>
                <div className="example">
                    <fieldset className="form-fieldset">
                        <div className="form-group">
                            <label className="form-label">Full name<span className="form-required">*</span></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Company<span className="form-required">*</span></label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email<span className="form-required">*</span></label>
                            <input type="email" className="form-control" />
                        </div>
                        <div className="form-group mb-0">
                            <label className="form-label">Phone number</label>
                            <input type="tel" className="form-control" />
                        </div>
                    </fieldset>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;fieldset</span> <span className="na">class=</span><span className="s">"form-fieldset"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Full name<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"form-required"</span><span className="nt">&gt;</span>*<span className="nt">&lt;/span&gt;&lt;/label&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="nt">/&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Company<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"form-required"</span><span className="nt">&gt;</span>*<span className="nt">&lt;/span&gt;&lt;/label&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"text"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="nt">/&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Email<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"form-required"</span><span className="nt">&gt;</span>*<span className="nt">&lt;/span&gt;&lt;/label&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"email"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="nt">/&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
  <span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"form-group mb-0"</span><span className="nt">&gt;</span>
    <span className="nt">&lt;label</span> <span className="na">class=</span><span className="s">"form-label"</span><span className="nt">&gt;</span>Phone number<span className="nt">&lt;/label&gt;</span>
    <span className="nt">&lt;input</span> <span className="na">type=</span><span className="s">"tel"</span> <span className="na">class=</span><span className="s">"form-control"</span> <span className="nt">/&gt;</span>
  <span className="nt">&lt;/div&gt;</span>
<span className="nt">&lt;/fieldset&gt;</span></code></pre>
                </div>
            </div>
        );
    }
}

export default FormComponents;