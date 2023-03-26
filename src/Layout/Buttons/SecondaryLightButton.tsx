import React from "react";

type SecondaryLightButtonProps = { cssClasses: string; buttonText: string };

const SecondaryLightButton: React.FC<SecondaryLightButtonProps> = ({
  cssClasses,
  buttonText,
}) => {
  return (
    <button
      className={`bg-none text-100 text-sanJuanBlue rounded-3xl font-publicSans 
      font-bold  tracking-[-0.115385px]
    hover:text-linkWaterWhite hover:bg-mirageBlue 
    disabled:opacity-50 border-[1px] border-sanJuanBlue ${cssClasses} `}
    >
      {buttonText}
    </button>
  );
};

export default SecondaryLightButton;
