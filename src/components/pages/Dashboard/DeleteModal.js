import React, { useEffect } from "react";

const DeleteModal = ({ item, setCancel }) => {
  const handleDelete = (id) => {
    fetch(`https://intense-ravine-32136.herokuapp.com/orders/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    window.location.reload();
  };
  return (
    <div>
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
              onClick={() => {
                handleDelete(item);
              }}
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
