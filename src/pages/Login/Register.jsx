import { createUserWithEmailAndPassword } from "firebase/auth";

import auth from "../../../public/firebase/firebase.config";

import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";

    console.log(name, email, password);

    // const regExForPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;

    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/.test(password)) {
      setErrorMessage(
        "Password must contain at least one letter, one digit, and be at least 6 characters long."
      );
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        setSuccessMessage("User craeted successfully!");
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage(error.message);
      });
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <h2 className="text-red-500 text-xl">Please Register</h2>

        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleRegister}
            className="flex flex-col gap-4 px-5 py-9"
          >
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
            <div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <span
                onClick={handlePasswordVisibility}
                className="absolute -ml-7 mt-4"
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </span>
            </div>
            <div className="text-xs">
              <input type="checkbox" name="checkbox" id="chk" />
              <label htmlFor="chk">
                Accept the <a href="">terms and conditions</a>{" "}
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-secondary">Register</button>
            </div>
          </form>
          {successMessage && (
            <p className="text-center text-green-700 mb-5">{successMessage}</p>
          )}
          {errorMessage && (
            <p className="text-center text-red-500 mb-5 px-4">{errorMessage}</p>
          )}
          <p className="text-center text-xs mb-5">
            Alreadey registered? <Link to="/login"> then login </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
