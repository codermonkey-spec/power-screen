import { useEffect, useRef } from "react";
import * as echarts from "echarts";

export const useEcharts = (domEle) => {
  const echartsInstance = useRef(null);
  const exportInstance = echartsInstance.current;

  useEffect(() => {
     if(domEle) {
      echartsInstance.current = echarts.init(domEle?.current, null, { renderer: "svg" });
     }
    return () => {
      echartsInstance.current?.dispose();
    };
  }, [domEle?.current]);

  const setOption = (option) => {
    echartsInstance.current?.setOption(option);
  };

  const resizeEcharts = () => {
    echartsInstance.current?.resize();
  };
  
  
  return {
    echartsInstance:exportInstance,
    setOption,
    resizeEcharts,
  };
};
