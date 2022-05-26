import React, { useState } from "react";

const AddProduct = () => {
  const [name, getName] = useState("");
  const [image, getImage] = useState("");
  const [description, getDescription] = useState("");
  const [minimumOrderQuantity, getMinimuOmOrder] = useState("");
  const [availableQuantity, getAvailable] = useState("");
  const [pricePerUnit, getPpu] = useState("");

  const addProduct = (event) => {
    event.preventDefault();

    const newProduct = {
      name,
      image,
      description,
      minimumOrderQuantity,
      availableQuantity,
      pricePerUnit,
    };

    fetch("https://intense-ravine-32136.herokuapp.com/products", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="mt-20 container mx-auto">
      <h1 className="text-2xl text-center">Add A Product</h1>
      <form className="w-1/2 shadow-lg p-12 mx-auto" onSubmit={addProduct}>
        <input
          type="text"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Enter Name"
          onBlur={(e) => getName(e.target.value)}
        />
        <input
          type="text"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Enter Product Image Link"
          onBlur={(e) => getImage(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Add A Description"
          onBlur={(e) => getDescription(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Minimum Order Quantity"
          onBlur={(e) => getMinimuOmOrder(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Available Quantity"
          onBlur={(e) => getAvailable(e.target.value)}
        />
        <input
          type="text"
          name="email"
          className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
          placeholder="Per Unit Price"
          onBlur={(e) => getPpu(e.target.value)}
        />
        <input
          type="submit"
          value="Add Product"
          className="btn text-black hover:text-white block mx-auto "
        />
      </form>
    </div>
  );
};

export default AddProduct;
