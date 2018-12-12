import React, { Component } from 'react';
import './App.css';
import User from './components/user'
import Menu from './components/menu'
import Liveclock from './components/clock.js'


class App extends Component {
  constructor(props) {
    super(props);
    {
        this.state ={ 
          post: [] }
    }
  } 
/*componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({post: data}));
}*/
  
  render() {
    return (
      <div>
        <Menu/>
        <Liveclock/>
        <User/>

        {/*this.state.post.map((item) =>
        <Post item = {item}/>)*/}
        
      </div>
    );
  }
}

export default App;
