import React from "react";
import Link from "next/link";
type SecondaryDarkButtonProps = {
  cssClasses: string;
};

const SecondaryDarkButton: React.FC<SecondaryDarkButtonProps> = ({
  cssClasses,
}) => {
  return (
    <Link
      className={`inline-block bg-mirageBlue text-100 rounded-3xl font-publicSans font-bold text-linkWaterWhite tracking-[-0.115385px]
    hover:bg-linkWaterWhite hover:text-mirageBlue disabled:opacity-50 border-[1px] border-linkWaterWhite ${cssClasses} `}
      href="about"
    >
      About Us
    </Link>
  );
};
export default SecondaryDarkButton;
