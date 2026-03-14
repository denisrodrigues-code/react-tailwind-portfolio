import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const textColor = isDarkMode
    ? "text-gray-400 hover:text-white"
    : "text-gray-600 hover:text-gray-900";

  const buttonColor = isDarkMode
    ? "text-gray-400 hover:text-white hover:bg-gray-800"
    : "text-gray-600 hover:text-gray-900 hover:bg-gray-200";

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-6 py-4 ${
        isDarkMode ? "bg-gray-950/80 border-gray-800" : "bg-gray-50/80 border-gray-200"
      } backdrop-blur-md border-b`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
          <Code2 size={24} className="text-blue-500" />
          <span className={`text-lg ml-1 ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}>Denis Rodrigues</span>
        </motion.div>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <NavItems scrollToSection={scrollToSection} textColor={textColor} />

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full transition-colors ${buttonColor}`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="md:hidden flex items-center space-x-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => toggleDarkMode(isDarkMode ? "light" : "dark")}
            className={`p-2 rounded-full ${buttonColor}`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 rounded-full ${buttonColor}`}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`md:hidden mt-4 p-4 rounded-lg ${
              isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
            } border`}
          >
            <MobileMenu
              isDarkMode={isDarkMode}
              scrollToSection={scrollToSection}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;