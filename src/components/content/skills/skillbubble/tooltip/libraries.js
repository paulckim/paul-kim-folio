import React, { PureComponent } from 'react';

class HttpServerToolTip extends PureComponent {
  render() {
    return (
      <blockquote>
        <ul>
          <li>Spring Boot</li>
          <li>Express</li>
        </ul>
      </blockquote>
    );
  }
}

class WebAppToolTip extends PureComponent {
  render() {
    return (
      <blockquote>
        <ul><li>React</li></ul>
      </blockquote>
    );
  }
}

class CssLibraryToolTip extends PureComponent {
  render() {
    return (
      <blockquote>
        <ul>
          <li>Materialize CSS</li>
          <li>BootStrap</li>
        </ul>
      </blockquote>
    );
  }
}

class UnitTestToolTip extends PureComponent {
  render() {
    return (
      <blockquote>
        <ul>
          <li>Mocha</li>
          <li>JUnit</li>
          <li>Spring MockMvc</li>
          <li>Python Unittest</li>
        </ul>
      </blockquote>
    );
  }
}

class StubMockToolTip extends PureComponent {
  render() {
    return (
      <blockquote>
        <ul>
          <li>Sinon</li>
          <li>BDDMockito</li>
          <li>EasyMock</li>
        </ul>
      </blockquote>
    );
  }
}

export {
  HttpServerToolTip, 
  WebAppToolTip, 
  CssLibraryToolTip, 
  UnitTestToolTip, 
  StubMockToolTip
}
