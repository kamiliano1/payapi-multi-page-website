import React from "react";
import FormEmail from "./FormEmail";

type ReadyToStartFormProps = { cssClasses?: string };

const ReadyToStartForm: React.FC<ReadyToStartFormProps> = ({ cssClasses }) => {
  return (
    <section
      className={`lg:flex lg:justify-between max-w-[1110px] mx-auto py-20 ${cssClasses}`}
    >
      <h3 className="text-600 leading-9 font-bold sm:text-700 sm:mb-10 sm:text-center">
        Ready to start?
      </h3>
      <FormEmail />
    </section>
  );
};
export default ReadyToStartForm;
