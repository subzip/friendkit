import React from "react";
import AddPost from "../../components/AddPost";
import Bar from "./Bar/Bar";
import s from "./Content.module.scss";
import Posts from "./Posts/Posts";
import Stories from "./Stories/Stories";

const Content = () => {
  return (
    <div className={s.body}>
      <div className={s.content}>
        <Bar />
        <div className={s.posts}>
          <AddPost />
          <Posts />
        </div>

        <Stories />
      </div>
    </div>
  );
};

export default Content;
