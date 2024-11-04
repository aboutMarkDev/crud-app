import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get("username");
  console.log(params);

  const navigate = useNavigate();

  const goBackToRegister = () => {
    navigate("/");
  };

  return (
    <main className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there, {username}</h1>
          <p className="py-6 line-clamp-4 antialiased tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="btn btn-primary" onClick={goBackToRegister}>
            Logout
          </button>
        </div>
      </div>
    </main>
  );
}
