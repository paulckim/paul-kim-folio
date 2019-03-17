import React, { PureComponent, Fragment } from 'react';
import './styles.css';

export default class OverviewSlide extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = ['row'];
    if(className) styles.push(className);
    return(
      <div className={styles.join(' ')} {...rest}>
        <div className='col s12 m12 l6'>
          <img 
            className='responsive-img'
            title='@Brooklyn Bridge (New York City, New York)' 
            src='https://lh3.googleusercontent.com/Ryx-hvN7843Rg07eLj-Q7GHL9R89UvHeIZZe7ObRQ9hH_QmZPwefwlhizCjC3_x8fr3BNqLOf_1qQ6wu40EkF1M80JJi8o1r3z033794EhanyG2ManzoMtqQpGDSNtYa4uOArL7lbAosA6ve5R7QJSU5M7vqya1HxfZXNnz3FQv63LMjzBrTNWZPVkad6yj7V7mq_t3_rxpK9alWzaYHB7fYlAdED75DulgkUmuKX8_ge-dmXYlTxEGLkGimttEM7rkp-zGZE_XBFsPOe5YfeAZzJDoUvDGy-v0uRYFzbWD9FKZp_nuQL9bFHaot0AdRs3U1_kQFdccXHqRxSi0EkYjxV3XqHF4qSq1He81K8V-KFVi74pP6tGOXkjBXTrCFyviYZzo1RdtBtdGskAxYOG_BHywy8IVPk4DySiI096qNFn5ktWrTi5yaDrcdjJTUoIbM9SO_ytqwG5i09AxCra3hjaHY17fmlG4Zw2t8RsgMsl9ElpSalkfhpCrcIXgBP7um9DktuFZNhPUKv5tztcYA4GPsMMe3KRwr6YTXVfmNRATZKDY8zjzDJiG_j-MaoF13gUQxl_xoNKSZDrpxPdIxiDw6lp1Ej-Cq5S9RpB4BHHW9aMSO_2EjQwIuUlmY_LwF4Qc4z6lNUq239po-Mw0mZhndyP_rnkDr2kUhboiqg1nR51AqxCTbK9wuGxts4J-sVoH1dxGeoScVdlm7jxRo=w2308-h1730-no' 
            alt='At the Brooklyn Bridge'
          />
        </div>
        <div className='col s12 m12 l6'>
          <h5 className='center-align'>Personal</h5>
          <div className='divider' />
          <div className='row'>
            <div className='col s6 l3'>Name:</div><div className='col s6 l9'>Paul Kim</div>
            <div className='col s6 l3'>Ethnicity:</div><div className='col s6 l9'>Korean</div>
            <div className='col s6 l3'>Age:</div><div className='col s6 l9'>25</div>
            <div className='col s6 l3'>Location:</div><div className='col s6 l9'>California</div>
          </div>
          <h5 className='center-align'>Education</h5>
          <div className='divider' />
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
          <div className='col s6'>{this.props.major}</div>
        </div>

        <div className='row' style={{ marginBottom: '0' }}>
          <div className='col s2 offset-s3'>Degree:</div>
          <div className='col s6'>{this.props.degree}</div>
        </div>

        <div className='row' style={{ marginBottom: '0' }}>
          <div className='col s2 offset-s3'>GPA:</div>
          <div className='col s6'>{this.props.gpa}</div>
        </div>
      </Fragment>
    );
  }
}
