import React from "react";

const Login = () => {
  const login = (event) => {
    event.preventDefault();
    console.log("form ");
  };
  return (
    <div className="h-screen flex items-center">
      <div className="shadow-lg w-96 lg:w-1/2 mx-auto py-10 h-50">
        <h1 className="text-center text-4xl font-bold">Login</h1>
        <form onSubmit={login} className="my-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-10/12 block mx-auto border-2 my-4 py-3 px-2 shadow-md focus:shadow-0"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-10/12 block mx-auto border-2 my-4 py-3 px-2 shadow-md focus:shadow-0"
          />
          <div className="text-right pr-10">
            <button className="btn bg-indigo-500 hover:bg-transparent hover:text-indigo-500 border-2 border-transparent hover:border-2 hover:border-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
