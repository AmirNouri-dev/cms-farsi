import React, { useState } from "react";
import "./MyPieChart.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

export default function MyPieChart({ title, data, dataKey }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const colorSet = [
    { color: "#0088FE", time: "صبح" },
    { color: "#00C49F", time: "ظهر" },
    { color: "#FFBB28", time: "عصر" },
    { color: "#FF8042", time: "شب" },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div className="pie-chart">
      <h2 className="pie-chart-title">{title}</h2>
      <ResponsiveContainer width="100%" aspect={4}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            isAnimationActive={true}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="pie-chart-desc-wrapper">
        {colorSet.map((time) => (
          <div className="pie-chart-desc">
            <span
              className="pie-chart-desc-color"
              style={{ backgroundColor: `${time.color}` }}
            ></span>{" "}
            {time.time}
          </div>
        ))}
        {/* <div className="pie-chart-desc">
          <span className="pie-chart-desc-color"></span> صبح
        </div>
        <div className="pie-chart-desc">
          <span className="pie-chart-desc-color"></span>ظهر
        </div>
        <div className="pie-chart-desc">
          <span className="pie-chart-desc-color"></span>عصر
        </div>
        <div className="pie-chart-desc">
          <span className="pie-chart-desc-color"></span>شب
        </div> */}
      </div>
    </div>
  );
}
