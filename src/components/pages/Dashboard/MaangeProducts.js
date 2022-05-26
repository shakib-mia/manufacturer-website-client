import React, { useEffect, useState } from "react";

const MaangeProducts = () => {
  const [products, getProducts] = useState([]);

  useEffect(() => {
    fetch("https://intense-ravine-32136.herokuapp.com/products")
      .then((res) => res.json())
      .then((products) => getProducts(products));
  }, []);

  return (
    <div className="mt-24">
      <h1 className="text-2xl">Manage Products</h1>
    </div>
  );
};

export default MaangeProducts;
