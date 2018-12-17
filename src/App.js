import React, { Component } from 'react';
import Swiper from "swiper";
import './index.css';

// TODO: remove hardcoded urls and grab from CDN
const url1 = "https://newevolutiondesigns.com/images/freebies/polygon-wallpaper-7.jpg";
const backgroundImg1 = {
  backgroundImage: `url(${url1})`
}

const url2 = "https://wallpaperaccess.com/full/692106.jpg";
const backgroundImg2 = {
  backgroundImage: `url(${url2})`
}

const url3 = "https://www.desktopbackground.org/download/1600x900/2011/08/12/248957_polygon-wide-hd-desktop-backgrounds-wallpapers-dreamlovewallpapers_1920x1080_h.jpg";
const backgroundImg3 = {
  backgroundImage: `url(${url3})`
}

class App extends Component {
  componentDidMount() {
    this._isMounted = true;
    this._swiperInst = new Swiper('.swiper-container', {
      direction: "vertical",
      mousewheel: true,
      speed: 600,
      slidesPerView: 1,
      renderBullet: () => {
        return '<a class="btn disabled">Button</a>';
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bulletElement: "a",
        bulletClass: "btn",
        bulletActiveClass: "active"
      }
    });
  }

  componentWilUnmount() {
    if(this._isMounted) this._swiperInst = null;// this._carouselElems.destroy();
    this._isMounted = false;
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          <div style={backgroundImg1} className="swiper-slide">
          </div>
          <div style={backgroundImg2} className="swiper-slide">
          </div>
          <div style={backgroundImg3} className="swiper-slide">
          </div>
        </div>
        <div className="swiper-pagination" />
      </div>
    );
  }
}

export default App;



// LANDSCAPE BACKGROUNDS

//"https://newevolutiondesigns.com/images/freebies/polygon-wallpaper-7.jpg"
//https://wallpaperaccess.com/full/692106.jpg
//https://www.desktopbackground.org/download/1600x900/2011/08/12/248957_polygon-wide-hd-desktop-backgrounds-wallpapers-dreamlovewallpapers_1920x1080_h.jpg


// PORTRAIT BACKGROUNDS

//https://i.pinimg.com/originals/15/76/4a/15764afb302086f1b17e2f925e2ec1e4.jpg
//https://media.idownloadblog.com/wp-content/uploads/2015/02/Shattered-Pattern-Wallpaper-iPhone-6-Plus.jpg
//https://media.idownloadblog.com/wp-content/uploads/2015/02/Geometric-Iceberg-Wallpaper-iPhone-6-Plus.jpeg



