import React, { useRef, useEffect } from "react";

import { useEcharts } from "@/hooks";
import { getLineOption } from "./utils";

export default function Index({ chartsData = [], width = "100%", height = "100%" }) {
  const lineRef = useRef(null);
  const chartsInstance = useEcharts(lineRef);

  useEffect(() => {
    renderPie();
  }, [chartsData]);

  const renderPie = () => {
    if (!chartsInstance) return;

    const option = getLineOption(chartsData);
    chartsInstance.setOption(option);
  };
  return (
    <div ref={lineRef} style={{ width, height }}></div>
  );
}
