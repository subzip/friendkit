import React from "react";
import s from "./Bar.module.scss";
import { useState } from "react";
import { Menu } from "antd";

const Bar = () => {
  const [selected, select] = useState(1);

  const getItem = (label, key, children, type) => {
    return {
      key,
      children,
      label,
      type,
    };
  };

  const items = [
    getItem("Feed", "sub1", [
      getItem("Trending", "1"),
      getItem("Popular", "2"),
      getItem("Following", "3"),
    ]),
    getItem("Questions", "sub2", [
      getItem("Trending", "4"),
      getItem("Popular", "5"),
      getItem("Following", "6"),
    ]),
    getItem("Videos", "sub3", [
      getItem("Trending", "7"),
      getItem("Popular", "8"),
      getItem("Following", "9"),
    ]),
    getItem("Shopping", "sub4", [
      getItem("Trending", "10"),
      getItem("Popular", "11"),
      getItem("Following", "12"),
    ]),
    getItem("Music", "sub5", [
      getItem("Trending", "13"),
      getItem("Popular", "14"),
      getItem("Following", "15"),
    ]),
  ];

  return (
    // <Slide bottom>
    //   <div className={s.bar}>
    //     <div className={s.feed}>
    //       <span
    //         className={selected === 1 ? s.activeS : s.disable}
    //         onClick={() => {
    //           select(1);
    //         }}
    //       >
    //         Feed
    //       </span>
    //       <div className={selected === 1 ? s.active : s.disabled}>
    //         <div>Trending</div>
    //         <div>Popular</div>
    //         <div>Following</div>
    //       </div>
    //     </div>
    //     <div className={s.quest}>
    //       <span
    //         className={selected === 2 ? s.activeS : s.disable}
    //         onClick={() => {
    //           select(2);
    //         }}
    //       >
    //         Questions
    //       </span>
    //       <div
    //         className={
    //           selected === 2 ? s.active + " " + s.animation : s.disabled
    //         }
    //       >
    //         <div>Home</div>
    //         <div>My Questions</div>
    //         <div>Popular</div>
    //       </div>
    //     </div>
    //     <div className={s.videos}>
    //       <span
    //         className={selected === 3 ? s.activeS : s.disable}
    //         onClick={() => {
    //           select(3);
    //         }}
    //       >
    //         Videos
    //       </span>
    //       <div className={selected === 3 ? s.active : s.disabled}>
    //         <div>Home</div>
    //         <div>Suggested</div>
    //         <div>My channel</div>
    //       </div>
    //     </div>
    //     <div className={s.shop}>
    //       <span
    //         className={selected === 4 ? s.activeS : s.disable}
    //         onClick={() => {
    //           select(4);
    //         }}
    //       >
    //         Shopping
    //       </span>
    //       <div className={selected === 4 ? s.active : s.disabled}>
    //         <div>Trending</div>
    //         <div>Popular</div>
    //         <div>My products</div>
    //       </div>
    //     </div>
    //     <div className={s.music}>
    //       <span
    //         className={selected === 5 ? s.activeS : s.disable}
    //         onClick={() => {
    //           select(5);
    //         }}
    //       >
    //         Music
    //       </span>
    //       <div className={selected === 5 ? s.active : s.disabled}>
    //         <div>My products</div>
    //         <div>Trending</div>
    //         <div>Popular</div>
    //       </div>
    //     </div>
    //   </div>
    // </Slide>
    <Menu
      mode='inline'
      // openKeys={openKeys}
      // onOpenChange={onOpenChange}
      style={{ width: 306 }}
      className={s.bar}
      items={items}
    />
  );
};

export default Bar;
