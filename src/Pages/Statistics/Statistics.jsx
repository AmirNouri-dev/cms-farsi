import React, { useState } from "react";
import "./Statistics.css";
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import MyLineChart from "../../Components/Charts/MyLineChart/MyLineChart";
import MyPieChart from "../../Components/Charts/MyPieChart/MyPieChart";
import {
  monthlySaleLineChartDatas,
  monthlyOrdersLineChartDatas,
  pieChartDatas,
} from "../../datas";

export default function Statistics() {
  const [saleLineChartDatas, setSaleLinechartDatas] = useState(
    monthlySaleLineChartDatas
  );
  const [ordersLineChartDatas, setOrdersLinechartDatas] = useState(
    monthlyOrdersLineChartDatas
  );
  const [pieChartDataTimes, setPieChartDataTime] = useState(pieChartDatas);
  return (
    <div>
      <ErrorBox msg="هیچ جدول آماری یافت نشد !" />
      <MyLineChart
        data={saleLineChartDatas}
        title="فروش ماهانه"
        dataKey="فروش"
        type="monotone"
      />
      <MyPieChart
        title="میانگین بازدید از سایت در ساعات مختلف"
        data={pieChartDataTimes}
        dataKey="value"
      />
      <MyLineChart
        data={ordersLineChartDatas}
        title="تعداد سفارشات ماهانه"
        dataKey="تعداد"
        type="stepAfter"
      />
    </div>
  );
}
