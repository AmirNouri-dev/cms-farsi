import React, { useEffect, useState } from "react";
import "./Products.css";
// import ErrorBox from "../../Components/ErrorBox/ErrorBox";
import AddNewProduct from "../../Components/AddNewProduct/AddNewProduct";
import ProductsTable from "../../Components/ProductsTable/ProductsTable";

export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch(`http://localhost:8000/api/products`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAllProducts(data);
      })
      .catch((err) => {
        setAllProducts([]);
        console.log(err);
      });
  };
  return (
    <div>
      <AddNewProduct getAllProducts={getAllProducts} />
      <ProductsTable
        allProducts={allProducts}
        getAllProducts={getAllProducts}
      />
    </div>
  );
}
