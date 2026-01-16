"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="bg-base-200 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left Side: Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-base-content uppercase tracking-tighter"
          >
            about <span className="text-primary">us</span>
          </motion.h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
          <p className="text-gray-500 mb-6">
            We built this platform to demonstrate a complete Next.js application, featuring authentication, public pages, protected routes, and an intuitive user interface.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="flex flex-col items-center text-center p-4 bg-base-100 rounded-lg shadow hover:shadow-lg transition">
              <FaUsers className="text-3xl text-primary mb-2" />
              <p className="font-semibold">1000+ Users</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-base-100 rounded-lg shadow hover:shadow-lg transition">
              <FaLightbulb className="text-3xl text-primary mb-2" />
              <p className="font-semibold">Innovative Ideas</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-base-100 rounded-lg shadow hover:shadow-lg transition">
              <FaRocket className="text-3xl text-primary mb-2" />
              <p className="font-semibold">Fast & Reliable</p>
            </div>
          </div>

          <Link href="/items" className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform">
            Explore Items
          </Link>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 flex justify-center"
        >
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=600&q=80"
            alt="About Us Image"
            className="rounded-3xl shadow-lg object-cover max-h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
