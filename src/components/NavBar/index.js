import React, { Component } from 'react';
import NavLink from './NavLink'
import './styles.css'

const scrollTopListener = () => {
  const { scrollTop } = window.document.scrollingElement;
  if(scrollTop === 0) alert('Reached top of page!');
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    const { scrollTop} = window.document.scrollingElement
    this.state = { top: (scrollTop === 0) }
  }
  componentDidMount() {
    this._isMounted = true;
    window.document.addEventListener('scroll', scrollTopListener);
    const navElems = window.document.querySelectorAll('.sidenav');
    this._instances = window.M.Sidenav.init(navElems);
  }

  componentWillUnmount() {
    if(this._isMounted) {
      this._instances.destroy();
      window.document.removeEventListener('scroll', scrollTopListener);
    }
    this._isMounted = false;
  }

  render() {
    return (
      <div className='navbar-fixed nav-position'>
        <nav className='nav-style'>
          <div className="nav-wrapper">
            {/* 127.P.C.K -> {127.80.67.75} */}
            <a className='brand-logo nav-logo' href="#!" >{'{DEL}.P.C.K'}</a>
            <a className="sidenav-trigger" href="#!" data-target="mobile-demo" >
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
      <NavLink href='#!' text='About Me' />
      <NavLink href='#!' text='Skills' />
      <NavLink href='#!' text='Interests' />
      <NavLink href='#!' text='Contact' />
    </ul>
  )
}

function getSideBarLinks() {
  return (
    <ul className="sidenav" id="mobile-demo">
      <NavLink href='#!' text='About Me' />
      <li><div className="divider"></div></li>
      <NavLink href='#!' text='Skills' />
      <NavLink href='#!' text='Interests' />
      <NavLink href='#!' text='Contact' />
    </ul>
  )
}

export default NavBar;
