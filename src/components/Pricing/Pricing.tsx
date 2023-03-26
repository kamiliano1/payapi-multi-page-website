import SecondaryLightButton from "@/src/Layout/Buttons/SecondaryLightButton";
import InputCheckbox from "@/src/Layout/Input/InputCheckbox";
import ReadyToStartForm from "@/src/Layout/Input/ReadyToStartForm";
import React from "react";

type PricingProps = {};

const Pricing: React.FC<PricingProps> = () => {
  return (
    <div className="text-center px-6">
      <h1 className="text-sanJuanBlue text-600 leading-9 font-bold mt-12">
        Pricing
      </h1>
      <div>
        <h2 className="text-500 text-darkPink font-bold mb-4 mt-12">
          Free Plan
        </h2>
        <p className="font-publicSans text-lightSanJuanBlue pb-2">
          Build and test using our core set of products with up to 100 API
          requests
        </p>
        <p className="text-800 leading-[4.5rem] font-bold text-sanJuanBlue ">
          $0.00
        </p>
        <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
        <ul className="flex justify-center">
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
      <div>
        <h2 className="text-500 text-darkPink font-bold mb-4 mt-12">
          Basic Plan
        </h2>
        <p className="font-publicSans text-lightSanJuanBlue pb-2">
          Launch your project with unlimited requests and no contractual
          minimums
        </p>
        <p className="text-800 leading-[4.5rem] font-bold text-sanJuanBlue ">
          $249.00
        </p>
        <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
        <ul className="flex justify-center">
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
      <div>
        <h2 className="text-500 text-darkPink font-bold mb-4 mt-12">
          Premium Plan
        </h2>
        <p className="font-publicSans text-lightSanJuanBlue pb-2">
          Build and test using our core set of products with up to 100 API
          requests
        </p>
        <p className="text-800 leading-[4.5rem] font-bold text-sanJuanBlue ">
          $499.00
        </p>
        <span className="h-[1px] block bg-lightSanJuanBlue opacity-25 my-6"></span>
        <ul className="flex justify-center">
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
      <ReadyToStartForm />
    </div>
  );
};
export default Pricing;
