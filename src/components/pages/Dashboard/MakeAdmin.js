import React, { useEffect, useState } from "react";

const MakeAdmin = () => {
  const [users, getUsers] = useState([]);

  useEffect(() => {
    fetch("https://intense-ravine-32136.herokuapp.com/users")
      .then((response) => response.json())
      .then((data) => getUsers(data));
  }, []);

  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center my-5">Make Admin</h1>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role !== "admin" ? (
                    <button className="border-2 border-green-500 px-5 py-2 hover:bg-green-500 hover:text-white">
                      Make Admin
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
