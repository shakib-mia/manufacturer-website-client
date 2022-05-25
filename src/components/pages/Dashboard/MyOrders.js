import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [data, getData] = useState([]);
  const email = localStorage.getItem("email");
  useEffect(() => {
    fetch(`http://localhost:5000/orders/${email}`)
      .then((response) => response.json())
      .then((data) => getData(data));
  }, []);
  return (
    <div className="mt-10 ml-5">
      My Orders
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
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
