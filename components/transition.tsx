"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Transition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ scale:0.9, opacity: 0 }}
      animate={{ scale:1, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}