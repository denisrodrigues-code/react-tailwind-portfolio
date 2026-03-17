import { motion } from "framer-motion";
import { navigation } from "@/data";

const MobileMenu = ({ isDarkMode, scrollToSection }) => {
  const textColor = isDarkMode
    ? "text-gray-400 hover:text-white"
    : "text-gray-600 hover:text-gray-900";

  return (
    <>
      {navigation.map((item) => (
        <motion.button
          key={item.id}
          whileHover={{ x: 5 }}
          onClick={() => scrollToSection(item.id)}
          className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${textColor}`}
        >
          {item.label}
        </motion.button>
      ))}
    </>
  );
};

export default MobileMenu;
