import React, { Component } from 'react';



class Post extends Component {
    
    

    render() {
        let item = this.props.item
        return (
            <div className = "post">
            <div id = "id">{item.id}</div>
            <div id = "title">{item.title}</div>
            <div id ="body">{item.body}</div>

            </div>
        )
    }

}
export default Post