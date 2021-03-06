import React, { Component } from "react";
import axios from "../../../axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    const paramId = this.props.match.params.id;
    if (paramId) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== paramId)
      ) {
        axios.get(`/posts/${paramId}`).then((resp) => {
          //console.log(resp.data);
          this.setState({ loadedPost: resp.data });
        });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`).then((resp) => {
      console.log(resp);
    });
  };

  render() {
    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
