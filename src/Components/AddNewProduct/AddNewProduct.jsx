import React, { useState } from "react";
import "./AddNewProduct.css";
import { BsCursorText } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { MdOutlineStarRate } from "react-icons/md";
import { GiChart } from "react-icons/gi";

import { FaRegImage } from "react-icons/fa";
import { MdOutlineColorLens } from "react-icons/md";

export default function AddNewProduct({ getAllProducts }) {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const emptyInput = () => {
    setNewProductTitle("");
    setNewProductPrice("");
    setNewProductImg("");
    setNewProductCount("");
    setNewProductPopularity("");
    setNewProductSale("");
    setNewProductColors("");
  };
  const newProductInfoss = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColors,
  };
  const addNewProduct = (event) => {
    event.preventDefault();

    fetch("http://localhost:8000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProductInfoss),
    })
      .then((res) => res.text())
      .then((data) => {
        console.log("پاسخ خام", data);
        emptyInput();
        getAllProducts();
        try {
          const json = JSON.parse(data);
          console.log("تبدیل شده به json", json);
        } catch (e) {
          console.error("json پاسخ نیست", e.message);
        }
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  };
  return (
    <div className="products-main">
      <h2 className="products-title">افزودن محصول جدید</h2>
      <form action="#" className="add-products-form">
        <div className="add-products-wrapper">
          <div className="add-products-group">
            <BsCursorText className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="اسم محصول را وارد نمایید"
              value={newProductTitle}
              onChange={(event) => setNewProductTitle(event.target.value)}
            />
          </div>
          <div className="add-products-group">
            <IoPricetagOutline className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="قیمت محصول را وارد نمایید"
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </div>
          <div className="add-products-group">
            <BsBag className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="موجودی محصول را وارد نمایید"
              value={newProductCount}
              onChange={(event) => setNewProductCount(event.target.value)}
            />
          </div>
          <div className="add-products-group">
            <MdOutlineStarRate className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان محبوبیت محصول را وارد نمایید"
              value={newProductPopularity}
              onChange={(event) => setNewProductPopularity(event.target.value)}
            />
          </div>
          <div className="add-products-group">
            <GiChart className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان فروش محصول را وارد نمایید"
              value={newProductSale}
              onChange={(event) => setNewProductSale(event.target.value)}
            />
          </div>
          <div className="add-products-group">
            <FaRegImage className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="آدرس عکس محصول را وارد نمایید"
              value={newProductImg}
              onChange={(event) => setNewProductImg(event.target.value)}
            />
          </div>
          <div className="add-products-group">
            <MdOutlineColorLens className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="تعداد رنگ بندی محصول را وارد نمایید"
              value={newProductColors}
              onChange={(event) => setNewProductColors(event.target.value)}
            />
          </div>
        </div>
        <button className="add-products-btn" onClick={addNewProduct}>
          ثبت محصول
        </button>
      </form>
    </div>
  );
}
