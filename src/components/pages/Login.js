import React from "react";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const login = (event) => {
    event.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
    if (user) {
      localStorage.setItem("user", user.user.displayName);
      window.location.reload();
    }
  };

  return (
    <div className="h-screen flex items-center">
      <div className="shadow-lg w-96 lg:w-1/2 mx-auto py-10 h-50">
        {loading ? (
          <div className="text-center">
            <progress class="progress w-full"></progress>
          </div>
        ) : (
          <div>
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
              <div className="text-right pr-10 lg:pr-16">
                <button className="btn bg-indigo-500 hover:bg-transparent hover:text-indigo-500 border-2 border-transparent hover:border-2 hover:border-primary">
                  Login
                </button>
              </div>
              <p className="pl-10 lg:pl-16">
                New in Manufacturer Website? &nbsp;
                <Link className="text-primary underline" to="/register">
                  Register
                </Link>
              </p>
            </form>
            <div className="divider w-10/12 mx-auto">OR</div>
            <p className="text-warning text-center">{error?.message}</p>
            <div className="text-center flex justify-around flex-wrap w-8/12 mx-auto">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-success my-4"
              >
                Continue with Google
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
