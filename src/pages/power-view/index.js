import React,{useEffect, useState} from "react";
import styles from "./style.less";
import {
  pieData,
  processMonitoringData,
  chargingStatisticsData,
} from "./mockData";

import {getPowerScreenData} from '../../services'

import PieCharts from "./pie-charts";
import LineCharts from "./line-charts";
import BarCharts from "./bar-charts";
import Heart from './heart'

export default function Index() {
  const [chartsData,setChartsData] = useState({})
  useEffect(() => {
    getPowerScreenData().then(res => {
      console.log('res',res)
      setChartsData(res?.data)
    })
  },[])

  return (
    <div className={styles["screen-bg"]}>
      <div className="header"></div>
      <div className="left-top">
        <PieCharts chartsData={chartsData?.chargingPile?.data} />
      </div>
      <div className="left-bottom">
        <LineCharts chartsData={chartsData?.processMonitoring?.data} />
      </div>
      <div className="right-top"></div>
      <div className="right-center">
        <BarCharts chartsData={chartsData?.chargingStatistics?.data} />
      </div>
      <div className="right-bottom">
        <Heart chartsData={chartsData?.exceptionMonitoring?.data} />
      </div>
      <div className="center"></div>
      <div className="bottom"></div>
    </div>
  );
}
