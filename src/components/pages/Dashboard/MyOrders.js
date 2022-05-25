import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const MyOrders = () => {
  const [data, getData] = useState([]);
  const email = localStorage.getItem("email");
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${email}`)
      .then((response) => response.json())
      .then((data) => getData(data));
  }, []);

  const pay = () => {
    toast.success("paid");
  };

  const cancelOrder = () => {
    console.log("Order cancelled");
  };

  return (
    <div className="mt-10 ml-5">
      <h1 className="text-center text-3xl font-bold">My Orders</h1>
      <div className="flex justify-center">
        {data.map((data) => (
          <div
            className="card w-96 mx-4 bg-base-100 shadow-lg my-4"
            key={data._id}
          >
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
                <button
                  className="bg-green-500 w-1/3 mx-auto text-white mt-4 py-3 rounded"
                  onClick={pay}
                >
                  Pay
                </button>
                <label
                  htmlFor="my-modal-3"
                  className="bg-red-500 w-1/3 mx-auto text-white mt-4 py-3 rounded text-center cursor-pointer"
                >
                  Cancel
                </label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are You Sure to Cancel the Order?
          </h3>
          <p className="py-4">Once You Cancel an Order, it can't be undone.</p>
          <div className="text-right">
            <label
              htmlFor="my-modal-3"
              className="bg-red-500 px-6 py-2 text-white rounded"
              onClick={cancelOrder}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
