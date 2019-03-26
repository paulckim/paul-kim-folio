/**
 * @author Paul Cheor Kim
 * @fileoverview 
 */
import React, { PureComponent } from 'react';
import HighCharts from 'highcharts';

export default class SkillChart extends PureComponent {
  constructor(props) {
    super(props);
    this._skillChartRef = React.createRef();
  }
  
  componentDidMount() {
    this._isMounted = true;
    const { name, data } = this.props;
    this._skillChartInst = HighCharts.chart(
      this._skillChartRef.current,
      chartOptions(name, data)
    );
  }

  componentWillUnmount() {
    if(!this._isMounted) return;
    this._skillChartInst.destroy();
    this._isMounted = false;
  }

  render() {
    if(this._skillChartInst) {
      this._skillChartInst.destroy();
      const { name, data } = this.props;
      this._skillChartInst = HighCharts.chart(
        this._skillChartRef.current,
        chartOptions(name, data)
      );
    }
    return (
      <div ref={this._skillChartRef} />
    );
  }
}

/**
 * 
 * @param {string} name 
 * @param {*} data 
 */
function chartOptions(name, data) {
  return {
    chart: {
      type: 'pie',
      backgroundColor: {
        linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
        stops: [ [0, '#2a2a2b'], [1, '#3e3e40'] ]
      }
    },
    title: {
      text: name,
      style: { color: 'white' }
    },
    tooltip: {
      pointFormat: '<span>Score: {point.y:.1f}/100</span>'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<span>{point.name}</span>'
        }
      }
    },
    series: [
      {
        name: name,
        data: data
      }
    ]
  }
}