import React from 'react'
import css from "./css/PostItem.module.css";

function PostItemAPI(props) {
    return (
      props.savedPosts.map(post => {
          // Extra task destructuring 
          const {id,type, user, webformatURL, tags} = post
          return <div className={css.SearchItem} key={id}>
              <p>{type}</p>
              <p>{user}</p>
              <img src={webformatURL} alt="random"/>
              <p>{tags}</p>
          </div>
          }
      )
  )
}

export default PostItemAPI