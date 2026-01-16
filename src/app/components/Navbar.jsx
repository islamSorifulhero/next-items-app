"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { isLoggedIn, logoutUser } from "../utils/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle login state
  useEffect(() => {
    setLoggedIn(isLoggedIn());
    const handleLoginChange = () => setLoggedIn(isLoggedIn());
    window.addEventListener("loginChange", handleLoginChange);

    return () => window.removeEventListener("loginChange", handleLoginChange);
  }, []);

  // Sticky navbar shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully!");
    setTimeout(() => router.push("/login"), 1000);
  };

  // NavLinks component
  const NavLinks = () => {
    const linkClass = (href) =>
      `btn font-bold w-full md:w-auto ${
        pathname === href
          ? "btn-primary text-white"
          : "btn-ghost text-gray-700 hover:text-primary"
      }`;

    return (
      <>
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/items" className={linkClass("/items")}>
          Items
        </Link>

        {loggedIn ? (
          <>
            <Link href="/add-item" className={linkClass("/add-item") + " bg-sky-1"}>
              Add Item
            </Link>
            <button
              onClick={handleLogout}
              className="btn font-bold w-full md:w-auto"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login" className={linkClass("/login") + " btn-primary"}>
            Login
          </Link>
        )}
      </>
    );
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-shadow ${
        scrolled ? "shadow-lg bg-base-100/95 backdrop-blur-md" : "bg-base-100"
      }`}
    >
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
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
    </div>
  );
};

export default Navbar;
