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
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Details</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr>
                <th>{product.name}</th>
                <img src={product.image} alt={product.title} width="10%" />
                <td>{product.description}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MaangeProducts;
