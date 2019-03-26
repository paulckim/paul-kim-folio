/**
 * @author Paul Cheor Kim
 * @fileoverview A Panel for the Experience Section.
 */
import React, { PureComponent } from 'react';
import './styles.css';

export default class ExperienceCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isActive: false }
    this.setActive = this.setActive.bind(this);
    this.setInactive = this.setInactive.bind(this);
  }

  setActive() {
    this.setState({ isActive: true });
  }

  setInactive() {
    this.setState({ isActive: false });
  }

  render() {
    const { imgUrl, position, time } = this.props;
    const { isActive } = this.state;
    const activeClass = isActive ? 'active' : '';
    const activePanelStyle = isActive 
      ? 'rgb(223, 113, 73, 0.65)' 
      : 'rgb(0, 0, 0, 0.75)';
    const activeContentStyle = isActive ? '' : 'none';
    return (
      <div
        className={`exp-card ${activeClass}`}
        style={{ backgroundImage: `url(${imgUrl})` }}
        onMouseEnter={this.setActive}
        onMouseLeave={this.setInactive}
      >
        <div
          className='exp-card-filter'
          style={{ background: activePanelStyle }}
        />
        <div 
          className= 'exp-card-content'
        >
          <div style={{ textAlign: 'center' }}>
            <h5>{position}</h5>
            <p>{time}</p>
          </div>
          <div 
            className='container'
            style={{ display: activeContentStyle }}
          >
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
