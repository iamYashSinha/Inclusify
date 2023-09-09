import React, { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { auth, provider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [value, setValue] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [name, setName] = useState("");

  const handleClick = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setValue(user.email);
      setPhotoURL(user.photoURL);
      sessionStorage.setItem("email", user.email);
      sessionStorage.setItem("photoURL", user.photoURL);
    } catch (error) {
      console.error("Error signing in with popup:", error);
    }
  };

  useEffect(() => {
    const storedEmail = sessionStorage.getItem("email");
    const storedPhotoURL = sessionStorage.getItem("photoURL");

    if (storedEmail) {
      setValue(storedEmail);
    }

    if (storedPhotoURL) {
      setPhotoURL(storedPhotoURL);
    }
  }, []);

  const navigate = useNavigate();

  return (
    <div className="login">
      {value ? (
        <div>
          <p>Welcome, {value}</p>
          {photoURL && <img src={photoURL} alt="User" />}
          {navigate('/')}
        </div>
      ) : (
        <Button
          onClick={handleClick}
          style={{
            background: "#CFD9F3",
            padding: "15px 30px 15px 30px",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
          }}
        >
          Login With Google
        </Button>
      )}
    </div>
  );
}

export default Login;
