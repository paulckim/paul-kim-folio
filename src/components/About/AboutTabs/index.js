import React, { Component } from 'react';

// I am practical (I am by no means good at making things pretty. I like to create things that are functional. Things that have purpose).
// I am passionate (I am passionate about technology. I actually get bored very easily if the topic is not directly related to food or programming).
// I am curious (I always have a non-stop hunger to learn new skills.)
// I am persistent (I spend alot of my own personal time trying to write code that is aesthetic, maintainable, robust and performant).

export default class AboutTabs extends Component {
  componentDidMount() {
    this._isMounted = true;
    const tabElems = window.document.querySelectorAll('.tabs');
    this._instances = window.M.Tabs.init(tabElems);
  }

  componentWillUnmount() {
    if(this._isMounted) this._instances.destroy();
    this._isMounted = false;
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <ul className="tabs blue-grey darken-1">
            <li className="tab col s3"><a className="active" href="#tab1">Passionate</a></li>
            <li className="tab col s3"><a href="#tab2">Curious</a></li>
            <li className="tab col s3"><a href="#tab3">Practical</a></li>
            <li className="tab col s3"><a href="#tab4">Persistent</a></li>
          </ul>
        </div>
        <div id="tab1" className="col s12">Test 1</div>
        <div id="tab2" className="col s12">Test 2</div>
        <div id="tab3" className="col s12">Test 3</div>
        <div id="tab4" className="col s12">Test 4</div>
      </div>
    );
  }
}

