import React, { Component } from 'react';
import {
  NavBar,
  Parallax,
  AboutMeSection
} from './components'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Parallax img='https://i.imgur.com/EdAGGFS.jpg' />
        <AboutMeSection />
        <Parallax img='https://images8.alphacoders.com/712/712496.jpg' />
        <AboutMeSection />
        <AboutMeSection />
        <AboutMeSection />
        <AboutMeSection />
        <AboutMeSection />
      </div>
    );
  }
}

export default App;
