# Next Items App

## 📌 Project Description

Next Items App is a modern Next.js 15/16 (App Router) based web application that demonstrates public and protected routes, mock authentication, item listing, item details, and product creation functionality.
The project is built to showcase a complete frontend workflow using Next.js with an Express.js API.

---

## 🚀 Live Site

Frontend (Vercel):
https://next-items-app-seven.vercel.app
---

## 🔐 Login Credentials (Mock Login)

Email: [soriful@islam.com]
Password: Asdfghj

---

## ✨ Features Implemented

* Landing page with **7 modern sections**
* Responsive **Navbar & Footer**
* Mock authentication using email & password
* Login & Logout functionality
* Cookie-based authentication state
* Public Items List page
* Public Item Details page
* **Protected Add Item page**
* Add new item via form
* **Toast notification on successful product creation**
* Toast notification on login/logout
* Fully responsive design (mobile & desktop)

---

## 🛣 Route Summary

* `/` → Home (Landing Page)
* `/login` → Login Page
* `/items` → Items List (Public)
* `/items/[id]` → Item Details (Public)
* `/add-item` → Add Item (Protected Route)

---

## 🛠 Technologies Used

* Next.js 15/16 (App Router)
* React
* Express.js (API)
* Tailwind CSS
* DaisyUI
* Framer Motion
* React Toastify / React Hot Toast

---

## ⚙ Setup & Installation Instructions

### Frontend (Next.js)

```bash
git clone https://github.com/islamSorifulhero/next-items-app.git
cd next-items-client
npm install
npm run dev
```

### Backend (Express API)

```bash
git clone https://github.com/islamSorifulhero/next-items-backend.git
cd next-items-server
npm install
node index.js
```

---

## 🧠 Brief Feature Explanation

* Authentication is implemented using a mock email/password system.
* Login state is stored using cookies.
* Protected routes redirect unauthenticated users to the login page.
* Items are fetched from an Express API.
* Toast notifications provide user feedback on actions like adding items or logging out.
* The UI is designed to be modern, clean, and fully responsive.