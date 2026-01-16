"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] bg-base-200 flex items-center justify-center text-center overflow-hidden">
      {/* Animated Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl px-6"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6 drop-shadow-lg">
          Discover Amazing Products
        </h1>
        <p className="text-lg md:text-xl text-black/80 mb-8 drop-shadow-md">
          Browse items, view details, and manage products easily using our
          modern Next.js application.
        </p>

        <Link
          href="/items"
          className="btn btn-primary btn-lg shadow-lg hover:scale-105 transition-transform"
        >
          Explore Items
        </Link>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-black text-2xl animate-bounce"
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default HeroSection;
