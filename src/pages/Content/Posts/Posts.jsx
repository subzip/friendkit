import React from "react";
import Post from "../../../components/Post";
import { useSelector, useDispatch } from "react-redux";

const Posts = () => {
  const post = useSelector((store) => store.postReducer.posts);

  let posts = post.map((el, i) => (
    <Post key={i} name={el.name} post={el.post} photo={el.photo} />
  ));

  return <div>{posts}</div>;
};

export default Posts;
