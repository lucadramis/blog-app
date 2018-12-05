import React, { Component } from 'react';



class Feed extends Component {
    constructor(props) {
        super(props);
        {
            this.state =
                { data: null }
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({ data }))
    }
    render() {
        return (
            <div>
                
                    <p>
                    
                    "id": ={this.state.data},
                    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit
                    molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"</p>
                  
                    

               
            </div>
        )
    }

}
export default Feed