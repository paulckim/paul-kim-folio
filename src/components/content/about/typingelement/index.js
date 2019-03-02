import React, { PureComponent, Fragment } from 'react';
import './styles.css';
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default class TypingElement extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isIdle: true,
      wasInserting: false,
      textIndex: 0,
      text: ''
    };
    this._textRef = React.createRef();

    this._pause = this._pause.bind(this);
    this._delete = this._delete.bind(this);
    this._insert = this._insert.bind(this);

    this._nextText = this._nextText.bind(this);
    this._getCursorStyle = this._getCursorStyle.bind(this);
    this._blinkStyle = {
      animation: `blink ${this.props.blinkPeriod}ms infinite normal`
    };
  }

  async _pause() {
    const { wasInserting } = this.state;
    if(wasInserting) await sleep(this.props.deleteDelay);
    else await sleep(this.props.insertDelay);
    await this.setState({
      ...this.state,
      wasInserting: !wasInserting,
      isIdle: false
    });
    if(wasInserting) await this._delete();
    else await this._insert();
  }

  async _delete() {
    const targetText = this._textRef.current.innerText;
    for(let i=targetText.length; i>=0; --i) {
      this._textRef.current.innerText = targetText.substr(0, i);
      await sleep(this.props.typeInterval);
    }
    await this.setState({ ...this.state, isIdle: true });
    this._pause();
  }

  async _insert() {
    const { textIndex } = this.state;
    const targetText = this.props.texts[textIndex];
    for(let i=1; i<=targetText.length; ++i) {
      this._textRef.current.innerText = targetText.substr(0, i);
      await sleep(this.props.typeInterval);
    }
    await this.setState({
      ...this.state, 
      isIdle: true, 
      textIndex: this._nextText()
    });
    this._pause();
  }

  async componentDidMount() {
    this._pause();
  }

  _nextText() {
    const nextIndex = this.state.textIndex + 1;
    return nextIndex !== this.props.texts.length 
      ? nextIndex : 0;
  }

  _getCursorStyle() {
    return this.state.isIdle ? this._blinkStyle : null;
  }

  render() {
    return (
      <Fragment>
        <span ref={this._textRef} />
        <span 
          className={`cursor`} 
          style={this._getCursorStyle()} 
        />
      </Fragment>
    );
  }
}
