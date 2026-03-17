import { motion } from "framer-motion";

const HeroSocialLinks = ({ links, isDarkMode, variants, className = "" }) => {
  return (
    <motion.div variants={variants} className={className}>
      {links.map((social) => (
        <motion.a
          key={social.name}
          href={social.url}
          target={social.name !== "Email" ? "_blank" : undefined}
          rel={social.name !== "Email" ? "noreferrer" : undefined}
          aria-label={social.name}
          whileHover={{ y: -3, scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
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
