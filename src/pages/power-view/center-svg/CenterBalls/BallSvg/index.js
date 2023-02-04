import React from "react";

import styles from './style.less'

export default function Index(props) {
  return (
   <g className={styles['ball-svg']}>
    <image
     {...props}
    />
   </g>
  );
}
