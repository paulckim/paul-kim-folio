import React, { Component } from 'react';
import Swiper from "swiper";
import './index.css';

// TODO: remove hardcoded urls and grab from CDN
const url1 = "https://i.imgur.com/jdBlxYT.jpg";
const backgroundImg1 = { backgroundImage: `url(${url1})` };

const url2 = "https://archive-media-1.nyafuu.org/wg/image/1409/00/1409002784203.png";
const backgroundImg2 = { backgroundImage: `url(${url2})` };

const url3 = "https://orig00.deviantart.net/08d8/f/2015/303/b/1/everest_polyscape_by_kermitnirmit-d9eyroo.jpg";
const backgroundImg3 = { backgroundImage: `url(${url3})` };

const url4 = "https://i.imgur.com/ZmU1Hro.png";
const backgroundImg4 = { backgroundImage: `url(${url4})` };

const url5 = "https://archive-media-1.nyafuu.org/wg/image/1424/36/1424366309375.png";
const backgroundImg5 = { backgroundImage: `url(${url5})` };

const url6 = "https://downloadwallpaper.org/wp-content/uploads/2017/08/First-polyscape-using-Photoshop-1920x1080-Need-iPhone-S-Plus-Background-for-IPho-wallpaper-wpc5804805.jpg";
const backgroundImg6 = { backgroundImage: `url(${url6})` };

const url7 = "https://i.imgur.com/mgJGs64.png";
const backgroundImg7 = { backgroundImage: `url(${url7})` };

class App extends Component {
  componentDidMount() {
    this._isMounted = true;

    const navElems = window.document.querySelectorAll('.sidenav');
    this._navInst = window.M.Sidenav.init(navElems);

    this._swiperInst = new Swiper('.swiper-container', {
      direction: "vertical",
      mousewheel: true,
      speed: 800,
      slidesPerView: 1,
      renderBullet: () => '<a className="bullet disabled" />',
      bulletClass: "bullet",
      bulletActiveClass: "active"
    });
  }

  componentWilUnmount() {
    if(!this._isMounted) return;
    this._swiperInst.destroy();
    this._navInst.destroy();
    this._isMounted = false;
  }

  render() {
    return (
      <div>

        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div style={backgroundImg1} className="swiper-slide autoscale-img">
              <div className="faded-layer-b">
              </div>
            </div>
            <div style={backgroundImg2} className="swiper-slide autoscale-img">
              <div className="faded-layer-b"></div>
            </div>
            <div style={backgroundImg3} className="swiper-slide autoscale-img">
              <div className="faded-layer-b"></div>
            </div>
            <div style={backgroundImg4} className="swiper-slide autoscale-img">
              <div className="faded-layer-b"></div>
            </div>
            <div style={backgroundImg5} className="swiper-slide autoscale-img">
              <div className="faded-layer-b"></div>
            </div>
            <div style={backgroundImg6} className="swiper-slide autoscale-img">
              <div className="faded-layer-b"></div>
            </div>
            <div style={backgroundImg7} className="swiper-slide autoscale-img">
              <div className="faded-layer-b"></div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>

        <nav className="floating-nav nav-dark">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo center">Paul Cheor Kim</a>
            <a href="#!" data-target="mobile-nav" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li><a href="#!">About</a></li>
              <li><a href="#!">Experience</a></li>
              <li><a href="#!">Skills</a></li>
              <li><a href="#!">Services</a></li>
              <li><a href="#!">Blog</a></li>
              <li><a href="#!">Contact</a></li>
            </ul>
          </div>
        </nav>
        <ul className="sidenav sidenav-dark" id="mobile-nav">
          <li><a href="#!">About</a></li>
          <li><a href="#!">Experience</a></li>
          <li><a href="#!">Skills</a></li>
          <li><a href="#!">Services</a></li>
          <li><a href="#!">Blog</a></li>
          <li><a href="#!">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default App;



// LANDSCAPE BACKGROUNDS
// https://images5.alphacoders.com/598/thumb-1920-598602.png


