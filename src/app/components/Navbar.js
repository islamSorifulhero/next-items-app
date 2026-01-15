"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          NextItems
        </Link>
      </div>

      <div className="flex gap-4">
        <Link href="/" className="btn btn-ghost">
          Home
        </Link>
        <Link href="/items" className="btn btn-ghost">
          Items
        </Link>
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
