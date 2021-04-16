import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";

import "./Posts.css";

/**
 *
 */
class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false
  };

  async componentDidMount() {
    console.log(this.props);
    try {
      const response = await axios.get("/posts");
      const posts = response.data.slice(0, 4);

      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Douglas"
        };
      });

      this.setState({ posts: updatedPosts });
    } catch (e) {
      console.error(e);
      //this.setState({ error: true });
    }
  }

  postSelectedHandler = async id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    const post = this.state.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          author={post.author}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      );
    });
    return <section className="Posts">{post}</section>;
  }
}

export default Posts;
