"use client";

export const loginUser = () => {
  document.cookie = "isLoggedIn=true; path=/";
};

export const logoutUser = () => {
  document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};

export const isLoggedIn = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("isLoggedIn=true");
};
