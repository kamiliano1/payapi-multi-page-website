import CircleBackground from "@/src/Layout/CircleBackground/CircleBackground";
import ReadyToStartForm from "@/src/Layout/Input/ReadyToStartForm";
import Image from "next/image";
import React from "react";
import bankingCoverageIcon from "../../../public/assets/home/desktop/icon-banking-and-coverage.svg";
import consumerPaymentIcon from "../../../public/assets/home/desktop/icon-consumer-payments.svg";
import personalFinancesIcon from "../../../public/assets/home/desktop/icon-personal-finances.svg";
import implementImg from "../../../public/assets/home/desktop/illustration-easy-to-implement.svg";
import twoPhonesImg from "../../../public/assets/home/desktop/illustration-simple-ui.svg";
type ImplementProps = {};

const Implement: React.FC<ImplementProps> = () => {
  return (
    <div className="text-center px-6 sm:px-[2.4375rem] max-w-[1400px] mx-auto overflow-hidden lg:px-20">
      <section className="lg:flex lg:items-center max-w-[1110px] mx-auto ">
        <Image
          src={implementImg}
          alt="computer window with code"
          className="w-[350px] sm:w-[450px] lg:w-auto mx-auto lg:-ml-14"
        />
        <div className="flex-grow lg:text-start">
          <h2 className="text-4xl leading-9 tracking-[-0.276923px] text-sanJuanBlue sm:text-700 font-bold ">
            Easy to implement
          </h2>
          <p className="text-200 font-publicSans text-lightSanJuanBlue mt-6 max-w-[475px] mx-auto lg:mx-0 ">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </section>
      <section className="lg:flex lg:items-center relative max-w-[1110px] mx-auto">
        <Image
          src={twoPhonesImg}
          alt="screen of two phones"
          className="w-[350px] sm:w-[363px] mx-auto mt-8 order-2 z-10 lg:w-[700px] lg:mr-[-3rem]"
        />
        <CircleBackground cssClasses="hidden lg:block absolute right-[-410px] w-[780px] h-[780px]" />
        <div className="lg:text-start lg:w-[505px]">
          <h2 className="text-4xl leading-9 tracking-[-0.276923px] text-sanJuanBlue sm:text-700 font-bold">
            Simple UI & UX
          </h2>
          <p className="text-200 font-publicSans text-lightSanJuanBlue mt-6 sm:max-w-[445px] lg:mx-0 max-w-[475px] mx-auto">
            Our pre-built form is easy to integrate in your app or website’s
            checkout flow and designed to optimize conversion.
          </p>
        </div>
      </section>
      <section className="sm:flex sm:gap-5  lg:mt-6 max-w-[1110px] mx-auto">
        <div className="my-6">
          <Image
            src={personalFinancesIcon}
            alt="personal finances icon"
            className="mx-auto mb-8 sm:w-[88px] lg:w-[106px]"
          ></Image>
          <h3 className="font-bold mb-4 text-300">Personal Finances</h3>
          <p className="text-200 tracking-[-0.115385px] font-publicSans text-lightSanJuanBlue max-w-[475px] mx-auto">
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
          <p className="text-200 tracking-[-0.115385px] font-publicSans text-lightSanJuanBlue max-w-[475px] mx-auto">
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
          <p className="text-200 tracking-[-0.115385px] font-publicSans text-lightSanJuanBlue max-w-[475px] mx-auto">
            It’s easier to set up secure bank payments with us through a flow
            designed with the user experience in mind. Customers could instantly
            authenticate their account.
          </p>
        </div>
      </section>
      <ReadyToStartForm />
    </div>
  );
};
export default Implement;
