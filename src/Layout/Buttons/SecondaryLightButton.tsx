import React from "react";

type SecondaryLightButtonProps = { cssClasses: string };

const SecondaryLightButton: React.FC<SecondaryLightButtonProps> = ({
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

export default SecondaryLightButton;
