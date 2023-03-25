import InputCheckbox from "@/src/Layout/Input/InputCheckbox";
import React from "react";

type PricingProps = {};

const Pricing: React.FC<PricingProps> = () => {
  return (
    <div>
      <h1>
        Pricing
        <div>
          {" "}
          <h2>Free Plan</h2>
          <p>
            Build and test using our core set of products with up to 100 API
            requests{" "}
          </p>
          <p>$0.00</p>
          <span>Linia</span>
          <ul>
            <li className="space-y-[.5rem]">
              {" "}
              {/* <input type="checkbox" name="Transaction" checked id="" />
              Transaciton */}
              <InputCheckbox checked={true} name={"Transactions"} />
              <InputCheckbox checked={true} name={"Auth"} />
              <InputCheckbox checked={true} name={"Identity"} />
              <InputCheckbox checked={false} name={"Investments"} />
              <InputCheckbox checked={false} name={"Assets"} />
              <InputCheckbox checked={false} name={"Liabilities"} />
              <InputCheckbox checked={false} name={"Income"} />
            </li>
          </ul>
        </div>
      </h1>
    </div>
  );
};
export default Pricing;
