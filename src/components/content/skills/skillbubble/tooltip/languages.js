import React, { PureComponent } from 'react';

class JavaSkillToolTip extends PureComponent {
  render() {
    return (
      <blockquote style={{
        maxWidth: 'calc(400px + 5rem)'
      }}>
        Java is programming language that is supports concurrency, class-based hierarchy and other common programming concepts. Within my professional career, I have mainly used Java and the JRE - its runtime environment counterpart - to develop Dockerized, REST MicroServices.
      </blockquote>
    );
  }
}

class NodeSkillToolTip extends PureComponent {
  render() {
    return (
      <blockquote style={{
        maxWidth: 'calc(400px + 5rem)'
      }}>
        Node is a phenomenal, asynchronous, JavaScript runtime environment and I have used it for many different phases of the software development lifecycle (e.g. development applications, build scripts, AWS lambdas, etc.). Usually, my go-to use cases for Node are Dockerized React applications for development and light-weight proxy servers.
      </blockquote>
    );
  }
}

class CppSkillToolTip extends PureComponent {
  render() {
    return (
      <blockquote style={{
        maxWidth: 'calc(400px + 5rem)'
      }}>
        A majority of my C++ experience comes from university projects and homework assignments. The most complex application that I created in C++ was a document search engine for a semester long upper division capstone. Our search engine was capable of indexing JSON files and performing search queries (e.g. AND, OR, AND NOT, PHRASE, etc.). The project also contained advanced features such as spelling correction (e.g. k-grams & Levenshtein Edit Distance) and naive machine learning (e.g. Document Classification with Rocchio Classification & Naive Bayesian).
      </blockquote>
    );
  }
}

export {
  JavaSkillToolTip, NodeSkillToolTip, CppSkillToolTip
}
