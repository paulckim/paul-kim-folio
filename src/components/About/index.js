import React, { Component } from 'react';

class AboutMe extends Component {
  componentDidMount() {
    this._isMounted = true;
    var collapsibleElems = window.document.querySelectorAll('.collapsible');
    this._instances = window.M.Collapsible.init(collapsibleElems);
  }

  componentWillUnmount() {
    if(this._isMounted) this._instances.destroy();
    this._isMounted = false;
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h2>About Me</h2>
            <div className='divider' />
            <div>
              <p><strong><em>Welcome to my landing page!</em></strong></p>
              <p>My name is Paul Kim and here are some things to know about me:</p>
            </div>

            <ul className='collapsible'>
              <li>
                <div className='collapsible-header' unselectable='on' >I am passionate and proud.</div>
                <div className='collapsible-body'>
                  <p>I spend hours, days, weeks, months perfecting my craft no matter what it is.</p>
                  <p>
                    When I first learned web development, I was never satisfied with my early iterations - 
                    constantly refactoring code to discover the perfect design pattern. I strived to write 
                    scalable, durable, aesthetic and concise code. In my pursuit for perfection, I experimented 
                    with a plethora of tools: React, Redux, Unstated, Bootstrap 4.X, Materialize CSS, etc. One 
                    week, I would have the website written with one set of tools, only to rewrite it a few weeks 
                    later. I was never satisfied with all the forums, tutorials and documentations telling me to
                    <blockquote>
                      <p>
                        just learn &lt;language XYZ&gt; and install &lt;tool ABC&gt;. You'll need it 
                        eventually, so just set it up now.
                      </p>
                      <cite>Internet</cite>
                    </blockquote>
                    Now, I dive deep into topics. I want to come to my own conclusions. I don't want people telling 
                    me to do something for the sake of doing it. Give me a compelling reason and I'll think about it.
                  </p>
                  <blockquote>
                    <p>
                      Insanity... is... doing the exact... same fucking thing... over and over again expecting... 
                      shit to change. That. Is. Crazy.
                    </p>
                    <cite><s>Albert Einstein</s>Vaas Montenegro</cite>
                  </blockquote>
                  <p>
                    <em>By that definition, I am indeed, insane.</em> Perfection is impossible yet I will never stop 
                    chasing this pursuit because struggling to write well-designed, robust code early on reduces 
                    the suffering of all developers in the future. I know I can't live with myself if I don't try.
                  </p>
                  <p>
                    I am a lover of food and cooking. To me, cooking is a not just a form of art, but a means 
                    to telling someone how much: "I love you." I love cooking for others that I care about 
                    because it allows me to express this very thing. I love watching my friends' faces light 
                    up as I bring them their garnished dishes, as they take their first bite and as they look 
                    back at me with joy. This makes me complete. This is why I do my best to better my craft, 
                    to express myself.
                  </p>
                </div>
              </li>
              <li>
                <div className='collapsible-header' unselectable='on' >I am a Software Engineer.</div>
                <div className='collapsible-body'>
                  <p>
                    I am primarily a Back-End developer with experience that includes but is not limited to: 
                    Front-End, DevOps (CI/CD scripting), Infrastructure (AWS). I graduated with a Bachelors of 
                    Science in Computer Science at the <a href='https://www.csulb.edu/'>California State 
                    University, Long Beach</a>.
                  </p>
                  <p>
                    I learned to program late in my University years.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
