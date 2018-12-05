import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Feed from './components/feed'

import Menu from './components/menu'


class App extends Component {
  
  render() {
    return (
      <div>
        <Menu/>
        <Feed/>
        
      </div>
    );
  }
}

export default App;
