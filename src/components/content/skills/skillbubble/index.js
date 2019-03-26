import React, { PureComponent } from 'react';

export default class SkillBubble extends PureComponent {
  constructor(props) {
    super(props);
    this._skillBubbleRef = React.createRef();
  }

  componentDidMount() {
    this._isMounted = true;
    this._tooltipInst = window.M.Tooltip.init(
      this._skillBubbleRef.current
    );
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._tooltipInst.destroy();
    this._isMounted = false;
  }

  render() {
    const { text, tooltipText } = this.props;
    return (
      <span 
        ref={this._skillBubbleRef}
        className='chip tooltipped'
        data-position='top'
        data-tooltip={tooltipText}
        style={{ cursor: 'pointer' }}
      >
        {text}
      </span>
    );
  }
}

