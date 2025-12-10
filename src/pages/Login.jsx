import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === "12345") {
      navigate("/home");
    } else {
      alert("Contraseña incorrecta"); // puedes quitar este alert si no lo quieres
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-8">
      <div className="w-full max-w-sm flex flex-col items-center gap-6">

        <img src={logo} alt="FukuBank" className="w-32 h-32 object-contain" />

        <div className="w-full flex flex-col gap-4">
          <input
            value="JUANCHO"
            readOnly
            className="w-full px-4 py-3 rounded-xl border border-slate-300 shadow-sm 
                       bg-gray-100 text-slate-700 cursor-not-allowed opacity-80
                       focus:outline-none"
          />

          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-300 shadow-sm
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                       text-slate-700"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-xl 
                     bg-[#5A43D1] hover:bg-[#4c38b3]
                     text-white font-semibold tracking-wide
                     shadow-md hover:shadow-xl
                     transition-all duration-300"
        >
          Login
        </button>

      </div>
    </div>
  );
}
