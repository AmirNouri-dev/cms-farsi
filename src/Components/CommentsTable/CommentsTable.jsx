import React from "react";
import "./CommentsTable.css";
export default function CommentsTable() {
  return (
    <div className="cms-main">
      <div className="cms-table">
        <table>
          <thead>
            <tr>
              <th>نام کاربر</th>
              <th>نام محصول</th>
              <th>نمایش کامنت</th>
              <th>تاریخ ثبت</th>
              <th>ساعت ثبت</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>علی</td>
              <td>ایفون</td>
              <td>
                <button className="cms-show-btn">دیدن متن</button>
              </td>
              <td>2000</td>
              <td>2000</td>
              <td>
                <button>ویرایش</button>
                <button>حذف</button>
                <button>پاسخ</button>
                <button>تایید</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
