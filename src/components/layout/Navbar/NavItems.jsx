import { motion } from "framer-motion";
import { navigation } from "@/data";

const NavItems = ({ scrollToSection, textColor }) => {
  return navigation.map((item) => (
    <motion.button
      key={item.id}
      whileHover={{ y: -2 }}
      onClick={() => scrollToSection(item.id)}
      className={`text-sm uppercase tracking-wider transition-colors ${textColor}`}
    >
      {item.label}
    </motion.button>
  ));
};

export default NavItems;
