import React from "react";
import "./MyBarChart.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function MyBarChart({ title, data }) {
  return (
    <div className="bar-chart">
      <h2 className="bar-chart-title">{title}</h2>
      <ResponsiveContainer width="100%" height="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="1403"
            fill="#8884d8"
            activeBar={<Rectangle fill="purple" stroke="black" />}
          />
          <Bar
            dataKey="1404"
            fill="#ffc107"
            activeBar={<Rectangle fill="gold" stroke="black" />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
