
import React, {useState, useEffect} from 'react'
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

function ContentHooks() {
    // isLoaded and fetchedPosts
  const [isLoaded, setIsloaded] = useState(false)
  const [fetchedPosts, setFetchedPosts] = useState([])
  useEffect(() => {
    const getData = setInterval(() => {
        console.log('interval executed')
        setIsloaded(true);
        setFetchedPosts(savedPosts);

        clearInterval(getData);
    }, 2000);
    }, [])

    const handleChange = (event) => {
      const name = event.target.value.toLowerCase()
      // console.log(name)
      const filteredPosts = savedPosts.filter(post => {
          return post.name.toLowerCase().includes(name)
      })
      setFetchedPosts(filteredPosts);
    }
  

  return (
        <div className={css.Content}>
          
          <div className={css.TitleBar}>
              <h1>My Photos</h1>
              <form>
                <label>Search: </label>
                <input 
                    onChange={handleChange} 
                    type='search'
                    id= 'searchInput' 
                    placeholder='By Author'
                />
                <h4>Post found: {fetchedPosts.length}</h4>
              </form>
          </div>
          
          <div className={css.SearchResults}>
              {isLoaded ? (
                <PostItem savedPosts={fetchedPosts} />
              ) : (
                <Loader />
              )}
          </div>
      </div>
         
  )
}

export default ContentHooks