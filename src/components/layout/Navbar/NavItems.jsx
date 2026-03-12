import { motion } from "framer-motion";
import { NAV_ITEMS } from "@/constants"

const NavItems = ({ scrollToSection, textColor }) => {
  return NAV_ITEMS.map((item) => (
    <motion.button
      key={item}
      whileHover={{ y: -2 }}
      onClick={() => scrollToSection(item.toLowerCase())}
      className={`text-sm uppercase tracking-wider transition-colors ${textColor}`}
    >
      {item}
    </motion.button>
  ));
};

export default NavItems;