import React from "react";
import s from "./AddPost.module.scss";
import { useDispatch } from "react-redux";
import { useState } from "react";

const AddPost = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const addPost = () => {
    dispatch({ type: "ADD_POST", value: value });
    setValue("");
  };

  return (
    <div className={s.post}>
      <textarea
        onChange={(e) => setValue(e.target.value)}
        type='text'
        value={value}
        placeholder='Write something about you...'
      />
      <div className={s.buttons}>
        <div className={s.image}>
          <svg
            viewBox='0 -2 18 18'
            xmlns='http://www.w3.org/2000/svg'
            fill='#000000'
            stroke='#000000'
            stroke-width='0.00018'
          >
            <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
            <g
              id='SVGRepo_tracerCarrier'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></g>
            <g id='SVGRepo_iconCarrier'>
              {" "}
              <path
                fill='#000000'
                fill-rule='evenodd'
                d='M565,248.002473 C565,247.448823 565.443717,247 565.999807,247 L569.502301,247 C569.777173,247 570.09954,246.80092 570.221932,246.556135 L570.778068,245.443865 C570.900637,245.198725 571.22788,245 571.491005,245 L576.508995,245 C576.780169,245 577.09954,245.19908 577.221932,245.443865 L577.778068,246.556135 C577.900637,246.801275 578.214844,247 578.497699,247 L582.000193,247 C582.552371,247 583,247.455761 583,248.002473 L583,257.997527 C583,258.551177 582.555054,259 582.006602,259 L565.993398,259 C565.444759,259 565,258.544239 565,257.997527 L565,248.002473 Z M566,248 L570.437394,248 C570.708303,248 571.024681,247.80092 571.14366,247.556135 L571.900024,246 L576.150024,246 L576.851148,247.536133 C576.968077,247.79232 577.287834,248 577.554307,248 L582,248 L582,258 L566,258 L566,248 Z M574,257 C576.209139,257 578,255.209139 578,253 C578,250.790861 576.209139,249 574,249 C571.790861,249 570,250.790861 570,253 C570,255.209139 571.790861,257 574,257 Z M574,256 C575.656854,256 577,254.656854 577,253 C577,251.343146 575.656854,250 574,250 C572.343146,250 571,251.343146 571,253 C571,254.656854 572.343146,256 574,256 Z M580,252 C580.552285,252 581,251.552285 581,251 C581,250.447715 580.552285,250 580,250 C579.447715,250 579,250.447715 579,251 C579,251.552285 579.447715,252 580,252 Z M567,246.5 C567,246.223858 567.214035,246 567.504684,246 L568.495316,246 C568.774045,246 569,246.231934 569,246.5 L569,247 L567,247 L567,246.5 Z'
                transform='translate(-565 -245)'
              ></path>{" "}
            </g>
          </svg>
          <span>Media</span>
        </div>
        <div className={s.publish} onClick={addPost}>
          <a>Publish</a>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
