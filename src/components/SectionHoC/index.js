import React, { Component } from 'react';

/**
 * 
 * @param {React.Component} Child 
 */
export default function SectionHoC(Child) {
  return class extends Component {
    render() {
      return (
        <div>
          <Child {...this.props} />
        </div>
      )
    }
  }
}
