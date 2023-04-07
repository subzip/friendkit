import React from "react";
import Story from "../../../components/Story";
import s from "./Stories.module.scss";

const Stories = () => {
  return (
    <div className={s.story}>
      <div className={s.name}>Stories</div>
      <div className={s.body}>
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
    </div>
  );
};

export default Stories;
