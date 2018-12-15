import React, { Component } from 'react';
import AboutTabs from './AboutTabs';
import Carousel from './Carousel';
import './styles.css';

// I am practical (I am by no means good at making things pretty. I like to create things that are functional. Things that have purpose).
// I am passionate (I am passionate about technology. I actually get bored very easily if the topic is not directly related to food or programming).
// I am curious (I always have a non-stop hunger to learn new skills.)
// I am persistent (I spend alot of my own personal time trying to write code that is aesthetic, maintainable, robust and performant).

export default class AboutMe extends Component {
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
      <div id={this.props.id} className='container'>
        <div className='row no-margin'>

          <div className='col s8'>
            <div className='card no-margin blue-grey darken-1'>
              <div className="card-content white-text">
                <span className="card-title">About Me</span>
                <Carousel />
              </div>
              <div className="card-action">
                <AboutTabs />
              </div>
            </div>
          </div>

          <div className='col s4'>
            <img className='scale-img' src='http://scalar.usc.edu/works/shaya-weinberger/media/Graffiti%20Urban%20Art.jpg' alt='' />
          </div>

        </div>
      </div>
    );
  }
}

