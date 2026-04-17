import { motion } from "framer-motion";

const BGRINGS = ({ size }: { size: number }) => {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        border: "1.5px dashed rgba(168,139,250,0.4)",
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    />
  );
};
export default BGRINGS;
