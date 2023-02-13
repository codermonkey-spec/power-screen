import React from "react";
import { ballsData } from "./utils";
import styles from "./style.less";

import BaseSvg from "./BaseSvg";
import DotsAnimate from "./DotsAnimate";
import CenterBalls from "./CenterBalls";

const childNames = ["DotsAnimate", "BallSvg"];
const lingxImgNum = 6;
const A_ASCII = 65;

const lingxImgNames = new Array(lingxImgNum)
  .fill(A_ASCII)
  .map((item, index) => `lingx${String.fromCharCode(item + index)}`);

export default function Index() {
  return (
    <div className={styles["center-svg"]}>
      <BaseSvg childNames={childNames}>
        <DotsAnimate />
        <CenterBalls data={ballsData} />
      </BaseSvg>

      {lingxImgNames.map((item) => (
        <img
          key={item}
          className={item}
          src={require(`@/assets/images/ling/${item}.png`)}
          alt=""
        />
      ))}
    </div>
  );
}
