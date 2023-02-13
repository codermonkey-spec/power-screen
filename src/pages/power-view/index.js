import React, { useEffect, useState } from "react";
import { getPowerScreenData } from "../../services";
import {powerData} from './mockData'
import styles from "./style.less";

import PieCharts from "./pie-charts";
import LineCharts from "./line-charts";
import BarCharts from "./bar-charts";
import Heart from "./heart";
import CenterSvg from "./center-svg";
import RightTopPanel from "./right-top-panel";
import BottomSvg from './bottom-svg'

export default function Index() {
  const [chartsData, setChartsData] = useState({});
  
  useEffect(() => {
    getPowerScreenData().then((res) => {
      setChartsData(res?.data);
    }).catch(() => {
      setChartsData(powerData.data)
    })
  }, []);

  return (
    <div className={styles["screen-bg"]}>
      <div className="header"></div>
      <div className="left-top">
        <PieCharts chartsData={chartsData?.chargingPile?.data} />
      </div>
      <div className="left-bottom">
        <LineCharts chartsData={chartsData?.processMonitoring?.data} />
      </div>
      <div className="right-top">
        <RightTopPanel
          panelItems={chartsData?.chargingTop4?.data}
          percentage={chartsData?.chargingTop4?.totalPercentage}
        />
      </div>
      <div className="right-center">
        <BarCharts chartsData={chartsData?.chargingStatistics?.data} />
      </div>
      <div className="right-bottom">
        <Heart chartsData={chartsData?.exceptionMonitoring?.data} />
      </div>
      <div className="center">
        <CenterSvg />
      </div>
      <div className="bottom">
        <BottomSvg panelItems={chartsData?.dataAnalysis?.data} />
      </div>
    </div>
  );
}
