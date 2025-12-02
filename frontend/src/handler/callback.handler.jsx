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
        localStorage.setItem("Name", res.data.user.name);

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
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black">
        <div className="h-10 w-10 bg-transparent rounded-full border-4 border-s-emerald-400 animate-spin"></div>
        <div className="mt-4 text-lg text-white">Loading</div>
      </div>
    </>
  )
}
