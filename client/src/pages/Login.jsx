import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/");
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", userData)
      .then((res) => {
        // console.log(res);
        toast.success(res.data.message);
        if (res.status === 200) {
          navigate(`/home?username=${res.data.username}`);
        }
      })
      .catch(() => toast.error("Invalid email or password"));
    // console.log(userData);
  };

  return (
    <main className="h-screen flex items-center justify-center">
      <form
        className="card bg-base-100 h-2/4 w-96 shadow-xl flex flex-col items-center justify-center gap-5 border-2 border-gray-200"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center text-2xl font-medium antialiased">Login</h2>
        <div className="flex flex-col gap-5">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <p className="text-gray-400">Email</p>
            <input
              type="text"
              className="grow"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          </label>

          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-gray-400">Password</p>
            <input
              type="password"
              className="grow"
              name="password"
              value={userData.password}
              onChange={handleChange}
            />
          </label>

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </div>

        <div>
          Don't have an account?{" "}
          <a className="link" onClick={goToRegister}>
            Register Here.
          </a>
        </div>
      </form>
    </main>
  );
}