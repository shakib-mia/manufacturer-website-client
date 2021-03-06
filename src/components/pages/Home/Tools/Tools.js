import React from "react";
import { useNavigate } from "react-router-dom";
import useItems from "./../../../../hooks/useItems";

const Tools = () => {
  const [data, getData] = useItems(
    "https://intense-ravine-32136.herokuapp.com/products"
  );

  const navigate = useNavigate();

  const buyNow = (id) => {
    localStorage.setItem("id", id);
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center font-bold">Tools</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <div
            className="card w-96 mx-4 bg-base-100 shadow-lg my-4"
            key={item._id}
          >
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <p>Minimum Order Quantity: {item.minimumOrderQuantity}</p>
              <p>Available Quantity: {item.availableQuantity}</p>
              <p>
                Per Unit Price:{" "}
                <span className="text-green-500 font-bold">
                  ${item.pricePerUnit}
                </span>
              </p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  onClick={() => buyNow(item.id)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
