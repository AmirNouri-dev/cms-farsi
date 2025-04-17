import React from "react";
import "./AddNewProduct.css";
import { BsCursorText } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { MdOutlineStarRate } from "react-icons/md";
import { GiChart } from "react-icons/gi";

import { FaRegImage } from "react-icons/fa";
import { MdOutlineColorLens } from "react-icons/md";

export default function AddNewProduct() {
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
            />
          </div>
          <div className="add-products-group">
            <IoPricetagOutline className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="قیمت محصول را وارد نمایید"
            />
          </div>
          <div className="add-products-group">
            <BsBag className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="موجودی محصول را وارد نمایید"
            />
          </div>
          <div className="add-products-group">
            <MdOutlineStarRate className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان محبوبیت محصول را وارد نمایید"
            />
          </div>
          <div className="add-products-group">
            <GiChart className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="میزان فروش محصول را وارد نمایید"
            />
          </div>
          <div className="add-products-group">
            <FaRegImage className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="آدرس عکس محصول را وارد نمایید"
            />
          </div>
          <div className="add-products-group">
            <MdOutlineColorLens className="add-products-icon" />
            <input
              type="text"
              className="add-products-input"
              placeholder="تعداد رنگ بندی محصول را وارد نمایید"
            />
          </div>
        </div>
        <button className="add-products-btn">ثبت محصول</button>
      </form>
    </div>
  );
}
