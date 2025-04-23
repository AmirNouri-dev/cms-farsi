import React, { useState } from "react";
import "./Statistics.css";
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import MyLineChart from "../../Components/Charts/MyLineChart/MyLineChart";
import MyPieChart from "../../Components/Charts/MyPieChart/MyPieChart";
import MyBarChart from "../../Components/Charts/MyBarChart/MyBarChart";
import {
  monthlySaleLineChartDatas,
  monthlyOrdersLineChartDatas,
  pieChartDatas,
  barChartdatas,
} from "../../datas";

export default function Statistics() {
  const [saleLineChartDatas, setSaleLinechartDatas] = useState(
    monthlySaleLineChartDatas
  );
  const [ordersLineChartDatas, setOrdersLinechartDatas] = useState(
    monthlyOrdersLineChartDatas
  );
  const [pieChartDataTimes, setPieChartDataTime] = useState(pieChartDatas);
  const [barChartdataUsers, setBarChartdataUsers] = useState(barChartdatas);
  const [isShowErrorBox, setIsShowErrorBox] = useState(false);
  return (
    <div>
      {isShowErrorBox ? (
        <ErrorBox msg="هیچ جدول آماری یافت نشد !" />
      ) : (
        <>
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
          <MyBarChart title="تعداد کاربران عضو شده" data={barChartdataUsers} />
        </>
      )}
    </div>
  );
}
