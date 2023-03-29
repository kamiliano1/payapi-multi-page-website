import React from "react";
import FormEmail from "./FormEmail";

type ReadyToStartFormProps = {};

const ReadyToStartForm: React.FC<ReadyToStartFormProps> = () => {
  return (
    <section className="lg:flex lg:justify-between max-w-[1110px] mx-auto py-20">
      <h3 className="text-600 leading-9 font-bold mt-14 sm:text-700 sm:mb-10">
        Ready to start?
      </h3>
      <FormEmail />
    </section>
  );
};
export default ReadyToStartForm;
