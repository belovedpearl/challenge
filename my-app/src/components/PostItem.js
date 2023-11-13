import React from 'react'
import css from "./css/PostItem.module.css";

function PostItem(props) {
    const savedPost = props.savedPost
  return (
    <div>
        <h5>{savedPost.title}</h5>
        <p>{savedPost.name}</p>
        <img src={savedPost.image}/>
        <p>{savedPost.description}</p>
    </div>
  )
}

export default PostItem