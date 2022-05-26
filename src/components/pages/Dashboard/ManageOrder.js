import React, { useState } from "react";
import DeleteModal from "./DeleteModal";

const ManageOrder = ({ items, setItem }) => {
  //   const [select, setItem] = useState("");
  return (
    <div className="flex">
      {items.map((data) => (
        <div
          className="card w-96 mx-4 bg-base-100 shadow-lg my-4"
          key={data._id}
        >
          {console.log(data)}
          <figure>
            <img src={data.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.name}</h2>
            <p>{data.description}</p>
            <p>Email: {data.email}</p>
            <p>Address: {data.address}</p>
            <p>{data.quantity} pieces</p>
            <div className="flex">
              <button className="bg-green-500 w-1/3 mx-auto text-white mt-4 py-3 rounded">
                Pay
              </button>
              <label
                htmlFor="my-modal-3"
                className="bg-red-500 w-1/3 mx-auto text-white mt-4 py-3 rounded text-center cursor-pointer"
                onClick={() => setItem(data)}
              >
                Cancel
              </label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageOrder;
