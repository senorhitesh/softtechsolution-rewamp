import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedNumber({
  value,
  className,
  springOptions,
}: {
  value: number;
  className?: string;
  springOptions?: any;
}) {
  const spring = useSpring(value, springOptions);

  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span className={`tabular-nums ${className}`}>{display}</motion.span>
  );
}
