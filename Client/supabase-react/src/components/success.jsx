import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublicKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabasePublicKey);

const Success = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [token, setToken] = useState("");
  const [emp, setEmp] = useState({});

  useEffect(() => {
    async function userData() {
      await supabase.auth.getUser().then((x) => {
        if (x.data?.user) {
          setUser(x.data?.user);
          let item = localStorage.getItem("sb-tobqgdswgannjhgugrmf-auth-token");
          let parsedItem = JSON.parse(item);
          console.log("parsedItem", parsedItem);
          let accessToken = parsedItem["access_token"];
          console.log("accesstoken", accessToken);
          setToken(accessToken);
        }
      });
    }
    userData();
  }, []);

  async function logOut() {
    await supabase.auth.signOut();
    navigate("/login");
  }

  async function callAPI() {
    const API_URL = "https://localhost:7000/api/Values/names";
    let config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const response = await axios.get(API_URL, config);
    setEmp(response.data);
  }
  return (
    <>
      {Object.keys(user).length != 0 ? (
        <>
          <h1>Success</h1>
          <button onClick={logOut}>LogOut</button>
          <button onClick={callAPI}>Call API</button>
          <div className="empContainer">
            <p>{emp.id}</p>
            <p>{emp.name}</p>
            <p>{emp.department}</p>
          </div>
        </>
      ) : (
        <>
          <h1>user is not logged in</h1>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Go back to home
          </button>
        </>
      )}
    </>
  );
};

export default Success;
