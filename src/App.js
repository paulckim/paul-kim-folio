import React, { Component } from 'react';
import {
  NavBar,
  Parallax,
  AboutMe
} from './components';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className='main-div' >
        <NavBar />
        <Parallax img='https://i.imgur.com/EdAGGFS.jpg' />
        <AboutMe id='AboutMeSection' />
        <Parallax img='https://images8.alphacoders.com/712/712496.jpg' />
        <div>Section 2</div>
        <Parallax img='https://images8.alphacoders.com/712/712496.jpg' />
        <div>Section 3</div>
      </div>
    );
  }
}

export default App;
