/**
 * @author Paul Cheor Kim
 * @fileoverview The HTML content that represents the Contact section of the portfolio.
 */
import React, { PureComponent, Fragment } from 'react';
import MediaIcon from './content/social/mediaicon';

export default class SocialSection extends PureComponent {
  render() {
    return (
      <Fragment>
        <footer className='page-footer' style={{ background: 'inherit', textAlign: 'center' }}>
          <div className='container' style={{ color: 'white' }}>
            <div className='row'>
              <div className='col s12'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center'
                    }}
                  >
                    <span 
                      style={{
                        marginLeft: '8px',
                        marginRight: '8px'
                      }}
                    >
                      <MediaIcon 
                        href='https://www.linkedin.com/in/paul-c-kim/'
                        iconName='fa-linkedin-in'
                      />
                    </span>
                    <span
                      style={{
                        marginLeft: '8px',
                        marginRight: '8px'
                      }}
                    >
                      <MediaIcon 
                        href='https://github.com/paulckim'
                        iconName='fa-github'
                      />
                    </span>
                    <span
                      style={{
                        marginLeft: '8px',
                        marginRight: '8px'
                      }}
                    >
                      <MediaIcon 
                        href='https://www.instagram.com/facelesskoh/'
                        iconName='fa-instagram'
                      />
                    </span>
                  </div>
                </div>
            </div>

          </div>

          <div className='footer-copyright'>
            <div className='container'>© 2019 | All Rights Reserved</div>
          </div>
        </footer>
      </Fragment>
    );
  }
}
