import { motion } from "framer-motion";

const HeroSocialLinks = ({ links, isDarkMode, variants, className = "" }) => {
  return (
    <motion.div variants={variants} className={className}>
      {links.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          whileHover={{ y: -3, scale: 1.1 }}
          className={`p-3 rounded-full transition-colors ${
            isDarkMode
              ? "text-gray-400 hover:text-white hover:bg-gray-800"
              : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
          }`}
        >
          <social.icon size={20} />
        </motion.a>
      ))}
    </motion.div>
  );
};

export default HeroSocialLinks;