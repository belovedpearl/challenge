import React, { Component } from 'react';
import css from "./css/Content.module.css";
// import {savedPosts} from '../posts.json';
import PostItem from './PostItem';
import Loader from './Loader';
import axios from 'axios';
import API_KEY from '../secret'
import PostItemAPI from './PostItemAPI';

export class ContentAPI extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isLoaded: false,
      posts: {},
      savedPosts: []
    }
  }
  
//   getData() {
//     console.log('getData() called')
//     // setTimeout(() => {
//     //     console.log('Data fetched!')
//     //     this.setState({
//     //         isLoaded: true
//     //     })
//     // }, 2000)
    
//    }
componentDidMount() {

    // this.getData(),
    this.fetchImages()
}
async fetchImages(){
    const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&per_page=100`);
    const fetchedPosts = response.data.hits;

    this.setState({
                    isLoaded: true,
                    posts: fetchedPosts,
                    savedPosts: fetchedPosts
                })
}
handleChange = (event) => {
    const name = event.target.value.toLowerCase()
    // console.log(name)
    const filteredPosts = this.state.savedPosts.filter(post => {
        return post.user.toLowerCase().includes(name)
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
                <PostItemAPI savedPosts={this.state.posts} />
                : <Loader />
              }
          </div>
      </div>
  )
 }
}

export default ContentAPI