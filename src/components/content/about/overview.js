import React, { PureComponent, Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import TypingElement from './typingelement';
import './styles.css';

export default class Overview extends PureComponent {
  componentDidMount() {
    this._isMounted = true;
    const tabElem = window.document.getElementById('about-tabs');
    this._aboutTabInst = window.M.Tabs.init(tabElem, { swipeable: true });
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._isMounted = false;
    this._aboutTabInst.destroy();
    clearInterval(this._imgInterval);
  }

  render() {
    console.log(this.state);
    const { className, ...rest } = this.props;
    const styles = [ 'slide-content' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <h3 className='center-align'>I am</h3>
        <h5 
          className='center-align' 
          style={{ lineHeight: '1' }}
        >
          <TypingElement  insertDelay={150} deleteDelay={5000} 
            typeInterval={50} blinkPeriod={1200} 
            texts={[
              'A Cloud Software Engineer',
              'A Full Stack Engineer',
              'Passionate | Curious | Proud'
            ]}
          />
        </h5>
        <div className='divider' />

        <div
          className='card horizontal z-depth-5'
          style={{ background: 'rgb(77, 56, 89, 0.75)' }}
        >
          <div 
            className='card-image'
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <img 
              className='responsive-img'
              title='@Brooklyn Bridge (New York City, New York)' 
              src='https://lh3.googleusercontent.com/Ryx-hvN7843Rg07eLj-Q7GHL9R89UvHeIZZe7ObRQ9hH_QmZPwefwlhizCjC3_x8fr3BNqLOf_1qQ6wu40EkF1M80JJi8o1r3z033794EhanyG2ManzoMtqQpGDSNtYa4uOArL7lbAosA6ve5R7QJSU5M7vqya1HxfZXNnz3FQv63LMjzBrTNWZPVkad6yj7V7mq_t3_rxpK9alWzaYHB7fYlAdED75DulgkUmuKX8_ge-dmXYlTxEGLkGimttEM7rkp-zGZE_XBFsPOe5YfeAZzJDoUvDGy-v0uRYFzbWD9FKZp_nuQL9bFHaot0AdRs3U1_kQFdccXHqRxSi0EkYjxV3XqHF4qSq1He81K8V-KFVi74pP6tGOXkjBXTrCFyviYZzo1RdtBtdGskAxYOG_BHywy8IVPk4DySiI096qNFn5ktWrTi5yaDrcdjJTUoIbM9SO_ytqwG5i09AxCra3hjaHY17fmlG4Zw2t8RsgMsl9ElpSalkfhpCrcIXgBP7um9DktuFZNhPUKv5tztcYA4GPsMMe3KRwr6YTXVfmNRATZKDY8zjzDJiG_j-MaoF13gUQxl_xoNKSZDrpxPdIxiDw6lp1Ej-Cq5S9RpB4BHHW9aMSO_2EjQwIuUlmY_LwF4Qc4z6lNUq239po-Mw0mZhndyP_rnkDr2kUhboiqg1nR51AqxCTbK9wuGxts4J-sVoH1dxGeoScVdlm7jxRo=w2308-h1730-no' 
              alt='At the Brooklyn Bridge'
            />
          </div>
          
          <div className='card-stacked'>

            <CardTabs id='about-tabs'>
              <CardTabItem href='#personal-tab-content'>Personal</CardTabItem>
              <CardTabItem href='#education-tab-content'>Education</CardTabItem>
              <CardTabItem href='#open-letter-tab-content'>An Open Letter</CardTabItem>
            </CardTabs>

            <div className='card-content white-text'>
              <div id='personal-tab-content'>
                <div className='row'>
                  <div className='col s6'>Name:</div><div className='col s6'>Paul Kim</div>
                  <div className='col s6'>Ethnicity:</div><div className='col s6'>Korean</div>
                  <div className='col s6'>Age:</div><div className='col s6'>25</div>
                  <div className='col s6'>Location:</div><div className='col s6'>California</div>
                </div>
              </div>
              <div id='education-tab-content'>
                <h6>California State University, Long Beach</h6>
                <Degree 
                  major='Computer Engineering and Computer Science' 
                  degree='Bachelors of Science' 
                  year='2013 - 2017' gpa='3.33' 
                />
                <Degree 
                  major='Electrial Engineering' 
                  degree='[Incomplete]' 
                  year='2011 - 2013' gpa='--' 
                />
              </div>
              <div id='open-letter-tab-content'
                className='scroll-style' 
                style={{
                  overflowY: 'scroll'
                }}
              >
                <p>To whom it may concern,</p>
                <blockquote style={{ background: 'rgb(0, 0, 0, 0.4)' }}>
                  <p>
                    My name is Paul Kim and I am a cloud software engineer
                    <sup>
                      <i 
                        className='tooltipped material-icons'
                        data-position='top' 
                        data-tooltip={_SOFTWARE_ENGINEER_DEFINITION}
                        style={{
                          cursor: 'pointer',
                          fontSize: 'smaller',
                          whiteSpace: 'pre'
                        }}
                      >
                        priority_high
                      </i>
                    </sup> who loves 
                    dabbling in all parts of the development cycle. Passion, curiousity 
                    and pride are all traits that define who I am. Learning <i>how </i> 
                    to do things is never enough to satisfy my endless curiousity. I 
                    am the type of person that needs to know why things work the way 
                    they do and why things are the way they are. Often times, I find 
                    myself staying up all night just to understand why engineers made 
                    or make certain decisions that mold the current state of open-source 
                    communities and technologies.
                  </p>
                </blockquote>
                <p>Sincerely,</p>
                <p>Paul Kim</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }
}

class CardTabs extends PureComponent {
  render() {
    const { id } = this.props;
    return (
      <div className='card-tabs' style= {{ padding: 0 }}>
        <ul id={id} className='tabs tabs-fixed-width'>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class CardTabItem extends PureComponent {
  render() {
    const { href } = this.props;
    return (
      <li className='tab'>
        <a href={href} style={{ padding: 0 }}>
          {this.props.children}
        </a>
      </li>
    );
  }
}

class Degree extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className='row' style={{ marginBottom: '0' }}>
          <div className='col s3'>{this.props.year}</div>
          <div className='col s2'>Major:</div>
          <div className='col s7'>{this.props.major}</div>
        </div>

        <div className='row' style={{ marginBottom: '0' }}>
          <div className='col s2 offset-s3'>Degree:</div>
          <div className='col s7'>{this.props.degree}</div>
        </div>

        <div className='row' style={{ marginBottom: '0' }}>
          <div className='col s2 offset-s3'>GPA:</div>
          <div className='col s7'>{this.props.gpa}</div>
        </div>
      </Fragment>
    );
  }
}

/** 
<img 
  className='responsive-img'
  title='@Gobi Ice Cream (Cerritos, CA)' 
  src='https://lh3.googleusercontent.com/OKRTVsE6jkzWzDGMvIrJp-f_Ll6AlfHvC02wTEGtTzEsK9tcx7lfUcLrTo_T6NoslFTNor6n2EXWcg1Nkfj8rPgbm9Kpu98d-Soqs17w1CIFftXoQ2xO_uOwQJqCgY36Z6EG9-dQ8uddJ2W8232yZnmctIS_z9AXeQy6dj_MQisiPC9MgOuEoHkAA8LGEg76pUOYoHxw-0mH80BVhvuQiaOFY2mlWOSRdEFoKf2CrIykrDMFUnGWxUB-dxf6pROlW3yunFcauWabKYdbWLrPC16DDq3E_1hREdnai-ydWGCmGs1PWpE1_lSFnIe_35rDtaRO6KP4TR4GQhsi7P8PLRw2Bfh--ks5n32nwDqpUjU73FZ67-AwBRDwqheSZ5xnx7mSc-O5nXjDQgmJxQqBxfvPoY_sp9E_tdLNNNMdBPORw3QCgjrcp8IrwLzvCIGXD-HM-T3fLQF2mi3XpWNlP-PUFeo5Zvv6Fkq-CWL0QXhqN9-CcKnDFQlgv2Qt_2QD-TLJML3ZZBAYLX3ypSPeqpFcJYpoQOe25b5lnoKmNPmGdBfXIck2c8zLcINz2RANj4zCdY745HZbA5n7HosgGWZdGEZGT0Txm4-VuRlDF0obqjaUHZ197-Rsy14XC8XczHdc-Dx7M4BSlND-w3dHGaI8SEi7dE3Yy_IFLi8HW4yJRnbBU1Sx4SIHI6g-3nlQJTQ9ArSAK-P7nZxm11Nt03nQ=w1636-h1730-no' 
  alt={'I\'m always tired'}
/>
<button 
  className='btn-floating btn-large pulse'
  style={{
    alignItems: 'center',
    position: 'absolute'
  }}
>
  <i className='large material-icons'>chevron_right</i>
</button>
*/

class CloudEngineerDefinition extends PureComponent {
  render() {
    return (
      <blockquote style={{
        maxWidth: 'calc(500px + 5rem)'
      }}>
        A Cloud Software Engineer is responsible for creating 
        scalable and maintainable software that is hosted on 
        the Cloud - an abstract term for a complex networking 
        of components that make up the internet.
      </blockquote>
    );
  }
}

const _SOFTWARE_ENGINEER_DEFINITION = renderToString(
  <CloudEngineerDefinition />
);
