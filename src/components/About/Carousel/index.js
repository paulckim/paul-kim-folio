import React, { Component } from 'react';
import Swiper from 'swiper';
import './styles.css';

export default class Carousel extends Component {
  componentDidMount() {
    this._swiperInstance = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper swiper-cell">
          <div className="swiper-slide swiper-cell">
            <div>
              <blockquote>Who</blockquote>
              <p>
                My name is Paul Kim and I am a Full-Stack, Cloud Software Engineer.
              </p>
              <p>
                I create web applications, micro services, and infrastructure components for and on the Cloud.
              </p>
              <p>
                I also assist in the CI/CD process & dev-ops tooling in my current role.
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <div>
              <blockquote>What</blockquote>
              <p>
                My name is Paul Kim and I am a Full-Stack, Cloud Software Engineer.
              </p>
            </div>
          </div>
          <div className="swiper-slide">
            <blockquote>What</blockquote>
            <p>
              My name is Paul Kim and I am a Full-Stack, Cloud Software Engineer.
            </p>
          </div>
        </div>

        <div class="swiper-pagination" />
        <div class="swiper-button-next" />
        <div class="swiper-button-prev" />
      </div>
    );
  }
}

