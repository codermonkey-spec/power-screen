const grid = {
  left: "5%",
  right: "5%",
  top: "30%",
  bottom: "5%",
  containLabel: true, // grid 区域是否包含坐标轴的刻度标签
};

const xAxisStyle = {
  axisLine: {
    show: true,
    lineStyle: {
      color: "#42A4FF",
    },
  },
  axisTick: {
    show: false,
  },
  axisLabel: {
    color: "white",
  },
};

const yAxis = {
  name: "个",
  nameTextStyle: {
    color: "white",
    fontSize: 13,
  },
  axisLine: {
    show: true,
    lineStyle: {
      color: "#42A4FF",
    },
  },
  axisTick: {
    show: false,
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: "#42A4FF",
    },
  },
  axisLabel: {
    color: "white",
  },
};

const series = [
  {
    name: "销量",
    type: "bar",
    barWidth: 17,
    itemStyle: {
      color: {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#01B1FF", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#033BFF", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      },
    },
    // data: categoryData,
  },
];

export const getBarOption = (echartDatas) => {
  const category = echartDatas.map((item) => item.name);
  const categoryData = echartDatas.map((item) => item.value);

  const option = {
    grid,
    tooltip: {},
    xAxis: {
      ...xAxisStyle,
      data: category,
    },
    yAxis,
    series: [{ ...series[0], data: categoryData }],
  };

  return option;
};
