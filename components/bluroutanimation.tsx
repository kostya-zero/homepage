"use client";

import { AnimatePresence, motion } from "framer-motion";

interface BlurOutAnimationProps {
  children: React.ReactNode;
  index?: number;
  className?: string;
}

export default function BlurOutAnimation({
  children,
  index = 0,
  className = "",
}: Readonly<BlurOutAnimationProps>) {
  return (
    <AnimatePresence mode={"popLayout"}>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.07, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
