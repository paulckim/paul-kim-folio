/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from 'react';
import { Slide, Container } from './_commons';
import Overview from './content/about/overview';
// import { fxFadeInDown } from 'css-fx/fade-in';
import 'css-fx/css-fx.min.css';

const aboutImageUrl = 'https://archive-media-1.nyafuu.org/wg/image/1409/00/1409002784203.png';
const SLIDE_IMAGE_URL = `url(${aboutImageUrl})`;
const _TAB_IDS = Object.freeze({ OVERVIEW: 0, MORE: 1 });

export default class AboutSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currTab: _TAB_IDS.OVERVIEW };
    this.setTab = this.setTab.bind(this);
    this.getTabStyle = this.getTabStyle.bind(this);
    this.getCardStyle = this.getCardStyle.bind(this);
  }

  render() {
    return (
      <Slide className='dark-theme' imgUrl={SLIDE_IMAGE_URL}>
        <Container>
          <Overview
            className={`dark-theme ${this.getCardStyle(_TAB_IDS.OVERVIEW)}`}
          />
        </Container>
      </Slide>
    );
  }

  /**
   * 
   * @param {number} tabId 
   */
  setTab(tabId) {
    if(this.state.currTab !== tabId) this.setState({ currTab: tabId });
  }

  /**
   * 
   * @param {number} isActtabIdive 
   */
  getTabStyle(tabId) {
    return this.state.currTab === tabId ? 'vtab-active' : '';
  }

  /**
   * 
   * @param {number} tabId 
   */
  getCardStyle(tabId) {
    return this.state.currTab === tabId ? 'reveal' : '';
  }
}
