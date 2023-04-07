import React from "react";
import s from "./Post.module.scss";
import ava from "../img/ava.png";
import postAva from "../img/1.jpg";

const Post = ({ name, post, photo }) => {
  return (
    <div className={s.post}>
      <div className={s.user}>
        <img src={ava} alt='' />
        <div className={s.desc}>
          <div className={s.name}>{name}</div>
          <div className={s.date}>July 25 2018, 01:03 pm</div>
        </div>
      </div>
      <div className={s.body}>{post}</div>
      {photo && (
        <div className={s.image}>
          <img src={photo} alt='' />
        </div>
      )}
    </div>
  );
};

export default Post;
