import React, { Component } from "react";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";
import PropTypes from "prop-types";
export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    //call action here
    this.props.createPost(post);
  }
  render() {
    return (
      <div>
        <h1>AddPost</h1>
        <form onSubmit={this.onSubmit}>
          title:
          <input
            type="text"
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          body:
          <textarea
            type="text"
            value={this.state.body}
            name="body"
            onChange={this.onChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propType = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
