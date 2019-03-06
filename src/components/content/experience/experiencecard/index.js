import React, { PureComponent } from 'react';
import './styles.css';

export default class ExperienceCard extends PureComponent {
  render() {
    const { className, onBtnClick, ...rest } = this.props;
    const styles = [ 'card exp-card blue-grey' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <div className='card-content' style={{ textAlign: 'center' }}>
          <span className='card-title'>{this.props.title}</span>
          <div className='divider' />
          <p><strong>{this.props.position}</strong></p>
          <p><em>{this.props.time}</em></p>
          {this.props.children}
          <button className='waves-effect waves-light btn' onClick={onBtnClick}>
            <i className='material-icons'>search</i>View
          </button>
        </div>
      </div>
    );
  }
}
