import React from "react";
import "./Products.css";
// import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
import ProductsTable from "../../Components/ProductsTable/ProductsTable";

export default function Products() {
  return (
    <div>
      <AddNewProduct />
      <ProductsTable />
    </div>
  );
}
