import React from "react";
import "./ProductsTable.css";

export default function ProductsTable() {
  return (
    <table className="products-table">
      <tr className="products-table-heading-tr">
        <th>عکس</th>
        <th>اسم</th>
        <th>قیمت</th>
        <th>موجودی</th>
      </tr>
      <tr className="products-table-body-tr">
        <td>
          <img
            className="products-table-item-img"
            src="./../../public/images/jambon.webp"
            alt=""
          />
        </td>
        <td>ژامبون میکس</td>
        <td>230.000 تومان</td>
        <td>65 عدد</td>
        <td>
          <button className="products-table-btn">جزییات</button>
          <button className="products-table-btn">حذف</button>
          <button className="products-table-btn">ویرایش</button>
        </td>
      </tr>
    </table>
  );
}
