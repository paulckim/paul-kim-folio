import React, { PureComponent } from 'react';
import { renderToString } from 'react-dom/server';
import './styles.css';

export default class MoreSlide extends PureComponent {
  constructor(props) {
    super(props);
    this._tooltipRef = React.createRef();
  }
  
  componentDidMount() {
    this._isMounted = true;
    this._tooltipInst = window.M.Tooltip.init(
      this._tooltipRef.current,
      { exitDelay: 500 }
    );
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._tooltipInst.destroy();
    this._isMounted = true;
  }

  render() {
    const { className, ...rest } = this.props;
    const styles = ['row'];
    if(className) styles.push(className);
    return(
      <div className={styles.join(' ')} {...rest}>
        <div className='col s12 m12 l7'>
          <h5 className='center-align'>An Open Letter</h5>
          <div className='divider' />
          <p>To whom it may concern,</p>
          <blockquote
            className='scrollbar'
            style={{ maxHeight: 'calc(100px + 10vh)', overflowY: 'scroll' }}
          >
            <p>
              My name is Paul Kim, and I am a cloud software engineer
              <sup>
                <i 
                  ref={this._tooltipRef}
                  className='tooltipped material-icons'
                  data-position='top' 
                  data-tooltip={_SOFTWARE_ENGINEER_DEFINITION}
                  style={{
                    cursor: 'pointer',
                    fontSize: 'medium',
                    whiteSpace: 'pre'
                  }}
                >
                  priority_high
                </i>
              </sup> who loves to engage in every part of the development cycle. Curious, passionate, and proud are all traits that define who I am.
            </p>
            <p>
              Learning how to do things is never enough to satisfy my endless curiousity. I am the type of person who needs to know why things work the way they do, and why things are the way they are. I devote much of my time to learning and understanding the decisions made to mold our current state of open-source communities and technologies. I'll spend endless hours tinkering on personal projects, and reading a myriad of educational articles and books.
            </p>
            <p>
              My passion for software drives me to present the best solutions possible. I am thorough in the design process, relentlessly questioning and revising my own work before presenting it to others. Sometimes, I can't help but even debate with myself out loud! Odd habits like this allow me to formulate successful arguments and become a more confident individual.
            </p>
            <p>
              I believe that one should always take pride in their work, with a purpose-driven mindset to achieve quality end-products.
            </p>
          </blockquote>
          
          <p>Sincerely,</p>
          <p>Paul Kim</p>
        </div>
        <div className='col s10 offset-s1 m8 offset-m2 l5'>
          <img 
            className='responsive-img'
            title='@Gobi Ice Cream (Cerritos, CA)' 
            src='https://lh3.googleusercontent.com/OKRTVsE6jkzWzDGMvIrJp-f_Ll6AlfHvC02wTEGtTzEsK9tcx7lfUcLrTo_T6NoslFTNor6n2EXWcg1Nkfj8rPgbm9Kpu98d-Soqs17w1CIFftXoQ2xO_uOwQJqCgY36Z6EG9-dQ8uddJ2W8232yZnmctIS_z9AXeQy6dj_MQisiPC9MgOuEoHkAA8LGEg76pUOYoHxw-0mH80BVhvuQiaOFY2mlWOSRdEFoKf2CrIykrDMFUnGWxUB-dxf6pROlW3yunFcauWabKYdbWLrPC16DDq3E_1hREdnai-ydWGCmGs1PWpE1_lSFnIe_35rDtaRO6KP4TR4GQhsi7P8PLRw2Bfh--ks5n32nwDqpUjU73FZ67-AwBRDwqheSZ5xnx7mSc-O5nXjDQgmJxQqBxfvPoY_sp9E_tdLNNNMdBPORw3QCgjrcp8IrwLzvCIGXD-HM-T3fLQF2mi3XpWNlP-PUFeo5Zvv6Fkq-CWL0QXhqN9-CcKnDFQlgv2Qt_2QD-TLJML3ZZBAYLX3ypSPeqpFcJYpoQOe25b5lnoKmNPmGdBfXIck2c8zLcINz2RANj4zCdY745HZbA5n7HosgGWZdGEZGT0Txm4-VuRlDF0obqjaUHZ197-Rsy14XC8XczHdc-Dx7M4BSlND-w3dHGaI8SEi7dE3Yy_IFLi8HW4yJRnbBU1Sx4SIHI6g-3nlQJTQ9ArSAK-P7nZxm11Nt03nQ=w1636-h1730-no' 
            alt={'I\'m always tired'}
          />
        </div>
      </div>
    );
  }
}

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
