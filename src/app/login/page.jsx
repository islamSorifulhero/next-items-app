"use client";
import { useRouter } from "next/navigation";
import { loginUser } from "../utils/auth";
import { useState } from "react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "soriful@islam.com" && password === "Asdfghj") {
      loginUser();

      // 🔔 SUCCESS TOAST
      toast.success("Login successful!");

      setError("");

      setTimeout(() => {
        router.push("/items");
      }, 1000);
    } else {
      setError("Invalid email or password");

      // 🔔 ERROR TOAST
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Login</h2>

          {error && <p className="text-red-500">{error}</p>}

          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full"
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-primary w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
