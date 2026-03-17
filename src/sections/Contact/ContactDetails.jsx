import { motion } from "framer-motion";
import { itemVariants } from "@/constants";
import { contactInfo, socialLinks } from "@/data";
import { useTheme } from "@/hooks/useTheme";

const ContactDetails = () => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-light mb-6">Dados para contato</h3>

      <div className="space-y-4 mb-8">
        {contactInfo.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`rounded-xl border p-4 ${
                isDarkMode
                  ? "bg-gray-900/60 border-gray-800"
                  : "bg-white border-gray-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-1">
                <Icon size={16} className="text-blue-500" />
                <span
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              <p className="text-sm md:text-base font-medium ml-7">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3">
        {socialLinks.map((button) => (
          <motion.a
            key={button.name}
            href={button.url}
            target={button.name !== "Email" ? "_blank" : undefined}
            rel={button.name !== "Email" ? "noreferrer" : undefined}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              isDarkMode
                ? "border-gray-700 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                : "border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600"
            }`}
          >
            <button.icon size={16} />
            {button.name}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactDetails;
