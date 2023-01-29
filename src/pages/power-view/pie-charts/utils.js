const pieTextStyle = {
  rich: {
    nameSty: {
      fontSize: 19,
      color: "white",
      padding: [10, 0],
    },
    number: {
      fontSize: 24,
      color: "white",
      padding: [4, 0, 0, 20],
    },
  },
};

const legendTextStyle = {
  rich: {
    nameSty: {
      fontSize: 12,
      color: "#FFFFFF",
      padding: [10, 14],
    },
    numberSty: {
      fontSize: 12,
      color: "#40E6ff",
      padding: [0, 0, 0, 14],
    },
    preSty: {
      fontSize: 12,
      color: "#40E6ff",
    },
  },
};

const legendStyle = {
  orient: "vertical",
  right: "10%",
  top: "18%",
  itemGap: 20,
  itemWidth: 16,
  itemHeigth: 16,
  icon: "rect",
};

export const getPieOption = (pieDatas = []) => {
  const colors = getOptionColors(pieDatas);
  const total = getOptionTotal(pieDatas);

  let option = {
    color: colors,
    title: {
      text: `{nameSty| 充电桩总数}\n{number|${total}}`,
      top: "50%",
      left: "30%",
      textStyle: pieTextStyle,
    },
    legend: {
      ...legendStyle,
      formatter: function (name) {
        var currentItem = pieDatas.find((item) => item.name === name);
        return (
          "{nameSty|" +
          currentItem.name +
          "}\n" +
          "{numberSty|" +
          currentItem.value +
          "个 }" +
          "{preSty|" +
          currentItem.percentage +
          "}"
        );
      },
      textStyle: legendTextStyle,
    },
    series: [
      {
        type: "pie",
        center: ["40%", "57%"],
        radius: ["30%", "75%"],
        label: {
          show: false,
        },
        data: getOptionData(pieDatas),
        roseType: "area",
      },
    ],
  };

  return option;
};

const getOptionColors = (array) => {
  return array.map((item) => item.color);
};

const getOptionTotal = (array) => {
  return array.reduce((prev, cur) => prev + Number(cur.value), 0);
};

const getOptionData = (array) => {
  return array.map((item) => ({ name: item.name, value: item.value }));
};


