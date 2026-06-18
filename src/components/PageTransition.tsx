import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <motion.div
      key={location.pathname}
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
