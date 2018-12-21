/**
 * @author Paul Cheor Kim
 * @fileoverview The root component that represents the portfolio website.
 */
import React, { PureComponent } from 'react';
import Swiper from "swiper";
import { swiperConfig } from "./constants";
import { NavBar } from "./components";
import Section,
{
  SectionMetaData,
  SectionNavMapper
} from "./sections";
import './index.css';

function sectionRowMapper(sections) {
  return sections.map(({index, imgUrl, component}) => Section(index, imgUrl, component));
}

class App extends PureComponent {
  componentDidMount() {
    this._isMounted = true;
    const navElems = window.document.querySelectorAll('.sidenav');
    this._navInst = window.M.Sidenav.init(navElems);
    this._swiperInst = new Swiper("#swiper", swiperConfig);
  }

  componentWilUnmount() {
    if(!this._isMounted) return;
    this._swiperInst.destroy();
    this._navInst.destroy();
    this._isMounted = false;
  }
  
  componentDidUpdate() {
    this._swiperInst = new Swiper('#swiper', swiperConfig);
  }

  render() {
    const { sections, navLinks } = SectionNavMapper(SectionMetaData);
    console.log("navLinks = ", navLinks);
    return (
      <div>

        <div className="swiper-container" id="swiper">
          <div className="swiper-wrapper">
            {sectionRowMapper(sections)}
          </div>
          <div className="swiper-pagination" />
        </div>

        <NavBar navLinks={navLinks} />

      </div>
    );
  }
}

export default App;

// LANDSCAPE BACKGROUNDS
// https://images5.alphacoders.com/598/thumb-1920-598602.png
