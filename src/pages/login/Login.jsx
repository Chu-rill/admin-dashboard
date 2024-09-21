import React, { useState } from "react";
import { Link } from "react-router-dom";
// import useLogin from "../../hooks/useLogin";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  //   const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await login(username, password);
  };

  const toggleShow = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className=" flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className=" w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 ">
        <h1 className=" text-3xl font-semibold text-center text-gray-300 ">
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className=" text-base label-text ">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className=" w-full input input-bordered h-10 "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className=" relative">
            <label className="label p-2">
              <span className=" text-base label-text ">Password</span>
            </label>
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Enter password"
              className=" w-full input input-bordered h-10 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <FaRegEyeSlash
                className=" absolute right-4 top-[50px] w-6 h-6  hover:cursor-pointer"
                onClick={toggleShow}
              />
            ) : (
              <FaRegEye
                className=" absolute right-4 top-[50px] w-6 h-6  hover:cursor-pointer"
                onClick={toggleShow}
              />
            )}
          </div>

          <Link to="/signup" className=" text-sm  mt-2 inline-block ">
            Don't have an account?
            <span className=" text-purple-500 ml-1 hover:text-blue-600">
              SignUp
            </span>
          </Link>
          <div>
            <Link to="/home">
              <button
                type="submit"
                className=" btn btn-accent btn-block btn-sm mt-2 "
              >
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
