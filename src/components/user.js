import React, { Component } from 'react';



class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: []
    }

  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/'+ this.props.id)
      .then(response => response.json())
      .then(res => this.setState({ user: res }));
      //.then( res => console.log({}))


  }

  render() {
    
    return (

      <div >
        <div id="id"></div>
        <div id="name">name {this.state.user.name}</div>
        <div id="username">username {this.state.user.username}</div>
        <div id="email">email {this.state.user.username}</div>


      </div>
    )
  }

}
export default User