import React, { PureComponent } from 'react';
import './styles.css';

export default class Parallax extends PureComponent {
  constructor(props) {
    super(props);
    this._llRef = React.createRef();
  }

  componentDidMount() {
    this._isMounted = true;
    this._parallaxInst = window.M.Parallax.init(
      this._llRef.current
    );
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._parallaxInst.destroy();
    this._isMounted = false;
  }

  render() {
    const { className, src, alt, ...rest } = this.props;
    const styles = ['parallax-container'];
    if(className) styles.push(className);
    return(
      <div className={styles.join(' ')} {...rest}>
        <div ref={this._llRef} className='parallax'>
          <img src={src} alt='' draggable={false} />
        </div>
      </div>
    );
  }
}
