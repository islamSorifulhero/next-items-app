"use client";

export const loginUser = () => {
  document.cookie = "isLoggedIn=true; path=/";
  window.dispatchEvent(new Event("loginChange"));
};

export const logoutUser = () => {
  document.cookie = "isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  window.dispatchEvent(new Event("loginChange"));
};

export const isLoggedIn = () => {
  if (typeof document === "undefined") return false;
  return document.cookie.includes("isLoggedIn=true");
};
