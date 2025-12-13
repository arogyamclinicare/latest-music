"use client";

import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration:0.8, ease: "easeOut" }}
      className="relative flex items-center justify-center"
    >
      {/* Soft glow behind logo */}
      <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-br from-orange-300/40 to-pink-400/40" />

      {/* Logo image */}
      <motion.img
        src="/about/Logo/logo.png"
        alt="Earthquake Studio Logo"
        className="relative z-10 
           w-[320px] 
           sm:w-[380px] 
           md:w-[420px] 
           lg:w-[520px] 
           xl:w-[600px] 
           select-none"
        animate={{ y: [0, -30, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
        }}
        draggable={false}
      />
    </motion.div>
  );
}
