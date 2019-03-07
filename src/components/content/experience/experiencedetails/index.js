import React, { PureComponent } from 'react';
import './styles.css';

export default class ExperienceDetails extends PureComponent {
  render() {
    const {
      company,
      position,
      location,
      date,
      className,
      onBtnClick
    } = this.props;
    const styles = [ 'exp-details' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')}>
        <button 
          className='waves-effect waves-light btn'
          style={{ float: 'right' }}
          onClick={onBtnClick}
        >
          <i className='material-icons'>exit_to_app</i>Back
        </button>
        <h4>{position}</h4>
        <div>Company: {company}</div>
        <div>Location: {location}</div>
        <div>Date: {date}</div>
        <div className='divider' />
        {this.props.children}
      </div>
    );
  }
}
