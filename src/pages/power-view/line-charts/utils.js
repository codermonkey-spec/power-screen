const gridStyle = {
  left: "5%",
  right: "1%",
  top: "20%",
  bottom: "15%",
  containLabel: true, // grid 区域是否包含坐标轴的刻度标签
};

const legendStyle = {
  right: "center",
  bottom: "5%",
  itemGap: 20,
  itemWidth: 13,
  itemHeigth: 12,
  textStyle: {
    color: "#64BCFF",
  },
  icon: "rect",
};

const tooltipStyle = {
  trigger: "axis",
  axisPointer: {
    type: "line",
    lineStyle: {
      color: "#20FF89",
    },
  },
};

const xAxis = [
  {
    type: "category",
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: "#64BCFF",
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: false,
    },
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  },
];

const yAxis = [
  {
    type: "value",
    splitLine: {
      show: false,
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      show: true,
      color: "#64BCFF",
    },
  },
];

const series = [
  {
    type: "line",
    smooth: true,
    stack: "总量",
    symbolSize: 5,
    showSymbol: false,
    itemStyle: {
      color: "#20FF89",
      lineStyle: {
        color: "#20FF89",
        width: 2,
      },
    },
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#20FF89",
          },
          {
            offset: 1,
            color: "rgba(255, 255, 255, 0)",
          },
        ],
      },
    },
  },
  {
    type: "line",
    smooth: true,
    stack: "总量",
    symbolSize: 5,
    showSymbol: false,
    itemStyle: {
      color: "#EA9502",
      lineStyle: {
        color: "#EA9502",
        width: 2,
      },
    },
    areaStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#EA9502",
          },
          {
            offset: 1,
            color: "rgba(255, 255, 255, 0)",
          },
        ],
      },
    },
  },
];

export const getLineOption = (echartDatas) => {
  return {
    grid: gridStyle,
    legend: legendStyle,
    tooltip: tooltipStyle,
    xAxis,
    yAxis,
    series: [
      { ...series[0], name: echartDatas[0]?.name, data: echartDatas[0]?.data },
      { ...series[1], name: echartDatas[1]?.name, data: echartDatas[1]?.data },
    ],
  }
}
