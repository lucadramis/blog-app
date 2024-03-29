import React, { Component } from 'react';
import './App.css';
import Post from './components/post'
import Menu from './components/menu'


class App extends Component {
  constructor(props) {
    super(props);
    {
        this.state =
            { post: [] }
    }
  } 
componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({post: data}));
}
  
  render() {
    return (
      <div>
        <Menu/>

        {this.props.item.map((item) =>
        <Post item = {item}/>)}
        
      </div>
    );
  }
}

export default App;
