import React from "react";
import { ballsData } from "./utils";
import styles from "./style.less";

import BaseSvg from "./BaseSvg";
import DotsAnimate from "./DotsAnimate";
import CenterBalls from "./CenterBalls";

const childNames = ["DotsAnimate", "BallSvg"];

export default function Index() {

  return (
    <div className={styles["center-svg"]}>
      <BaseSvg childNames={childNames}>
        <DotsAnimate />
        <CenterBalls data={ballsData} />
      </BaseSvg>

      <img
        className="lingxA"
        src={require("@/assets/images/ling/lingxA.png")}
        alt=""
      />
      <img
        className="lingxB"
        src={require("@/assets/images/ling/lingxB.png")}
        alt=""
      />
      <img
        className="lingxC"
        src={require("@/assets/images/ling/lingxC.png")}
        alt=""
      />
      <img
        className="lingxD"
        src={require("@/assets/images/ling/lingxD.png")}
        alt=""
      />
      <img
        className="lingxE"
        src={require("@/assets/images/ling/lingxE.png")}
        alt=""
      />
      <img
        className="lingxF"
        src={require("@/assets/images/ling/lingxF.png")}
        alt=""
      />
    </div>
  );
}
