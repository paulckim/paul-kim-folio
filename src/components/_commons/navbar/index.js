import React, { PureComponent } from 'react';
import './styles.css';

export default class NavBar extends PureComponent {
  constructor(props) {
    super(props);
    this._navRef = React.createRef();
    this._sideNavRef = React.createRef();
  }

  componentDidMount() {
    this._isMounted = true;
    this._sideNavInst = window.M.Sidenav.init(
      this._sideNavRef.current
    );
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._sideNavInst.destroy();
    this._isMounted = false;
  }
  
  render() {
    const { className, logoText, ...rest } = this.props;
    const styles = ['navbar-fixed'];
    if(className) styles.push(className);
    return (
      <div ref={this._navRef} className={styles.join(' ')} {...rest}>
        <nav>
          <div className='nav-wrapper'>
            {/* eslint-disable-next-line */}
            <a 
              className='waves-effect waves-light brand-logo center' 
              href='#'
            >
              {logoText}
            </a>
            <span data-target='mobile-nav' className='sidenav-trigger'>
              <i className='material-icons'>menu</i>
            </span>
            <ul className='right hide-on-med-and-down'>
              {this.props.children}
            </ul>
          </div>
        </nav>
        <ul ref={this._sideNavRef} className='sidenav' id='mobile-nav'>
          {this.props.children}
        </ul>
      </div>
    )
  }
}
