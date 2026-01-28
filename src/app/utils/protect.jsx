"use client";
import { isLoggedIn } from "./auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const useProtectedRoute = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  return loading;
};
