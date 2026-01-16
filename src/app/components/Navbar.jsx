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
    toast.success("Logged out successfully!");

    setTimeout(() => {
      router.push("/login");
    }, 1000);
  };

  const NavLinks = () => (
    <>
      <Link href="/" className="btn font-bold btn-ghost w-full md:w-auto">
        Home
      </Link>
      <Link href="/items" className="btn font-bold btn-ghost w-full md:w-auto">
        Items
      </Link>

      {loggedIn ? (
        <>
          <Link
            href="/add-item"
            className="btn bg-sky-100 font-bold w-full md:w-auto"
          >
            Add Item
          </Link>
          <button
            onClick={handleLogout}
            className="btn font-bold btn-error w-full md:w-auto"
          >
            Logout
          </button>
        </>
      ) : (
        <Link href="/login" className="btn font-bold btn-primary w-full md:w-auto">
          Login
        </Link>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-6">
      {/* Left */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            ☰
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>

        <Link href="/" className="text-xl font-bold ml-2">
          NextItems
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-end hidden md:flex gap-3">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
