import React from "react";
import { nanoid } from "nanoid";

const itemDots = new Array(2).fill(0);
const dotLines = new Array(6).fill(0);

const defaultStyle = {
  dur: "6s",
  repeatCount: "indefinite",
  rotate: "auto",
};

const dotStyle = {
  cx: "0",
  cy: "0",
  r: "3",
};

export default function DotsAnimate() {
  const renderDots = () => {
    const groupNameList = ["blue", "orange"];

    return groupNameList.map((item) => {
      return dotLines.slice(0, 3).map((_, dotLineIndex) => {
        return itemDots.map((_, index) => (
          <circle className={`cus-cls-${item}`} {...dotStyle} key={nanoid()}>
            <animateMotion {...defaultStyle} begin={index === 0 ? "0s" : "-3s"}>
              <mpath
                href={`#line_${item.slice(0, 1)}_${dotLineIndex + 1}`}
              ></mpath>
            </animateMotion>
          </circle>
        ));
      });
    });
  };

  return renderDots();
}
