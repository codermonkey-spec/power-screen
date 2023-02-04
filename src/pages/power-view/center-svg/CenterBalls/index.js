import React from "react";

import BallSvg from "./BallSvg";

export default function Index({ data }) {
  return data.map((item) => {
    return <BallSvg {...item} key={item.className} />;
  });
}
