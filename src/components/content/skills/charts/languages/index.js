import React, { PureComponent } from 'react';
import Chart from 'chart.js';
import './styles.css';

export default class LanguageChart extends PureComponent {
  componentDidMount() {
    const canvasElem = window.document.getElementById('language-chart');
    this._languageChart = new Chart(canvasElem, {
      type: 'radar',
      data: {
        labels: [ 'Java', 'JavaScript', 'Python', 'C/C++' ],
        datasets: [
          {
            label: 'Experience',
            fill: true,
            backgroundColor: 'rgba(179, 181, 198, 0.2)',
            borderColor: 'rgba(179, 181, 198, 1)',
            pointBorderColor: '#fff',
            pointBackgroundColor: 'rgba(179, 181, 198, 1)',
            data: [ 65, 75, 40, 40 ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Programming Language Strength'
        }
      }
    });
  }

  render() {
    return (
      <canvas 
        id='language-chart' 
        className='language-chart-style'
      />
    );
  }
}


/**
 * 
 * (Languages)
 * Java
 * JavaScript/ TypeScript
 * Python
 * C/C++
 * 
 * (Systems & Infrastructure)
 * Lambda
 * CloudFormation
 * CloudWatch
 * CloudTrail
 * ELB
 * ECS
 * Fargate
 * API Gateway
 * S3
 * Aurora
 * PostGreSql
 * NGINX
 * Docker
 * 
 * (Libraries, Frameworks & APIs)
 * Spring Boot
 * Express
 * Mocha
 * Sinon
 * React
 * Unstated
 * Redux
 * React Router
 * Materialize CSS
 * Boostrap
 * GraphQL
 * 
 * (Dev. Tools)
 * GitLab CI
 * Circle CI
 * Visual Studio Code
 * Docker Compose
 * Eclipse
 * Gradle
 * Gulp
 * NPM
 * Yarn
 * Git
 * 
 * 
 * 
 * 
 * 
 */