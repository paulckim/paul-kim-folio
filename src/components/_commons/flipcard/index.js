import React, { PureComponent } from 'react';
import './styles.css';

export default class FlipCard extends PureComponent {
  render() {
    const { className, onBtnClick, ...rest } = this.props;
    const styles = [ 'flip-container' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <div className='flipper'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

class FrontCard extends PureComponent {
  render() {
    const { className, onBtnClick, ...rest } = this.props;
    const styles = [ 'front white-text' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <div className='content scrollbar'>
          {this.props.children}
        </div>
        <div className='sub-content valign-wrapper' 
          style={{ margin: 'auto' }}
        >
          <button 
            className='waves-effect waves-light btn-small'
            style={{ background: 'rgb(223, 113, 73)' }}
            onClick={onBtnClick}
          >
            <i className='material-icons left'>info</i>Read More
          </button>
        </div>
      </div>
    );
  }
}

class BackCard extends PureComponent {
  render() {
    const { className, onBtnClick, ...rest } = this.props;
    const styles = [ 'back white-text' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <div className='content scrollbar'>
          {this.props.children}
        </div>
        <div className='sub-content valign-wrapper'
          style={{ margin: 'auto' }}
        >
          <button 
            className='waves-effect waves-light btn-small'
            style={{ background: 'rgb(223, 113, 73)' }}
            onClick={onBtnClick}
          >
            <i className='material-icons left'>cached</i>Return
          </button>
        </div>
      </div>
    );
  }
}

export {
  FrontCard, BackCard
}