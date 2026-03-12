import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/constants/navigation";

const MobileMenu = ({ isDarkMode, scrollToSection }) => {
  const textColor = isDarkMode
    ? "text-gray-400 hover:text-white"
    : "text-gray-600 hover:text-gray-900";

  return (
    <>
      {NAV_ITEMS.map((item) => (
        <motion.button
          key={item}
          whileHover={{ x: 5 }}
          onClick={() => scrollToSection(item.toLowerCase())}
          className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${textColor}`}
        >
          {item}
        </motion.button>
      ))}
    </>
  );
};

export default MobileMenu;