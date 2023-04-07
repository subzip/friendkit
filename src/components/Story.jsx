import React from "react";
import s from "./Story.module.scss";
import ava from "../img/ava.png";

const Story = () => {
  return (
    <div className={s.story}>
      <div className={s.ava}>
        <img src={ava} alt='' />
      </div>
      <div className={s.desc}>
        <div className={s.name}>Dan Walker</div>
        <span className={s.hour}>1 hour ago</span>
      </div>
    </div>
  );
};

export default Story;
