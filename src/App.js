import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Dome from './components/Dome';

export default class App extends Component {
  componentDidMount() {
    console.log('good');
  }
  render() {
    return (
      <div>
        <Header />
        <About />
        <Skill />
        <Experience />
        <Dome />
      </div>
    );
  }
}
