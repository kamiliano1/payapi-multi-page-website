import SecondaryLightButton from "@/src/Layout/Buttons/SecondaryLightButton";
import InputCheckbox from "@/src/Layout/Input/InputCheckbox";
import ReadyToStartForm from "@/src/Layout/Input/ReadyToStartForm";
import React from "react";

type PricingProps = {};

const Pricing: React.FC<PricingProps> = () => {
  return (
    <div className="text-center px-6 lg:text-start lg:mx-auto">
      <h1 className="text-sanJuanBlue text-600 leading-9 font-bold mt-12 sm:text-700 lg:text-800 ">
        Pricing
      </h1>
      <section className="max-w-[1110px]">
        <div className="sm:flex sm:gap-3 lg:gap-7">
          <div className="max-w-[350px]">
            <h2 className="text-500 text-darkPink font-bold mb-4 mt-12 lg:text-600">
              Free Plan
            </h2>
            <p className="font-publicSans text-100 text-lightSanJuanBlue pb-2 sm:h-16">
              Build and test using our core set of products with up to 100 API
              requests
            </p>
            <p className="text-800 leading-[4.5rem] font-bold text-sanJuanBlue sm:text-700 sm:leading-[4.5rem] lg:text-800">
              $0.00
            </p>
            <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
            <ul className="flex justify-center lg:justify-start">
              <li className="space-y-[.5rem] ">
                <InputCheckbox checked={true} name={"Transactions"} />
                <InputCheckbox checked={true} name={"Auth"} />
                <InputCheckbox checked={true} name={"Identity"} />
                <InputCheckbox checked={false} name={"Investments"} />
                <InputCheckbox checked={false} name={"Assets"} />
                <InputCheckbox checked={false} name={"Liabilities"} />
                <InputCheckbox checked={false} name={"Income"} />
              </li>
            </ul>
            <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
            <SecondaryLightButton
              cssClasses="px-5 py-[.9rem]"
              buttonText="Request Access"
            />
          </div>
          <div className="max-w-[350px]">
            <h2 className="text-500 text-darkPink font-bold mb-4 mt-12 lg:text-600">
              Basic Plan
            </h2>
            <p className="font-publicSans text-100 text-lightSanJuanBlue pb-2 sm:h-16">
              Launch your project with unlimited requests and no contractual
              minimums
            </p>
            <p className="text-800 leading-[4.5rem] font-bold text-sanJuanBlue sm:text-700 sm:leading-[4.5rem] lg:text-800">
              $249.00
            </p>
            <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
            <ul className="flex justify-center lg:justify-start">
              <li className="space-y-[.5rem] ">
                <InputCheckbox checked={true} name={"Transactions"} />
                <InputCheckbox checked={true} name={"Auth"} />
                <InputCheckbox checked={true} name={"Identity"} />
                <InputCheckbox checked={true} name={"Investments"} />
                <InputCheckbox checked={true} name={"Assets"} />
                <InputCheckbox checked={false} name={"Liabilities"} />
                <InputCheckbox checked={false} name={"Income"} />
              </li>
            </ul>
            <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
            <SecondaryLightButton
              cssClasses="px-5 py-[.9rem]"
              buttonText="Request Access"
            />
          </div>
          <div className="max-w-[350px]">
            <h2 className="text-500 text-darkPink font-bold mb-4 mt-12 lg:text-600">
              Premium Plan
            </h2>
            <p className="font-publicSans text-100 text-lightSanJuanBlue pb-2 sm:h-16">
              Get tailored solutions, volume pricing, and dedicated support for
              your team
            </p>
            <p className="text-800 leading-[4.5rem] font-bold text-sanJuanBlue sm:text-700 sm:leading-[4.5rem] lg:text-800">
              $499.00
            </p>
            <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
            <ul className="flex justify-center lg:justify-start">
              <li className="space-y-[.5rem] ">
                <InputCheckbox checked={true} name={"Transactions"} />
                <InputCheckbox checked={true} name={"Auth"} />
                <InputCheckbox checked={true} name={"Identity"} />
                <InputCheckbox checked={true} name={"Investments"} />
                <InputCheckbox checked={true} name={"Assets"} />
                <InputCheckbox checked={true} name={"Liabilities"} />
                <InputCheckbox checked={true} name={"Income"} />
              </li>
            </ul>
            <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
            <SecondaryLightButton
              cssClasses="px-5 py-[.9rem]"
              buttonText="Request Access"
            />
          </div>
        </div>
        <ReadyToStartForm />
      </section>
    </div>
  );
};
export default Pricing;
