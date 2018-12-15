import React, { Component } from 'react';
import NavLink from './NavLink'
import './styles.css'

const TOP_SCROLL_INDEX = 0;
const isAtTop = scrollTop => scrollTop === TOP_SCROLL_INDEX;

class NavBar extends Component {
  constructor(props) {
    super(props);
    const { scrollTop } = window.document.scrollingElement
    this.state = { top: isAtTop(scrollTop) }

    this.scrollTopHandler = this.scrollTopHandler.bind(this);
  }

  componentDidMount() {
    this._unMounted = true;
    window.document.addEventListener('scroll', this.scrollTopHandler);
    const navElems = document.querySelectorAll('.sidenav');
    this._navInstances = window.M.Sidenav.init(navElems);
  }

  componentWillUnmount() {
    if(!this._unMounted) return;
    window.document.removeEventListener('scroll', this.scrollTopHandler);
    this._navInstances.destroy();
    this._unMounted = false;
  }

  scrollTopHandler() {
    const { scrollTop } = window.document.scrollingElement
    if(this.state.top === scrollTop) return;
    this.setState({ top: isAtTop(scrollTop) });
  }

  render() {
    const fadeCss = this.state.top ? '' : 'nav-fade-in';
    return (
      <div className='navbar-fixed nav-position'>
        <nav className={`nav-style ${fadeCss}`}>
          <div className="nav-wrapper">
            {/* 127.P.C.K -> {127.80.67.75} */}
            <a className='brand-logo' href="#!" >{'{DEL}.P.C.K'}</a>
            <a className="sidenav-trigger" href="#!" data-target="mobile-navbar" >
              <i className="material-icons">menu</i>
            </a>
            {getNavBarLinks()}
          </div>
        </nav>

        {getSideBarLinks()}
      </div>
    );
  }
}

function getNavBarLinks() {
  return (
    <ul className="right hide-on-med-and-down">
      <NavLink href='#AboutMeSection' text='About Me' />
      <NavLink href='#!' text='Skills' />
      <NavLink href='#!' text='Interests' />
      <NavLink href='#!' text='Contact' />
    </ul>
  )
}

function getSideBarLinks() {
  return (
    <ul className="sidenav" id="mobile-navbar">
      <NavLink href='#AboutMeSection' text='About Me' />
      <li><div className="divider"></div></li>
      <NavLink href='#!' text='Skills' />
      <NavLink href='#!' text='Interests' />
      <NavLink href='#!' text='Contact' />
    </ul>
  )
}

export default NavBar;

