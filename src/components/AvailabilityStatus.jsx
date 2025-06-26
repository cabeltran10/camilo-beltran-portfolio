import { motion } from "framer-motion";
import { AVAILABILITY_STATUS_CONTENT } from "../utils/siteContent";
import { itemVariants } from "../utils/helper";

const AvailabilityStatus = ({ isDarkMode }) => {
  return (
    <motion.div
      variants={itemVariants}
      className={`w-full px-4 py-4 sm:px-6 sm:py-6 rounded-xl border mb-6 ${
        isDarkMode
          ? AVAILABILITY_STATUS_CONTENT.box.dark
          : AVAILABILITY_STATUS_CONTENT.box.light
      }`}
    >
      <div className="flex items-center space-x-3 mb-2">
        <div
          className={`w-3 h-3 rounded-full animate-pulse ${AVAILABILITY_STATUS_CONTENT.pulseColor}`}
        />
        <span className="font-medium text-green-500">
          {AVAILABILITY_STATUS_CONTENT.title}
        </span>
      </div>
      <p
        className={`text-sm break-words ${
          isDarkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {AVAILABILITY_STATUS_CONTENT.text}
      </p>
    </motion.div>
  );
};

export default AvailabilityStatus;
