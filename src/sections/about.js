/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the About Me section of the portfolio.
 */
import React, { PureComponent } from "react";
import {
  VerticalTabWrapper,
  VerticalTab,
  VerticalTabContent,
  Tab
} from "./components";
import "./styles/about.css";

export default class AboutSection extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { currTab: 0 };
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
    return isActive ? "tab-active" : "";
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
      <div className="about-style  dark-theme">
        <div className="container">
          <VerticalTabWrapper>
            <VerticalTab>
              <Tab 
                className={this.getTabStyle(this.isActive(0))} 
                icon="account_box" tabLabel="Biography" 
                onClick={() => this.setTab(0)} 
              />
              <Tab 
                className={this.getTabStyle(this.isActive(1))} 
                icon="account_box" tabLabel="Stats"
                onClick={() => this.setTab(1)}
              />
              <Tab 
                className={this.getTabStyle(this.isActive(2))} 
                icon="account_box" tabLabel="Hobbies"
                onClick={() => this.setTab(2)}
              />
            </VerticalTab>
            <VerticalTabContent>
              <div className={`card about-card ${this.getCardStyle(this.isActive(0))}`}>
                <div className="card-content">
                  <h3 className="center-align">About Me</h3>
                  <h5 className="center-align">Cloud | Software Engineer</h5>
                  <div className="divider" />
                  <p>
                    I am a passionate Software Engineer who loves dabbling in all parts of the development process. From front-end to back-end and DevOps to infrastructure, I love seeing products come to life every step of the way.
                  </p>
                  <p>
                    I love nerding out over proxy servers, automation, language nuances & design patterns.
                  </p>
                </div>
                <div className="card-action about-chips">
                  <span>Things I love:</span>
                  <div className="chip">React</div>
                  <div className="chip">NodeJs</div>
                  <div className="chip">AWS</div>
                </div>
              </div>
              <div className={`card about-card ${this.getCardStyle(this.isActive(1))}`}>
                <div className="card-content">
                  <h3 className="center-align">Statistics</h3>
                  <div className="divider" />
                  <p>
                    I love nerding out over proxy servers, automation, language nuances & design patterns.
                  </p>
                </div>
              </div>
              <div className={`card about-card ${this.getCardStyle(this.isActive(2))}`}>
                <div className="card-content">
                  <h3 className="center-align">Hobbies</h3>
                  <div className="divider" />
                  <p>
                    I like to keep myself entertained.
                  </p>
                  <p>
                    <ul>
                      <li>Tinkering with my laptop!</li>
                      <li>Tinkering with new tools!</li>
                      <li>Writing tech blogs!</li>
                      <li>Cooking!</li>
                      <li>Being a foodie!</li>
                    </ul>
                  </p>
                </div>
              </div>
            </VerticalTabContent>
          </VerticalTabWrapper>
        </div>
      </div>
    )
  }
}
