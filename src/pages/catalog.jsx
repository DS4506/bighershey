// Catalog.js

import React, { useEffect, useState } from "react";
import Products from "../components/products";
import "./catalog.css";
import DataService from "../services/dataService";

function Catalog() {
  const [productState, setProducts] = useState([]);
  useEffect(function () {
    console.log("component is loaded");
    loadCatalog();
  }, []);

  function loadCatalog() {
    let service = new DataService();
    let products = service.getProducts();
    setProducts(products);
    console.log(products);
  }

  return (
    <div>
      <h1>Here look at my {productState.length} amazing products</h1>
      <div className="products-container">
        {productState.map((product) => (
          <div className="products" key={product._id}>
            <Products data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
