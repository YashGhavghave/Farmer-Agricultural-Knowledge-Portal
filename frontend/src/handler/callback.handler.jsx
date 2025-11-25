import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function GoogleCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleCallback() {
      try {
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");
        const code_verifier = localStorage.getItem("code_verifier");

        if (!code) return;

        const res = await axios.post("http://localhost:3000/api/google/token", {
          code,
          code_verifier,
        });

        console.log("Google User:", res.data.user);

        // SAVE YOUR APP LOGIN TOKEN (IMPORTANT)
        localStorage.setItem("token", res.data.token);

        navigate("/");
      } catch (err) {
        console.error("Google login failed:", err);
        alert("Failed to login with Google");
      }
    }

    handleCallback();
  }, [navigate]);

  return (
    <>
      hello
    </>
  )
}
