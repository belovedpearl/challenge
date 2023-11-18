import React, { Component } from 'react';
import css from "./css/Content.module.css";
import {savedPosts} from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';

export class Content extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: false,
      posts: {}
    }
  }
  
  getData() {
    console.log('getData() called')
    setTimeout(() => {
        console.log('Data fetched!')
        this.setState({
            isLoaded: true
        })
    }, 2000)
}
componentDidMount() {

    this.getData(),
    this.setState({
        posts: savedPosts
    })
}
handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    // console.log(name)
    const filteredPosts = savedPosts.filter(post => {
        return post.name.toLowerCase().includes(name)
    })
    // console.log(filteredPosts)
    this.setState({
        posts: filteredPosts
    })
}


render() {
  return (
      <div className={css.Content}>
          
          <div className={css.TitleBar}>
              <h1>My Photos</h1>
              <form>
                <label>Search: </label>
                <input 
                    onChange={(event) => this.handleChange(event)} 
                    type='search'
                    id= 'searchInput' 
                    placeholder='By Author'
                />
                <h4>Post found: {this.state.posts.length}</h4>
              </form>
          </div>

          <div className={css.SearchResults}>
              {
                this.state.isLoaded ?
                <PostItem savedPosts={this.state.posts} />
                : <Loader />
              }
          </div>
      </div>
  )
 }
}

export default Content