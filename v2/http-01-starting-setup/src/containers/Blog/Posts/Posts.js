import React, { Component } from "react";
import axios from "../../../axios";

import Post from "../../../components/Post/Post";

import "./Posts.css";

/**
 * @author dbatista
 */
class Posts extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    axios
      .get("/posts")
      .then((resp) => {
        const posts = resp.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((err) => {
        console.error(err);
        //this.setState({ error: true });
      });
  }

  postSelectedHandler = async (id) => {
    //console.log(id);
    //this.setState({ selectedPostId: id });

    this.props.history.push({
      pathname: "/" + id,
    });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          //<Link to={"/" + post.id}>
          <Post
            key={post.id}
            clicked={() => this.postSelectedHandler(post.id)}
            title={post.title}
            author={post.author}
          />
          //</Link>
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
