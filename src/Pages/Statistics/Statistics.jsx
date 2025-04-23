import React, { useState } from "react";
import "./Statistics.css";
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import MyLineChart from "../../Components/Charts/MyLineChart/MyLineChart";
import {
  monthlySaleLineChartDatas,
  monthlyOrdersLineChartDatas,
} from "../../datas";

export default function Statistics() {
  const [saleLineChartDatas, setSaleLinechartDatas] = useState(
    monthlySaleLineChartDatas
  );
  const [ordersLineChartDatas, setOrdersLinechartDatas] = useState(
    monthlyOrdersLineChartDatas
  );
  return (
    <div>
      <ErrorBox msg="هیچ جدول آماری یافت نشد !" />
      <MyLineChart
        data={saleLineChartDatas}
        title="فروش ماهانه"
        dataKey="فروش"
        type="monotone"
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
