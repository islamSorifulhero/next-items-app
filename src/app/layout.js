import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Next Items App",
  description: "Simple Next.js App with Auth & Items",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <Toaster position="top-right" reverseOrder={false} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
