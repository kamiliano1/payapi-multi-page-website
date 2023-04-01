import { useRef } from "react";
import { useInView } from "framer-motion";

type InAnimationProps = {
  children: React.ReactNode;
  transformValue: string;
  delay: number;
  cssClasses?: string;
};

const InAnimation: React.FC<InAnimationProps> = ({
  children,
  transformValue,
  delay,
  cssClasses,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className={cssClasses}
      ref={ref}
      style={{
        transform: isInView ? "none" : transformValue,
        opacity: isInView ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
};
export default InAnimation;
