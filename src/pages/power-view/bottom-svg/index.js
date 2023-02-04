import React, { useEffect } from "react";
import classNames from "classnames";
import { CountUp } from "countup.js";

import styles from './style.less'

export default function Index({ panelItems = [] }) {

  useEffect(() => {
    startAnimation(panelItems)
  },[panelItems])

  const startAnimation = (panelItems = []) => {
    const option1 = {
      decimalPlaces: 1, // 保留一位小数点
      duration: 2,
      useGrouping: false, // 1000 -> 1,000
    };
    const option2 = {
      decimalPlaces: 1, // 保留一位小数点
      duration: 2,
      useGrouping: false, // 1000 -> 1,000
      suffix: "%",
    };
    panelItems.forEach((item) => {
      new CountUp(`total-num-${item.id}`, item.totalNum, option1).start();
      new CountUp(
        `percentage-num-${item.id}`,
        item.percentage,
        option2
      ).start();
    });
  };

  return (
    <div className={styles['bottom-content']}>
      {panelItems.map((item) => {
        return (
          <div className={classNames("item", `panel${item.id}`)} key={item.id}>
            <div className="pan-left">
              <div className="title">{item.title}</div>
              <span id={`total-num-${item.id}`} className="number">
                {item.totalNum}
              </span>
              <span className="unit">{item.unit}</span>
            </div>
            <div className="pan-right">
              <span
                className={classNames(
                  "triangle",
                  item.isUp ? "up-triangle" : "down-triangle"
                )}
              ></span>
              <span id={`percentage-num-${item.id}`} className="percentage">
                {item.percentage}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
