import React,{useEffect, useRef} from "react";
import 'echarts-liquidfill'
import { useEcharts } from "@/hooks";

import styles from './style.less'

export default function Index({ size = "190px", percentage = 0 }) {
  const waterRef = useRef(null);
  const chartsInstance = useEcharts(waterRef);

  useEffect(() => {
    renderWaterBall()
  }, [percentage]);

  const renderWaterBall = () => {
    if (!chartsInstance) return;

    const option = {
      color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
      series: [{
          type: 'liquidFill',
          data: [percentage / 100]
      }],
  };
    chartsInstance.setOption(option);
  };

  return (
    <div ref={waterRef} className={styles['water-ball']}></div>
  );
}
