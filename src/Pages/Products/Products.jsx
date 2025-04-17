import React from "react";
import "./Products.css";
import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";

export default function Products() {
  return (
    <div>
      <AddNewProduct />
      <ErrorBox msg="هیچ محصولی یافت نشد !" />
    </div>
  );
}
