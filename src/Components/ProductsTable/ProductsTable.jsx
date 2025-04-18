import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const submitAction = () => {
    console.log("حذف تایید شد");
    setIsShowDeleteModal(false);
  };
  const cancelAction = () => {
    console.log("حذف تایید نشد");
    setIsShowDeleteModal(false);
  };
  const closeDetailsModal = () => {
    console.log("مودال جزییات بسته شد");
    setIsShowDetailsModal(false);
  };
  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
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
              <button
                className="products-table-btn"
                onClick={() => setIsShowDetailsModal(true)}
              >
                جزییات
              </button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowDeleteModal(true)}
              >
                حذف
              </button>
              <button className="products-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowDeleteModal && (
        <DeleteModal submitAction={submitAction} cancelAction={cancelAction} />
      )}
      {isShowDetailsModal && (
        <DetailsModal onClick={closeDetailsModal} onHide={closeDetailsModal} />
      )}
    </>
  );
}
