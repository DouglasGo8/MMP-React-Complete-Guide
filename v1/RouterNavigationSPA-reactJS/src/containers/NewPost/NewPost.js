import React, { Component } from "react";
import axios from "axios";

import "./NewPost.css";

/**
 * @author dbatista
 */
class NewPost extends Component {
  state = {
    title: "",
    body: "",
    author: "DouglasDb"
  };

  postDataHandler = async () => {
    const data = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    const response = await axios.post("/posts/", data);

    console.log(response.data);
  };

  async componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ body: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="DouglasDb">Douglas</option>
          <option value="Ketty">Ketty</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;
