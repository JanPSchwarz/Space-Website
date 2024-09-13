"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function AnimateMainContent({ children }) {
  const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.5 }}>
      {children}
    </motion.div>
  );
}
