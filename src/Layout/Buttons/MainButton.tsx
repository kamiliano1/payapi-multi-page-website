import React from "react";
type MainButtonProps = {
  cssClasses: string;
};

const MainButton: React.FC<MainButtonProps> = ({ cssClasses }) => {
  return (
    <button
      className={`bg-darkPink text-100 rounded-3xl font-publicSans font-bold text-linkWaterWhite tracking-[-0.115385px]
    hover:bg-charmPink disabled:opacity-50 ${cssClasses} z-50`}
    >
      Schedule a Demo
    </button>
  );
};
export default MainButton;
