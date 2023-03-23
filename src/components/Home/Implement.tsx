import Image from "next/image";
import React from "react";
import implementImg from "../../../public/assets/home/desktop/illustration-easy-to-implement.svg";
import twoPhonesImg from "../../../public/assets/home/desktop/illustration-simple-ui.svg";
import personalFinancesIcon from "../../../public/assets/home/desktop/icon-personal-finances.svg";
import bankingCoverageIcon from "../../../public/assets/home/desktop/icon-banking-and-coverage.svg";
import consumerPaymentIcon from "../../../public/assets/home/desktop/icon-consumer-payments.svg";
import InputText from "@/src/Layout/Input/InputText";
import MainButton from "@/src/Layout/Buttons/MainButton";
import circle from "../../../public/assets/shared/desktop/bg-pattern-circle.svg";
type ImplementProps = {};

const Implement: React.FC<ImplementProps> = () => {
  return (
    <div className="text-center px-6 lg:px-20 mb-20 max-w-[1400px] mx-auto ">
      <section className="lg:flex lg:items-center">
        <Image
          src={implementImg}
          alt="computer window with code"
          className="w-[350px] lg:w-auto mx-auto lg:-ml-14"
        />
        <div className="flex-grow lg:text-start">
          <h2 className="text-4xl leading-9 tracking-[-0.276923px] text-sanJuanBlue sm:text-700 font-bold ">
            Easy to implement
          </h2>
          <p className="text-200 font-publicSans text-lightSanJuanBlue mt-6 sm:max-w-[573px] sm:mx-auto lg:mx-0 ">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </section>
      <section className="lg:flex lg:items-center relative">
        <Image
          src={twoPhonesImg}
          alt="screen of two phones"
          className="w-[350px] sm:w-[363px] lg:w-auto mx-auto mt-8 order-2  z-10"
        />
        <Image
          src={circle}
          alt=""
          // className="absolute top-[-590px] w-[780px] h-[780px] object-none left-0 sm:top-[-575px] lg:top-[-420px] lg:left-[-300px]"
          className="hidden lg:block absolute right-[-410px] w-[780px] h-[780px] "
        />
        <div className="w-[35%] lg:text-start">
          <h2 className="text-4xl leading-9 tracking-[-0.276923px] text-sanJuanBlue sm:text-700 font-bold">
            Simple UI & UX
          </h2>
          <p className="text-200 font-publicSans text-lightSanJuanBlue mt-6 sm:max-w-[573px] mx-auto">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </section>
      <section className="sm:flex sm:gap-5 sm:my-[6.25rem]">
        <div className="my-6">
          <Image
            src={personalFinancesIcon}
            alt="personal finances icon"
            className="mx-auto mb-8 sm:w-[88px] lg:w-[106px]"
          ></Image>
          <h3 className="font-bold mb-4 text-300">Personal Finances</h3>
          <p className="text-200 tracking-[-0.115385px] font-publicSans text-lightSanJuanBlue">
            Consolidate financial data from multiple sources and categorize
            transactions up to 2 years of history. Analyze reports to reconcile
            activities in your account.{" "}
          </p>
        </div>
        <div className="my-6">
          <Image
            src={bankingCoverageIcon}
            alt="banking covereage icon"
            className="mx-auto mb-8 sm:w-[88px] lg:w-[106px]"
          ></Image>
          <h3 className="font-bold mb-4 text-300">Banking & Coverage</h3>
          <p className="text-200 tracking-[-0.115385px] font-publicSans text-lightSanJuanBlue">
            With our platform, you can speed up account onboarding and support
            ongoing payments for checking, savings, credit card, and brokerage
            accounts.
          </p>
        </div>
        <div className="my-6">
          <Image
            src={consumerPaymentIcon}
            alt="consumer payment icon"
            className="mx-auto mb-8 sm:w-[88px] lg:w-[106px]"
          ></Image>
          <h3 className="font-bold mb-4 text-300">Consumer Paymentss</h3>
          <p className="text-200 tracking-[-0.115385px] font-publicSans text-lightSanJuanBlue">
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </section>
      <section className="lg:flex lg:justify-between ">
        <h3 className="text-600 leading-9 font-bold mt-14 sm:text-700 sm:mb-10">
          Ready to start?
        </h3>
        <form
          className="flex flex-col sm:flex-row sm:items-center 
        sm:justify-center lg:justify-start lg:mt-5 max-w-[445px] mx-auto lg:mx-0"
        >
          <InputText />
          <MainButton cssClasses="py-[0.625rem] sm:px-6 input-box-shadow" />
        </form>
      </section>
    </div>
  );
};
export default Implement;
