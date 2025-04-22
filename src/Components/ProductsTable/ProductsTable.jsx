import React, { useEffect, useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";
import { AiFillEdit } from "react-icons/ai";
import ErrorBox from "./../ErrorBox/ErrorBox";

export default function ProductsTable({ allProducts, getAllProducts }) {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowEditsModal, setIsShowEditsModal] = useState(false);
  // const [allProducts, setAllProducts] = useState([]);
  const [productID, setProductID] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState([]);
  /*برای هر اینپوت نیاز به یک استیت داریم */
  const [productNewTitle, setProductNewTitle] = useState("");
  const [productNewPrice, setProductNewPrice] = useState("");
  const [productNewImg, setProductNewImg] = useState("");
  const [productNewCount, setProductNewCount] = useState("");
  const [productNewPopularity, setProductNewPopularity] = useState("");
  const [productNewSale, setProductNewSale] = useState("");
  const [productNewColors, setProductNewColors] = useState("");

  // useEffect(() => {
  //   getAllProducts();
  // }, []);

  // const getAllProducts = () => {
  //   fetch(`http://localhost:8000/api/products`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setAllProducts(data);
  //     })
  //     .catch((err) => {
  //       setAllProducts([]);
  //       console.log(err);
  //     });
  // };
  const submitAction = () => {
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        getAllProducts();
        setIsShowDeleteModal(false);
      });
    console.log("حذف تایید شد");
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
    const newProductInfos = {
      title: productNewTitle,
      price: productNewPrice,
      count: productNewCount,
      colors: productNewColors,
      popularity: productNewPopularity,
      img: productNewImg,
      sale: productNewSale,
    };
    fetch(`http://localhost:8000/api/products/${productID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductInfos),
    })
      .then((res) => {
        console.log(res);
        res.json();
      })
      .then((result) => {
        console.log(result);
        console.log("اطلاعات ویرایش شد");
        getAllProducts();
        setIsShowEditsModal(false);
      });
  };
  const closeEditModal = (event) => {
    event.preventDefault();
    console.log("مودال ویرایش بسته شد");
    setIsShowEditsModal(false);
  };
  return (
    <>
      <h2 className="products-list-title">لیست محصولات</h2>
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
                <td>{product.price.toLocaleString("fa-IR")} تومان</td>
                <td>{product.count} عدد</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDetailsModal(true);
                      setSelectedProduct(product);
                    }}
                  >
                    جزییات
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setProductID(product.id);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditsModal(true);
                      setProductID(product.id);
                      setProductNewTitle(product.title);
                      setProductNewPrice(product.price);
                      setProductNewImg(product.img);
                      setProductNewCount(product.count);
                      setProductNewPopularity(product.popularity);
                      setProductNewSale(product.sale);
                      setProductNewColors(product.colors);
                    }}
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
        <DetailsModal onClick={closeDetailsModal} onHide={closeDetailsModal}>
          <table className="cms-table">
            <thead>
              <tr>
                <th>اسم</th>
                <th>میزان فروش ماهانه</th>
                <th>رنگ بندی</th>
                <th>محبوبیت</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{selectedProduct.title}</th>
                <th>{selectedProduct.sale.toLocaleString("fa-IR")} تومان</th>
                <th>{selectedProduct.colors}</th>
                <th>{selectedProduct.popularity}%</th>
              </tr>
            </tbody>
          </table>
        </DetailsModal>
      )}
      {isShowEditsModal && (
        <EditModal onSubmit={editmodalInfos} onClose={closeEditModal}>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              عنوان:
            </span>
            <input
              type="text"
              placeholder="عنوان جدید را وارد نمایید"
              className="edit-product-input"
              value={productNewTitle}
              onChange={() => setProductNewTitle(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              قیمت:
            </span>
            <input
              type="text"
              placeholder="قیمت جدید را وارد نمایید"
              className="edit-product-input"
              value={productNewPrice}
              onChange={() => setProductNewPrice(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              آدرس عکس:
            </span>
            <input
              type="text"
              placeholder="آدرس عکس جدید را وارد نمایید"
              className="edit-product-input"
              value={productNewImg}
              onChange={() => setProductNewImg(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              موجودی:
            </span>
            <input
              type="text"
              placeholder="موجودی جدید را وارد نمایید"
              className="edit-product-input"
              value={productNewCount}
              onChange={() => setProductNewCount(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              محبوبیت:
            </span>
            <input
              type="text"
              placeholder="محبوبیت جدید را وارد نمایید"
              className="edit-product-input"
              value={productNewPopularity}
              onChange={() => setProductNewPopularity(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              فروش ماهانه:
            </span>
            <input
              type="text"
              placeholder="میزان فروش ماهانه جدید را وارد نمایید"
              className="edit-product-input"
              value={productNewSale}
              onChange={() => setProductNewSale(event.target.value)}
            />
          </div>
          <div className="edit-products-form-group">
            <span>
              <AiFillEdit />
              رنگ بندی:
            </span>
            <input
              type="text"
              placeholder="تعداد رنگ بندی جدید را وارد نمایید"
              className="edit-product-input"
              value={productNewColors}
              onChange={() => setProductNewColors(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </>
  );
}
