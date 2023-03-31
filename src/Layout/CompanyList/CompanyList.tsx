import {
  TeslaIcon,
  MicrosoftIcon,
  HewlettPackardIcon,
  OracleIcon,
  GoogleIcon,
  NvidiaIcon,
} from "@/public/assets/shared/desktop/CompanyIcons";
import { motion } from "framer-motion";
import React from "react";

type CompanyListProps = { iconColor: string };

const CompanyList: React.FC<CompanyListProps> = ({ iconColor }) => {
  return (
    <div
      className={`${iconColor} px-6 w-full lg:max-w-[550px] 
      grid grid-cols-[repeat(auto-fill,_minmax(160px,_1fr))] 
      gap-y-10 place-content-center max-w-[536px] mx-auto
order-2 lg:px-0 lg:gap-x-5`}
    >
      <motion.div
        transition={{ delay: 0.1 }}
        initial={{ opacity: 0 }}
        animate={{ y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <TeslaIcon />
      </motion.div>
      <motion.div
        transition={{ delay: 0.3 }}
        initial={{ opacity: 0 }}
        animate={{ y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <MicrosoftIcon />
      </motion.div>
      <motion.div
        transition={{ delay: 0.5 }}
        initial={{ opacity: 0 }}
        animate={{ y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <HewlettPackardIcon />
      </motion.div>
      <motion.div
        transition={{ delay: 0.7 }}
        initial={{ opacity: 0 }}
        animate={{ y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <OracleIcon />
      </motion.div>
      <motion.div
        transition={{ delay: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <GoogleIcon />
      </motion.div>
      <motion.div
        transition={{ delay: 1.2 }}
        initial={{ opacity: 0 }}
        animate={{ y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <NvidiaIcon />
      </motion.div>
    </div>
  );
};
export default CompanyList;
