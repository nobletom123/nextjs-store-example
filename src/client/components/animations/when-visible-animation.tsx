import { useEffect, FunctionComponent } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const WhenVisibleAnimation: FunctionComponent<{
  variants?: Variants;
  custom?: string | number;
}> = ({ children, variants, custom }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      custom={custom}
      variants={
        variants || {
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }
      }
    >
      {children}
    </motion.div>
  );
};
