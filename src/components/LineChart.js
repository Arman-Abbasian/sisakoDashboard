import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

const LineChartt = ({data,title}) => {
  const [tooltip, setTooltip] = useState(null);
  const [point, setPoints] = useState(null);

  const CustomTooltip = ({ payload }) => {
    if (payload) {
      return (
        <div className="flex justify-center items-center bg-secondary-800 text-white w-12 h-12 rounded-full">
          <p>{payload[0]?.value}</p>
        </div>
      );
    }
    return null;
  };

  const updateTooltip = (e) => {
    let x = Math.round(e.cx);
    let y = Math.round(e.cy);

    tooltip.style.opacity = "1";
    tooltip.style.transform = `translate(${x}px, ${y}px)`;
    tooltip.childNodes[0].innerHTML = e.value;
  };

  const onChartMouseMove = (chart) => {
    if (chart.isTooltipActive) {
      if (point) {
        setPoints(point);
        updateTooltip(chart);
      }
    }
  };

  const onChartMouseLeave = (e) => {
    setPoints(null);
    updateTooltip(e);
  };

  return (
    <div className="flex caption2 flex-col ui-chart">
      <div className="flex justify-center items-center mb-10 text-white">
        <h1 className="subheading2">{title}</h1>
      </div>
      <LineChart width={650} height={300} data={data}>
        <CartesianGrid vertical={false} opacity="0.2" />
        <XAxis
          tick={{ fill: "white" }}
          axisLine={false}
          tickLine={false}
          dataKey="name"
        />
        <YAxis
          tickCount={7}
          axisLine={false}
          tickLine={false}
          tick={{ fill: "white" }}
          type="number"
          domain={[0, 100]}
        />
        <Tooltip
          content={<CustomTooltip />}
          viewBox={{ x: 0, y: 0, width: 20, height: 20 }}
          cursor={false}
          position="top"
          wrapperStyle={{ display: "hidden" }}
        />
        <Line
          fill="#40C0C0"
          stroke="#40C0C0"
          dot={true}
          type="monotone"
          dataKey="value"
          activeDot={(e) => {
            onChartMouseMove(e);
            onChartMouseLeave(e);
          }}
        />
      </LineChart>
      <div
        className="ui-chart-tooltip text-white flex items-center justify-center"
        ref={(ref) => setTooltip(ref)}
      >
        <div className="ui-chart-tooltip-content"></div>
      </div>
    </div>
  );
};

export default LineChartt;
