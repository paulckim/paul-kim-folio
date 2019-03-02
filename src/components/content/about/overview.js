import React, { PureComponent, Fragment } from 'react';
import TypingElement from './typingelement';
import './styles.css';

export default class Overview extends PureComponent {
  componentDidMount() {
    this._isMounted = true;
    const tooltipElems = window.document.querySelectorAll('.tooltipped');
    this._instances = window.M.Tooltip.init(
      tooltipElems,
      { position: 'top' }
    );
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._isMounted = false;
    this._instances.destroy();
  }

  render() {
    const { className, ...rest } = this.props;
    const styles = [ 'v-content hidden' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <h3 className='center-align'>I am</h3>
        <h5 
          className='center-align' 
          style={{
            lineHeight: '1'
          }}
        >
          <TypingElement  insertDelay={150} deleteDelay={5000} 
            typeInterval={50} blinkPeriod={1200} 
            texts={[
              'A Full Stack Engineer',
              'A Cloud Engineer',
              'A Software Engineer',
              'Passionate | Curious | Proud'
            ]}
          />
        </h5>
        <div className='divider' />
        <div className='v-content-row'>
          <div className='v-content-col flex-center'
            style={{ flex: 4 }}
          >
            <img 
              className='stretch-img'
              title='@Brooklyn Bridge (New York City, New York)' 
              src='https://lh3.googleusercontent.com/Ryx-hvN7843Rg07eLj-Q7GHL9R89UvHeIZZe7ObRQ9hH_QmZPwefwlhizCjC3_x8fr3BNqLOf_1qQ6wu40EkF1M80JJi8o1r3z033794EhanyG2ManzoMtqQpGDSNtYa4uOArL7lbAosA6ve5R7QJSU5M7vqya1HxfZXNnz3FQv63LMjzBrTNWZPVkad6yj7V7mq_t3_rxpK9alWzaYHB7fYlAdED75DulgkUmuKX8_ge-dmXYlTxEGLkGimttEM7rkp-zGZE_XBFsPOe5YfeAZzJDoUvDGy-v0uRYFzbWD9FKZp_nuQL9bFHaot0AdRs3U1_kQFdccXHqRxSi0EkYjxV3XqHF4qSq1He81K8V-KFVi74pP6tGOXkjBXTrCFyviYZzo1RdtBtdGskAxYOG_BHywy8IVPk4DySiI096qNFn5ktWrTi5yaDrcdjJTUoIbM9SO_ytqwG5i09AxCra3hjaHY17fmlG4Zw2t8RsgMsl9ElpSalkfhpCrcIXgBP7um9DktuFZNhPUKv5tztcYA4GPsMMe3KRwr6YTXVfmNRATZKDY8zjzDJiG_j-MaoF13gUQxl_xoNKSZDrpxPdIxiDw6lp1Ej-Cq5S9RpB4BHHW9aMSO_2EjQwIuUlmY_LwF4Qc4z6lNUq239po-Mw0mZhndyP_rnkDr2kUhboiqg1nR51AqxCTbK9wuGxts4J-sVoH1dxGeoScVdlm7jxRo=w2308-h1730-no' 
              alt='At the Brooklyn Bridge'
            />
          </div>
          <div className='v-content-col'
            style={{ flex: 6 }}
          >
            <div
              className='card z-depth-5'
              style={{ background: 'rgb(77, 56, 89)' }}
            >
              <div className='card-content white-text'>

                <div className='row'>
                  <h6>Personal</h6>
                  <div className='divider' />
                  <div className='col s6'>
                    <ul>
                      <li>Name: Paul Kim</li>
                      <li>Ethnicity: Korean</li>
                      <li>Age: 25</li>
                    </ul>
                  </div>
                  <div className='col s6'>
                    <ul>
                      <li>Location: California</li>
                      <li>Hobbies: Coding, reading & cooking</li>
                    </ul>
                  </div>
                </div>
                
                <div className='row' style={{ marginBottom: '0' }}>
                  <h6>Education</h6>
                  <div className='divider' />
                  <h6>California State University, Long Beach</h6>
                  <Degree 
                    major='Electrial Engineering' 
                    degree='[Incomplete]' 
                    year='2011 - 2013' 
                    gpa='--' 
                  />
                  <Degree 
                    major='Computer Engineering and Computer Science' 
                    degree='Bachelors of Science' 
                    year='2013 - 2017' 
                    gpa='3.33' 
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
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
