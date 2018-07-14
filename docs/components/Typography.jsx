import React from 'react';

class Typography extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-0 mb-4">Typography</h2>
                <p>Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</p>
                <h3 id="text-alignment">Text alignment</h3>
                <p>Easily realign text to components with text alignment classes.</p>
                <div className="example">
                    <p className="text-left">Left aligned text on all viewport sizes.</p>
                    <p className="text-center">Center aligned text on all viewport sizes.</p>
                    <p className="text-right">Right aligned text on all viewport sizes.</p>
                    <p className="text-justify">Both aligned text on all viewport sizes. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</p>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-left"</span><span className="nt">&gt;</span>Left aligned text on all viewport sizes.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-center"</span><span className="nt">&gt;</span>Center aligned text on all viewport sizes.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-right"</span><span className="nt">&gt;</span>Right aligned text on all viewport sizes.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-justify"</span><span className="nt">&gt;</span>Both aligned text on all viewport sizes. Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.<span className="nt">&lt;/p&gt;</span></code></pre>
                </div>
                <h3 id="text-transform">Text transform</h3>
                <p>Transform text in components with text capitalization classes.</p>
                <div className="example">
                    <p className="text-lowercase">Lowercased text.</p>
                    <p className="text-uppercase">Uppercased text.</p>
                    <p className="text-capitalize">Capitalized text.</p>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-lowercase"</span><span className="nt">&gt;</span>Lowercased text.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-uppercase"</span><span className="nt">&gt;</span>Uppercased text.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"text-capitalize"</span><span className="nt">&gt;</span>Capitalized text.<span className="nt">&lt;/p&gt;</span></code></pre>
                </div>
                <h3 id="letter-spacing">Letter spacing</h3>
                <p>Utilities for controlling the tracking (letter spacing) of an element.</p>
                <div className="example">
                    <p className="tracking-tight">Lorem ipsum dolor sit amet. Tight letter spacing.</p>
                    <p className="tracking-normal">Lorem ipsum dolor sit amet. Normal letter spacing.</p>
                    <p className="tracking-wide">Lorem ipsum dolor sit amet. Wide letter spacing.</p>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"tracking-tight"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet. Tight letter spacing.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"tracking-normal"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet. Normal letter spacing.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"tracking-wide"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet. Wide letter spacing.<span className="nt">&lt;/p&gt;</span></code></pre>
                </div>
                <h3 id="line-height">Line Height</h3>
                <p>Utilities for controlling the leading (line height) of an element.</p>
                <div className="example">
                    <p className="leading-none">Lorem ipsum dolor sit amet.<br />
                        Dolor sit amet.</p>
                    <p className="leading-tight">Lorem ipsum dolor sit amet.<br />
                        Dolor sit amet.</p>
                    <p className="leading-normal">Lorem ipsum dolor sit amet.<br />
                        Dolor sit amet.</p>
                    <p className="leading-loose">Lorem ipsum dolor sit amet.<br />
                        Dolor sit amet.</p>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"leading-none"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet.<span className="nt">&lt;br&gt;</span>Dolor sit amet.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"leading-tight"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet.<span className="nt">&lt;br&gt;</span>Dolor sit amet.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"leading-normal"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet.<span className="nt">&lt;br&gt;</span>Dolor sit amet.<span className="nt">&lt;/p&gt;</span>
<span className="nt">&lt;p</span> <span className="na">class=</span><span className="s">"leading-loose"</span><span className="nt">&gt;</span>Lorem ipsum dolor sit amet.<span className="nt">&lt;br&gt;</span>Dolor sit amet.<span className="nt">&lt;/p&gt;</span></code></pre>
                </div>
                <h3 id="basic-elements">Basic elements</h3>
                <p>When you can’t use the CSS classes you want, or when you just want to directly use HTML tags, use <code className="highlighter-rouge">.text-wrap</code> as container. It can handle almost any HTML tag.</p>
                <div className="example">
                    <div className="text-wrap">
                        <h1>Hello World</h1>
                        <p>Lorem ipsum<sup><a>[1]</a></sup> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<sub>script</sub> works as well!</p>
                        <h2>Second level</h2>
                        <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.</p>
                        <ul>
                            <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                            <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                            <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                            <li>Ut non enim metus.</li>
                        </ul>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"text-wrap"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;h1&gt;</span>Hello World<span className="nt">&lt;/h1&gt;</span>
  <span className="nt">&lt;p&gt;</span>Lorem ipsum<span className="nt">&lt;sup&gt;&lt;a&gt;</span>[1]<span className="nt">&lt;/a&gt;&lt;/sup&gt;</span> dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque. Sub<span className="nt">&lt;sub&gt;</span>script<span className="nt">&lt;/sub&gt;</span> works as well!<span className="nt">&lt;/p&gt;</span>
  <span className="nt">&lt;h2&gt;</span>Second level<span className="nt">&lt;/h2&gt;</span>
  <span className="nt">&lt;p&gt;</span>Curabitur accumsan turpis pharetra <span className="nt">&lt;strong&gt;</span>augue tincidunt<span className="nt">&lt;/strong&gt;</span> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti. Etiam mattis sem rhoncus lacus dapibus facilisis. Donec at dignissim dui. Ut et neque nisl.<span className="nt">&lt;/p&gt;</span>
  <span className="nt">&lt;ul&gt;</span>
    <span className="nt">&lt;li&gt;</span>In fermentum leo eu lectus mollis, quis dictum mi aliquet.<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Morbi eu nulla lobortis, lobortis est in, fringilla felis.<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.<span className="nt">&lt;/li&gt;</span>
    <span className="nt">&lt;li&gt;</span>Ut non enim metus.<span className="nt">&lt;/li&gt;</span>
  <span className="nt">&lt;/ul&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
            </div>
        );
    }
}

export default Typography;