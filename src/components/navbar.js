import React, { PureComponent } from "react";
import "./styles.css";

/**
 * 
 * @param {{index:number}} param0 
 */
const navHandler = index => {
  return () => {
    const { swiper } = window.document.querySelector('.swiper-container');
    swiper.slideTo(index, 800);
  }
};

function renderNavLinks(navLinks) {
  if(!navLinks) return [];
  return navLinks.map(({index, section}) => {
    return (
      <li key={index} onClick={navHandler(index)}>
        <span>{section}</span>
      </li>
    );
  });
}

export default class NavBar extends PureComponent {
  render() {
    const { navLinks } = this.props;
    const { index, section } = navLinks[0];
    const navItems = navLinks.slice(1);

    return (
      <div>
        <nav className="floating-nav nav-dark">
          <div className="nav-wrapper">
            <span
              className="brand-logo center"
              onClick={navHandler(index)}>
              {section}
            </span>
            <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {renderNavLinks(navItems)}
            </ul>
          </div>
        </nav>
        <ul className="sidenav sidenav-dark" id="mobile-nav">
          {renderNavLinks(navItems)}
        </ul>
      </div>
    )
  }
}
