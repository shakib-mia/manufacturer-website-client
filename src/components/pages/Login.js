import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

const Login = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [existingUser, getExistingUser] = useState({});

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [dbEmail, setDbEmail] = useState("");
  const [dbPassword, setDbPassword] = useState("");
  const [dbName, setName] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/users/${email}`)
      .then((response) => response.json())
      .then((data) => {
        setDbEmail(data.email);
        setDbPassword(data.password);
        setName(data.name);
        setRole(data.role);
      });
  });

  const handleSignIn = (event) => {
    event.preventDefault();
    if (email === dbEmail && password === dbPassword) {
      localStorage.setItem("email", email);
      localStorage.setItem("user", dbName);
      localStorage.getItem("id")
        ? navigate(`/purchase/${localStorage.getItem("id")}`)
        : navigate("/");

      localStorage.setItem("role", role);
      window.location.reload();
    } else {
      document.getElementById("error").innerHTML =
        "Email or password is incorrect";
    }
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const forgetPassword = () => {
    sendPasswordResetEmail(email);
    toast.success("Password reset link has been sent", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };

  if (gUser) {
    localStorage.setItem("name", gUser.user.displayName);
    localStorage.setItem("email", gUser?.user.email);
    id ? navigate(`/purchase/${id}`) : navigate("/");
    window.location.reload();
  }

  if (gUser || user) {
    localStorage.setItem("user", gUser?.user || user?.user);
    localStorage.setItem("email", gUser?.user.email);
    window.location.reload();
  }

  return (
    <div className="h-screen flex items-center">
      {loading || gLoading ? (
        <div className="shadow-lg w-96 lg:w-1/2 mx-auto py-10 px-10 rounded-full h-50">
          <div className="text-center">
            <progress className="progress w-full"></progress>
          </div>
        </div>
      ) : (
        <div className="shadow-lg w-96 lg:w-1/2 mx-auto py-10 h-50">
          <h1 className="text-center text-4xl font-bold">Login</h1>
          <form className="my-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-10/12 block mx-auto border-2 my-4 py-3 px-2 shadow-md focus:shadow-0"
              onBlur={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-10/12 block mx-auto border-2 my-4 py-3 px-2 shadow-md focus:shadow-0"
              onBlur={(e) => setPassword(e.target.value)}
              required
            />
            <div className="text-right pr-10 lg:pr-16">
              <p className="text-rose-500 text-center" id="error"></p>
              <button
                onClick={handleSignIn}
                className="btn bg-indigo-500 hover:bg-transparent hover:text-indigo-500 border-2 border-transparent hover:border-2 hover:border-primary"
              >
                Login
              </button>
            </div>
            <span
              className="text-left pl-16 underline cursor-pointer text-indigo-500 hover:decoration-none"
              onClick={forgetPassword}
            >
              Forgot Password?
            </span>
            <p className="pl-10 lg:pl-16">
              New in Manufacturer Website? &nbsp;
              <Link className="text-primary underline" to="/register">
                Register
              </Link>
            </p>
          </form>
          <div className="divider w-10/12 mx-auto">OR</div>
          <p className="text-rose-500 text-center">{gError?.message}</p>
          <div className="text-center flex justify-around flex-wrap w-8/12 mx-auto">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-success my-4"
            >
              Continue with Google
            </button>
          </div>
        </div>
      )}{" "}
    </div>
  );
};

export default Login;
