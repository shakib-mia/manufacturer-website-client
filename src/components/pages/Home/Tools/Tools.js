import React from "react";
import useItems from "./../../../../hooks/useItems";

const Tools = () => {
  const [data, getData] = useItems("http://localhost:5000/products");
  const homeItems = data.slice(0, 6);
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold">Tools</h1>
      <div className="flex flex-wrap justify-center">
        {homeItems.map((item) => (
          <div class="card w-96 mx-4 bg-base-100 shadow-lg my-4">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <p>Minimum Order Quantity: {item.minimumOrderQuantity}</p>
              <p>Available Quantity: {item.availableQuantity}</p>
              <p>
                Per Unit Price:{" "}
                <span className="text-green-500 font-bold">
                  ${item.pricePerUnit}
                </span>
              </p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
