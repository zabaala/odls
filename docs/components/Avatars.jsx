import React from 'react';

class Avatars extends React.Component {
    render() {
        return (
            <div>
                <h2 className="mt-0 mb-4">Avatars</h2>
                <h3 id="simple-avatar">Simple avatar</h3>
                <div className="example">
                    <div className="avatar-list">
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/21.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/25.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/5.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/17.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/40.jpg'}}></span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/21.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/25.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/5.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/17.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/40.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="avatar-size">Avatar size</h3>
                <div className="example">
                    <div className="avatar-list">
                        <span className="avatar avatar-sm" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/9.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/8.jpg'}}></span>
                        <span className="avatar avatar-md" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/4.jpg'}}></span>
                        <span className="avatar avatar-lg" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/35.jpg'}}></span>
                        <span className="avatar avatar-xl" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/29.jpg'}}></span>
                        <span className="avatar avatar-xxl" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/2.jpg'}}></span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-sm"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/9.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/8.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-md"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/4.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-lg"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/35.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-xl"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/29.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-xxl"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/2.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="avatar-status">Avatar status</h3>
                <div className="example">
                    <div className="avatar-list">
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/2.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/25.jpg'}}>
                            <span className="avatar-status"></span>
                          </span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/9.jpg'}}>
                            <span className="avatar-status bg-red"></span>
                          </span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/25.jpg'}}>
                            <span className="avatar-status bg-green"></span>
                          </span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/16.jpg'}}>
                            <span className="avatar-status bg-yellow"></span>
                          </span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/2.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/25.jpg)"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar-status"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/9.jpg)"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar-status bg-red"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/25.jpg)"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar-status bg-green"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/16.jpg)"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar-status bg-yellow"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="avatar-placeholder">Avatar placeholder</h3>
                <div className="example">
                    <div className="avatar-list">
                        <span className="avatar">RB</span>
                        <span className="avatar">KH</span>
                        <span className="avatar">BK</span>
                        <span className="avatar avatar-placeholder"></span>
                        <span className="avatar"><i className="fe fe-more-horizontal"></i></span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span><span className="nt">&gt;</span>RB<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span><span className="nt">&gt;</span>KH<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span><span className="nt">&gt;</span>BK<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-placeholder"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span><span className="nt">&gt;&lt;i</span> <span className="na">class=</span><span className="s">"fe fe-more-horizontal"</span><span className="nt">&gt;&lt;/i&gt;&lt;/span&gt;</span></code></pre>
                </div>
                <div className="example">
                    <div className="avatar-list">
                        <span className="avatar avatar-blue">NG</span>
                        <span className="avatar avatar-azure">AM</span>
                        <span className="avatar avatar-indigo">RB</span>
                        <span className="avatar avatar-purple">PR</span>
                        <span className="avatar avatar-pink">WH</span>
                        <span className="avatar avatar-red">MR</span>
                        <span className="avatar avatar-orange">DB</span>
                        <span className="avatar avatar-yellow">PP</span>
                        <span className="avatar avatar-lime">JR</span>
                        <span className="avatar avatar-green">RB</span>
                        <span className="avatar avatar-teal">KH</span>
                        <span className="avatar avatar-cyan">BK</span>
                        <span className="avatar avatar-gray">CA</span>
                        <span className="avatar avatar-gray-dark">CW</span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-blue"</span><span className="nt">&gt;</span>NG<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-azure"</span><span className="nt">&gt;</span>AM<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-indigo"</span><span className="nt">&gt;</span>RB<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-purple"</span><span className="nt">&gt;</span>PR<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-pink"</span><span className="nt">&gt;</span>WH<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-red"</span><span className="nt">&gt;</span>MR<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-orange"</span><span className="nt">&gt;</span>DB<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-yellow"</span><span className="nt">&gt;</span>PP<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-lime"</span><span className="nt">&gt;</span>JR<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-green"</span><span className="nt">&gt;</span>RB<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-teal"</span><span className="nt">&gt;</span>KH<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-cyan"</span><span className="nt">&gt;</span>BK<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-gray"</span><span className="nt">&gt;</span>CA<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar avatar-gray-dark"</span><span className="nt">&gt;</span>CW<span className="nt">&lt;/span&gt;</span></code></pre>
                </div>
                <h3 id="avatars-list">Avatars list</h3>
                <div className="example">
                    <div className="avatar-list">
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/21.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/25.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/5.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/17.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/40.jpg'}}></span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"avatar-list"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/21.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/25.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/5.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/17.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/40.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
                <div className="example">
                    <div className="avatar-list avatar-list-stacked">
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/12.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/21.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/29.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/female/2.jpg'}}></span>
                        <span className="avatar" style={{backgroundImage: 'url(https://tabler.github.io/tabler/demo/faces/male/34.jpg'}}></span>
                        <span className="avatar">+8</span>
                    </div>
                </div>
                <div className="highlight">
                        <pre><code className="language-html" data-lang="html"><span className="nt">&lt;div</span> <span className="na">class=</span><span className="s">"avatar-list avatar-list-stacked"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/12.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/21.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/29.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/female/2.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span> <span className="na">style=</span><span className="s">"background-image: url(./demo/faces/male/34.jpg)"</span><span className="nt">&gt;&lt;/span&gt;</span>
  <span className="nt">&lt;span</span> <span className="na">class=</span><span className="s">"avatar"</span><span className="nt">&gt;</span>+8<span className="nt">&lt;/span&gt;</span>
<span className="nt">&lt;/div&gt;</span></code></pre>
                </div>
            </div>
        );
    }
}

export default Avatars;