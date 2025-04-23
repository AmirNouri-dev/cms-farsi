import React from "react";
import "./Home.css";
import CommentsTable from "../../Components/CommentsTable/CommentsTable";
import { PieChart } from "recharts";
import MyPieChart from "../../Components/Charts/MyPieChart/MyPieChart";
import MyBarChart from "../../Components/Charts/MyBarChart/MyBarChart";
import { pieChartDatas, barChartdatas } from "../../datas";
import { useState } from "react";

export default function Home() {
  const [pieChartDataTimes, setPieChartDataTime] = useState(pieChartDatas);
  const [barChartdataUsers, setBarChartdataUsers] = useState(barChartdatas);
  return (
    <div>
      <CommentsTable title="آخرین کامنت ها" />
      <MyPieChart
        title="میانگین بازدید از سایت در ساعات مختلف"
        data={pieChartDataTimes}
        dataKey="value"
      />
      <MyBarChart title="تعداد کاربران عضو شده" data={barChartdataUsers} />
    </div>
  );
}
