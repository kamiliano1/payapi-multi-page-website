import React, { useEffect, useState } from "react";
import Image from "next/image";
import circle from "../../../public/assets/shared/desktop/bg-pattern-circle.svg";
import bigCircle from "../../../public/assets/shared/desktop/bg-pattern-circle-big.svg";
type CircleBackgroundProps = { cssClasses: string; circleSection?: string };

const CircleBackground: React.FC<CircleBackgroundProps> = ({
  cssClasses,
  circleSection,
}) => {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    function handleWindowResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <Image
      loading="eager"
      src={
        windowWidth > 694 && windowWidth < 1200 && circleSection === "home"
          ? bigCircle
          : circle
      }
      alt=""
      className={`absolute object-none  ${cssClasses}`}
    />
  );
};
export default CircleBackground;
