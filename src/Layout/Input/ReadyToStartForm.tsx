import React from "react";
import FormEmail from "./FormEmail";
import InAnimation from "../InAnimation/InAnimation";
type ReadyToStartFormProps = { cssClasses?: string };

const ReadyToStartForm: React.FC<ReadyToStartFormProps> = ({ cssClasses }) => {
  return (
    <InAnimation
      transformValue="translateX(-200px)"
      delay={0.5}
      cssClasses={`lg:flex lg:justify-between py-20 ${cssClasses} lg:items-center`}
    >
      <h3 className="text-600 leading-9 font-bold sm:text-700 lg:text-[clamp(2rem,_3.2vw,_3rem)] sm:mb-10 lg:mb-0 sm:text-center">
        Ready to start?
      </h3>
      <FormEmail />
    </InAnimation>
  );
};
export default ReadyToStartForm;
