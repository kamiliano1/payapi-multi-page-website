import React from "react";
type SecondaryDarkButtonProps = {
  cssClasses: string;
};

const SecondaryDarkButton: React.FC<SecondaryDarkButtonProps> = ({
  cssClasses,
}) => {
  return (
    <button
      className={`bg-mirageBlue text-200 rounded-3xl font-publicSans font-bold text-linkWaterWhite tracking-[-0.115385px]
    hover:bg-linkWaterWhite hover:text-mirageBlue disabled:opacity-50 border-[1px] border-linkWaterWhite ${cssClasses} `}
    >
      About Us
    </button>
  );
};
export default SecondaryDarkButton;
