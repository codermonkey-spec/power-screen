import React, { useEffect, useRef } from "react";

import { useEcharts } from "@/hooks";
import { getPieOption } from "./utils";

export default function Index({ chartsData = [], width = "100%", height = "100%" }) {
  const pieRef = useRef(null);
  const chartsInstance = useEcharts(pieRef);

  useEffect(() => {
    renderPie();
  }, [chartsData]);

  const renderPie = () => {
    if (!chartsInstance) return;

    const option = getPieOption(chartsData);
    chartsInstance.setOption(option);
  };

  return <div ref={pieRef} style={{ width, height }}></div>;
}
