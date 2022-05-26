import React, { useEffect, useState } from "react";

const ManageAllOrders = () => {
  const [allOrders, getAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://intense-ravine-32136.herokuapp.com/orders")
      .then((response) => response.json())
      .then((data) => getAllOrders(data));
  }, []);

  console.log(allOrders);
  return (
    <div className="mt-20">
      <h1 className="text-center text-xl">Manage All Orders</h1>

      <div class="overflow-x-auto">
        <table class="table table-zebra w-1/2 mx-auto">
          <thead>
            <tr>
              <th>Image</th>
              <th>Description</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((allOrder) => (
              <tr>
                <td>
                  <img
                    src={allOrder.order.image}
                    className="w-20 rounded-full"
                    alt="Order_Image"
                  />
                </td>
                <td>{allOrder.order.details}</td>
                <td>{allOrder.order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
