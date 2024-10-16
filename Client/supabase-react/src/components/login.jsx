import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useNavigate } from "react-router-dom";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublicKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabasePublicKey);

const Login = () => {
  const [event, setEvent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      console.log(event);
      if (event === "SIGNED_IN") {
        setEvent(event);
        navigate("/success");
      } else {
        setEvent(event);
        navigate("/login");
      }
    });
  }, [event]);

  return (
    <>
      <div className="container">
        <h1 className="center">Login</h1>
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["github"]}
          theme="dark"
        />
      </div>
    </>
  );
};

export default Login;
