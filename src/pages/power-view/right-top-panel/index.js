import React from "react";

import styles from './style.less';

import WaterBall from './water-ball'

export default function Index({ percentage, panelItems = [] }) {

  return (
    <div className={styles['right-top-panel']}>
      <WaterBall percentage={percentage} />
    </div>
  );
}
