import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

const Posts = (props) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  useEffect(() => {
    props.posts.unshift(props.newPost);
  }, [props.newPost]);
  return (
    <div>
      <h1>Post</h1>
      <div>
        {props.posts.map((x) => (
          <div key={x.id}>
            <h2>{x.title}</h2>
            <p>{x.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
};
//here state.posts is come from combineReducers
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
