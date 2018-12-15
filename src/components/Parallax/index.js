import React, { Component } from 'react';
import './styles.css';

class Parallax extends Component {
  componentDidMount() {
    this._isMounted = true;
    const parallaxElems = window.document.querySelectorAll('.parallax');
    this._instances = window.M.Parallax.init(parallaxElems);
  }

  componentWillUnmount() {
    if(this._isMounted) this._instances.destroy();
    this._isMounted = false;
  }

  render() {
    return (
      <div className='parallax-container'>
        <div className='parallax'><img src={this.props.img} alt='' /></div>
      </div>
    );
  }
}

export default Parallax;

