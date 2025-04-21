import React, { useEffect, useState } from "react";
import "./CommentsTable.css";
import ErrorBox from "../ErrorBox/ErrorBox";
export default function CommentsTable() {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/comments")
      .then((res) => res.json())
      .then((data) => setAllComments(data))
      .catch((err) => setAllComments([]));
  }, []);

  return (
    <>
      {allComments.length ? (
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
                {allComments.map((comment) => (
                  <tr key={comment.id}>
                    <td>{comment.userID}</td>
                    <td>{comment.productID}</td>
                    <td>
                      <button className="cms-show-btn">دیدن متن</button>
                    </td>
                    <td>{comment.date}</td>
                    <td>{comment.hour}</td>
                    <td>
                      <button>ویرایش</button>
                      <button>حذف</button>
                      <button>پاسخ</button>
                      <button>تایید</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <ErrorBox msg="هیچ کامنتی یافت نشد !" />
      )}
    </>
  );
}
