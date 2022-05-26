import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ManageOrder from "./ManageOrder";
import DeleteModal from "./DeleteModal";

const MyOrders = () => {
  const [data, getData] = useState([]);
  const [item, setItem] = useState({});
  const email = localStorage.getItem("email");
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${email}`)
      .then((response) => response.json())
      .then((data) => getData(data));
  }, []);

  return (
    <div className="mt-10 ml-5">
      <h1 className="text-center text-3xl font-bold">My Orders</h1>
      <div className="flex justify-center">
        <ManageOrder items={data} setItem={setItem}></ManageOrder>
        <DeleteModal item={item}></DeleteModal>
      </div>
    </div>
  );
};

export default MyOrders;
