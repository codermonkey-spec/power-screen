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
    const group1 = dotLines.slice(0, 3).map((_, dotLineIndex) => {
      return itemDots.map((_, index) => {
        return (
          <circle className="cus-cls-blue" {...dotStyle} key={nanoid()}>
            <animateMotion {...defaultStyle} begin={index === 0 ? "0s" : "-3s"}>
              <mpath href={`#line_b_${dotLineIndex + 1}`}></mpath>
            </animateMotion>
          </circle>
        );
      });
    });

    const group2 = dotLines.slice(3).map((_, dotLineIndex) => {
      return itemDots.map((_, index) => {
        return (
          <circle className="cus-cls-orange" {...dotStyle} key={nanoid()}>
            <animateMotion {...defaultStyle} begin={index === 0 ? "0s" : "-3s"}>
              <mpath href={`#line_o_${dotLineIndex + 1}`}></mpath>
            </animateMotion>
          </circle>
        );
      });
    });

    return [group1, group2];
  };

  return renderDots();
}
