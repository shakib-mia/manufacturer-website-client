import React, { useEffect, useState } from "react";
import useItems from "./../../hooks/useItems";
import useUsers from "./../../hooks/useUsers";
import { toast } from "react-toastify";

const Purchase = () => {
  const id = localStorage.getItem("id");
  const [data, getData] = useItems(`http://localhost:5000/products/${id}`);

  const email = localStorage.getItem("email");
  const name = localStorage.getItem("name");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [orderQuantity, setOrderQuantity] = useState("");
  const quantity = parseInt(orderQuantity);

  const placeOrder = (event) => {
    event.preventDefault();
    const orderDetails = {
      image: data[0]?.image,
      details: data[0]?.description,
      name,
      email,
      address,
      phoneNumber,
      quantity,
    };
    fetch("http://localhost:5000/orders", {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch(`http://localhost:5000/orders/${email}`, {
      method: "put",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    toast.success("Order Placed Successfully");
  };

  return (
    <div className="mt-20 container mx-auto">
      <div className="card w-96 mx-auto bg-base-100 shadow-xl">
        <figure>
          <img src={data[0]?.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data[0]?.name}</h2>
          <p>{data[0]?.description}</p>
        </div>
      </div>

      <div className="my-16">
        <form className="w-1/2 shadow-lg p-12 mx-auto" onSubmit={placeOrder}>
          <h1 className="text-2xl text-center">User's Information</h1>
          <input
            type="email"
            name="email"
            className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
            value={email}
            disabled
          />
          <input
            type="text"
            name="name"
            className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
            value={name}
            disabled
          />
          <input
            type="text"
            name="address"
            className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
            placeholder="Enter Your Address Here"
            onBlur={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            name="phone"
            className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
            placeholder="Enter Your Phone Number Here"
            onBlur={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            name="minimumQuantity"
            placeholder="Order Quantity"
            className="w-11/12 block mx-auto border-2 my-4 py-3 px-2"
            onBlur={(e) => setOrderQuantity(e.target.value)}
          />
          <input
            type="submit"
            value="Place Order"
            className="btn text-black hover:text-white block ml-auto mr-7"
          />
        </form>
      </div>
    </div>
  );
};

export default Purchase;