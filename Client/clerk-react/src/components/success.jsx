import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";

const Success = () => {
  const [data, setData] = useState("");
  const { getToken } = useAuth();

  async function callAPI() {
    const API_URL = "https://localhost:7110/api/Names/test2";
    const token = await getToken();
    console.log("token", token);
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(API_URL, config);
    console.log(response);
    setData(response.data);
  }

  async function callAPI2() {
    const API_URL = "https://localhost:7110/api/Names/test2";
    const response = await axios.get(API_URL);
    console.log(response);
    setData(response.data);
  }
  return (
    <>
      <h1>Success page</h1>
      <button onClick={callAPI}>Call API</button>
      <div>
        <p>{data}</p>
      </div>

      <button onClick={callAPI2}>Call API without token</button>
      <div>
        <p>call api without token </p>
        <p>{data}</p>
      </div>
    </>
  );
};

export default Success;
