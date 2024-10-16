import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Home Page</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </button>
    </>
  );
};

export default Home;
