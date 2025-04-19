import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiFillEdit } from "react-icons/ai";
import ErrorBox from "./../ErrorBox/ErrorBox";

export default function ProductsTable() {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditsModal, setIsShowEditsModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      })
      .catch((err) => {
        setAllProducts([]);
        console.log(err);
      });
  }, []);

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
  const editmodalInfos = (event) => {
    event.preventDefault();
    console.log("اطلاعات ویرایش شد");
    setIsShowEditsModal(false);
  };
  const closeEditModal = (event) => {
    event.preventDefault();
    console.log("مودال ویرایش بسته شد");
    setIsShowEditsModal(false);
  };
  return (
    <>
      {allProducts.length ? (
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
            {allProducts.map((product) => (
              <tr key={product.id} className="products-table-body-tr">
                <td>
                  <img
                    className="products-table-item-img"
                    src={product.img}
                    alt=""
                  />
                </td>
                <td>{product.title}</td>
                <td>{product.price} تومان</td>
                <td>{product.count} عدد</td>
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
                  <button
                    className="products-table-btn"
                    onClick={() => setIsShowEditsModal(true)}
                  >
                    ویرایش
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg="هیچ محصولی یافت نشد !" />
      )}
      {isShowDeleteModal && (
        <DeleteModal submitAction={submitAction} cancelAction={cancelAction} />
      )}
      {isShowDetailsModal && (
        <DetailsModal onClick={closeDetailsModal} onHide={closeDetailsModal} />
      )}
      {isShowEditsModal && (
        <EditModal onSubmit={editmodalInfos} onClose={closeEditModal}>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد نمایید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد نمایید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد نمایید"
              className="edit-product-input"
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد نمایید"
              className="edit-product-input"
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
