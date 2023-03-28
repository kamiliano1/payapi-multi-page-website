import ReadyToStartForm from "@/src/Layout/Input/ReadyToStartForm";
import React from "react";
import ContactForm from "./ContactForm";
import InnovatorsList from "./InnovatorsList";

type ContactProps = {};

const Contact: React.FC<ContactProps> = () => {
  return (
    <main className="lg:py-20 sm:w-[70%] sm:mx-auto lg:w-auto ">
      <h1 className="text-600 leading-9 font-bold mt-12 mb-10 tracking-[-0.196154px] sm:text-700 lg:text-800 sm:mt-[4.6875rem] max-w-[550px] lg:max-w-[630px] mx-auto lg:mx-0 ">
        Submit a help request and we`ll get in touch shortly.
      </h1>
      <div className="lg:flex lg:text-start">
        <ContactForm />
        <InnovatorsList />
      </div>
      <div className="px-6 text-center">
        <ReadyToStartForm />
      </div>
    </main>
  );
};
export default Contact;
