import React, { PureComponent } from 'react';
import './styles.css';

export default class ExperienceCard extends PureComponent {
  render() {
    return (
      <div className='card exp-card blue-grey'>
        <div className='card-content' style={{ textAlign: 'center' }}>
          <span className='card-title'>{this.props.title}</span>
          <div className='divider' />
          <p><strong>{this.props.position}</strong></p>
          <p><em>{this.props.time}</em></p>
          {this.props.children}
        </div>
      </div>
    );
  }
}
