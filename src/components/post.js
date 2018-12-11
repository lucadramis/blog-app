import React, { Component } from 'react';
import '../css/post.css'


class Post extends Component {
    
    

    render() {
        
        return (
            <div className = "post">
            <div id = "id">{this.props.id}</div>
            <div id = "title">{this.props.title}</div>
            <div id ="body">{this.props.body}</div>

            </div>
        )
    }

}
export default Post