/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from "react";
import {
  VerticalTabWrapper,
  VTabList,
  VerticalTabContent,
  VTab
} from "./_components/_commons";
import AboutCard from "./_components/about/aboutcard";
import { TAB_IDS, getTabLabels } from "./constants/about"
import "./styles/about.css";

export default class AboutSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currTab: TAB_IDS.BIOGRAPHY };
    this.setTab = this.setTab.bind(this);
    this.isActive = this.isActive.bind(this);
    this.getTabStyle = this.getTabStyle.bind(this);
    this.getCardStyle = this.getCardStyle.bind(this);
  }

  /**
   * 
   * @param {number} tabId 
   */
  setTab(tabId) {
    if(this.state.currTab === tabId) return;
    this.setState({ currTab: tabId });
  }

  /**
   * 
   * @param {number} tabId 
   */
  isActive(tabId) {
    return this.state.currTab === tabId;
  }

  /**
   * 
   * @param {boolean} isActive 
   */
  getTabStyle(isActive) {
    return isActive ? "vtab-active" : "";
  }

  /**
   * 
   * @param {boolean} isActive 
   */
  getCardStyle(isActive) {
    return isActive ? "active-card" : "";
  }

  render() {
    return (
      <div className="about-style dark-theme">
        <div className="container">
          <VerticalTabWrapper>
            <VTabList>
              <VTab 
                className={this.getTabStyle(this.isActive(TAB_IDS.BIOGRAPHY))} 
                icon="account_box" tabLabel={getTabLabels(TAB_IDS.BIOGRAPHY)} 
                onClick={() => this.setTab(TAB_IDS.BIOGRAPHY)} 
              />
              <VTab 
                className={this.getTabStyle(this.isActive(TAB_IDS.STATS))} 
                icon="account_box" tabLabel={getTabLabels(TAB_IDS.STATS)} 
                onClick={() => this.setTab(TAB_IDS.STATS)} 
              />
              <VTab 
                className={this.getTabStyle(this.isActive(TAB_IDS.HOBBIES))} 
                icon="account_box" tabLabel={getTabLabels(TAB_IDS.HOBBIES)} 
                onClick={() => this.setTab(TAB_IDS.HOBBIES)} 
              />
            </VTabList>
            <VerticalTabContent>
              <AboutCard className={`about-card ${this.getCardStyle(this.isActive(0))}`}>
                <div className="card-content">
                  <h3 className="center-align">About Me</h3>
                  <h5 className="center-align">Cloud | Software Engineer</h5>
                  <div className="divider" />
                  <p>
                    I am a passionate Software Engineer who loves dabbling in all parts of the development process.
                  </p>
                  <p>
                    From front-end to back-end and DevOps to infrastructure, I love seeing products come to life every step of the way.
                  </p>
                  <p>
                    I love nerding out over servers, automation, language nuances & design patterns.
                  </p>
                </div>
                <div className="card-action about-chips">
                  <span>Things I love:</span>
                  <div className="chip">React</div>
                  <div className="chip">NodeJs</div>
                  <div className="chip">AWS</div>
                  <div className="chip">Rust</div>
                  <div className="chip">CI/CD</div>
                </div>
              </AboutCard>
              <AboutCard className={`about-card ${this.getCardStyle(this.isActive(1))}`}>
                <div className="card-content">
                  <h3 className="center-align">Statistics</h3>
                  <div className="divider" />
                  <p>
                    I love nerding out over servers, automation, language nuances & design patterns.
                  </p>
                </div>
              </AboutCard>
              <AboutCard className={`about-card ${this.getCardStyle(this.isActive(2))}`}>
                <div className="card-content">
                  <h3 className="center-align">Hobbies</h3>
                  <div className="divider" />
                  <p>
                    I like to keep myself entertained.
                  </p>
                  <ul className="collection">
                    <li className="collection-item">Linux Distro</li>
                    <li className="collection-item">Tinkering with new tools!</li>
                    <li className="collection-item">Writing tech blogs!</li>
                    <li className="collection-item">Cooking!</li>
                    <li className="collection-item">Being a foodie!</li>
                  </ul>
                </div>
              </AboutCard>
            </VerticalTabContent>
          </VerticalTabWrapper>
        </div>
      </div>
    )
  }
}
