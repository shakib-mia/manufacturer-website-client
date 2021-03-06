import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { toast } from "react-toastify";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const id = localStorage.getItem("id");

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [sendEmailVerification, sending, verificationError] =
    useSendEmailVerification(auth);

  if (user) {
    console.log(user);

    user.user.displayName = firstName + " " + lastName;
    localStorage.setItem("user", user.user.displayName);
    localStorage.setItem("email", user.user.email);

    const userDetails = {
      email: user.user.email,
      name: user.user.displayName,
      password: password,
      role: "user",
    };

    fetch(`https://intense-ravine-32136.herokuapp.com/users`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    id ? navigate(`/purchase/${id}`) : navigate("/");

    // window.location.reload();
  }

  if (gUser) {
    const gUserSummary = {
      email: gUser.user.email,
      name: gUser.user.displayName,
    };
    localStorage.setItem("user", gUser.user.displayName);
    localStorage.setItem("email", gUser.user.email);
    id ? navigate(`/purchase/${id}`) : navigate("/");

    fetch("https://intense-ravine-32136.herokuapp.com/users", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(gUserSummary),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    window.location.reload();
  }

  return (
    <div className="h-screen flex items-center">
      {loading ? (
        <div className="shadow-lg w-96 lg:w-1/2 mx-auto py-10 px-10 rounded-full h-50">
          <div className="text-center">
            <progress className="progress w-full"></progress>
          </div>
        </div>
      ) : (
        <div className="shadow-lg w-96 lg:w-1/2 mx-auto py-10 h-50">
          <h1 className="text-center text-4xl font-bold">Register</h1>
          <div className="my-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-10/12 block mx-auto border-2 my-4 py-3 px-2 shadow-md focus:shadow-0"
              onBlur={(e) => setFirstName(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-10/12 block mx-auto border-2 my-4 py-3 px-2 shadow-md focus:shadow-0"
              onBlur={(e) => setLastName(e.target.value)}
              required
            />
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
                onClick={() => {
                  createUserWithEmailAndPassword(email, password);
                  sendEmailVerification(email);
                  toast.success("Email Verification link has been sent", {
                    position: "bottom-right",
                    autoClose: 5000,
                  });
                }}
                className="btn bg-indigo-500 hover:bg-transparent hover:text-indigo-500 border-2 border-transparent hover:border-2 hover:border-primary"
              >
                Register
              </button>
            </div>
            <p className="pl-10 lg:pl-16">
              Already Have an Account? &nbsp;
              <Link className="text-primary underline" to="/login">
                Login
              </Link>
            </p>
          </div>
          <div className="divider w-10/12 mx-auto">OR</div>
          <p className="text-rose-500 text-center">{gError?.message}</p>
          <div className="text-center flex justify-around flex-wrap w-8/12 mx-auto">
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-success my-4"
            >
              Continue with Google
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
