import React, { PureComponent } from 'react';
import { renderToString } from 'react-dom/server';
import './styles.css';

export default class More extends PureComponent {
  render() {
    const { className, ...rest } = this.props;
    const styles = [ 'v-content hidden' ];
    if(className) styles.push(className);
    return (
      <div className={styles.join(' ')} {...rest}>
        <h3 className='center-align'>An Open Letter</h3>
        <h5 className='center-align'>A moment of honesty and clarity</h5>
        <div className='divider' />
        <div className='v-content-row'>
          <div className='v-content-col'
            style={{ flex: 7 }}
          >
            <p>To whom it may concern,</p>
            <blockquote>
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
                communities and technologies. Understanding not only quenches my 
                insatiable thirst to learn, but also instills me with the wisdom 
                and knowledge to become a better engineer.
              </p>
              <p>
                Although I am young, my passion for software enables me to present 
                the best solutions I can possibly offer by relentlessly revising 
                and questioning of my own work. I like to argue out loud with 
                myself before bringing my thoughts and opinions to others. I do 
                this - besides ocd and habit - to improve my thought process, 
                produce better arguments and become a more confident individual. 
                I believe that pride is the first and most important step to 
                producing quality work and that actions in life are meaningless 
                if there is no reasoning.
              </p>
            </blockquote>
            <p>Sincerely,</p>
            <p>Paul Kim</p>
          </div>
          <div className='v-content-col flex-center'
            style={{ flex: 3 }}
          >
            <img 
              className='stretch-img'
              title='@Gobi Ice Cream (Cerritos, CA)' 
              src='https://lh3.googleusercontent.com/OKRTVsE6jkzWzDGMvIrJp-f_Ll6AlfHvC02wTEGtTzEsK9tcx7lfUcLrTo_T6NoslFTNor6n2EXWcg1Nkfj8rPgbm9Kpu98d-Soqs17w1CIFftXoQ2xO_uOwQJqCgY36Z6EG9-dQ8uddJ2W8232yZnmctIS_z9AXeQy6dj_MQisiPC9MgOuEoHkAA8LGEg76pUOYoHxw-0mH80BVhvuQiaOFY2mlWOSRdEFoKf2CrIykrDMFUnGWxUB-dxf6pROlW3yunFcauWabKYdbWLrPC16DDq3E_1hREdnai-ydWGCmGs1PWpE1_lSFnIe_35rDtaRO6KP4TR4GQhsi7P8PLRw2Bfh--ks5n32nwDqpUjU73FZ67-AwBRDwqheSZ5xnx7mSc-O5nXjDQgmJxQqBxfvPoY_sp9E_tdLNNNMdBPORw3QCgjrcp8IrwLzvCIGXD-HM-T3fLQF2mi3XpWNlP-PUFeo5Zvv6Fkq-CWL0QXhqN9-CcKnDFQlgv2Qt_2QD-TLJML3ZZBAYLX3ypSPeqpFcJYpoQOe25b5lnoKmNPmGdBfXIck2c8zLcINz2RANj4zCdY745HZbA5n7HosgGWZdGEZGT0Txm4-VuRlDF0obqjaUHZ197-Rsy14XC8XczHdc-Dx7M4BSlND-w3dHGaI8SEi7dE3Yy_IFLi8HW4yJRnbBU1Sx4SIHI6g-3nlQJTQ9ArSAK-P7nZxm11Nt03nQ=w1636-h1730-no' 
              alt={'I\'m always tired'}
            />
          </div>
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
