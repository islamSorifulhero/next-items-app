"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isLoggedIn, logoutUser } from "../utils/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoggedIn(isLoggedIn());

    const handleLoginChange = () => setLoggedIn(isLoggedIn());
    window.addEventListener("loginChange", handleLoginChange);

    return () => window.removeEventListener("loginChange", handleLoginChange);
  }, []);

  const handleLogout = () => {
    logoutUser();

    // 🔔 LOGOUT TOAST
    toast.success("Logged out successfully!");

    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          NextItems
        </Link>
      </div>

      <div className="flex gap-3">
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
        <Link href="/items" className="btn btn-ghost">
          Items
        </Link>

        {loggedIn ? (
          <>
            <Link href="/add-item" className="btn btn-secondary">
              Add Item
            </Link>
            <button onClick={handleLogout} className="btn btn-error">
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
