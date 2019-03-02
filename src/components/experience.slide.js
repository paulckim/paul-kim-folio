/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from 'react';
import {
  Slide, Container, 
  VerticalTabWrapper, VerticalTabContent, VTabList, VTab
} from './_commons';
import Biography from './content/about/biography';
import Hobbies from './content/about/hobbies';
import { fxFadeInDown } from 'css-fx/fade-in';
import 'css-fx/css-fx.css';

const aboutImageUrl = 'https://archive-media-1.nyafuu.org/wg/image/1409/00/1409002784203.png';
const SLIDE_IMAGE_URL = `url(${aboutImageUrl})`;
const _TAB_LITERALS = Object.freeze([ 'Biography', 'Hobbies' ]);
const _TAB_IDS = Object.freeze({ BIOGRAPHY: 0, HOBBIES: 1 });

/**
 * 
 * @param {number} id 
 */
const getTabLabels = id => _TAB_LITERALS[id];

export default class AboutSlide extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currTab: _TAB_IDS.BIOGRAPHY };
    this.setTab = this.setTab.bind(this);
    this.getTabStyle = this.getTabStyle.bind(this);
    this.getCardStyle = this.getCardStyle.bind(this);
  }

  render() {
    return (
      <Slide className='dark-theme' imgUrl={SLIDE_IMAGE_URL}>
        <Container>
          <VerticalTabWrapper>
            <VTabList>
              <VTab 
                className={this.getTabStyle(_TAB_IDS.BIOGRAPHY)} 
                icon="account_box" tabLabel={getTabLabels(_TAB_IDS.BIOGRAPHY)} 
                onClick={() => this.setTab(_TAB_IDS.BIOGRAPHY)} 
              />
              <VTab 
                className={this.getTabStyle(_TAB_IDS.HOBBIES)} 
                icon="account_box" tabLabel={getTabLabels(_TAB_IDS.HOBBIES)} 
                onClick={() => this.setTab(_TAB_IDS.HOBBIES)} 
              />
            </VTabList>
            <VerticalTabContent>
              <Biography className={`dark-theme ${this.getCardStyle(_TAB_IDS.BIOGRAPHY)}`} />
              <Hobbies className={`dark-theme ${this.getCardStyle(_TAB_IDS.HOBBIES)}`} />
            </VerticalTabContent>
          </VerticalTabWrapper>
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
    return this.state.currTab === tabId ? `reveal ${fxFadeInDown}` : '';
  }
}
