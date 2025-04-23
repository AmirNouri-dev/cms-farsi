import React, { useState } from "react";
import "./Statistics.css";
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import MyLineChart from "../../Components/Charts/MyLineChart/MyLineChart";
import { monthlySaleLineChartDatas } from "../../datas";

export default function Statistics() {
  const [lineChartDatas, setLinechartDatas] = useState(
    monthlySaleLineChartDatas
  );
  return (
    <div>
      <ErrorBox msg="هیچ جدول آماری یافت نشد !" />
      <MyLineChart
        data={lineChartDatas}
        title="فروش ماهانه"
        dataKey="فروش"
        type="monotone"
      />
    </div>
  );
}
