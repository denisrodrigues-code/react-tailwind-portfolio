import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { containerVariants, itemVariants } from "@/constants";
import { contactContent } from "@/content/portfolio";
import { contactInfo } from "@/data";
import { useTheme } from "@/hooks/useTheme";
import ContactDetails from "./ContactDetails";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const email = contactInfo.find((item) => item.label === "Email")?.value;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest mb-4 ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            {contactContent.eyebrow}
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-4"
          >
            {contactContent.title.normal}
            <span className="text-blue-500 font-medium">
              {" "}
              {contactContent.title.highlight}
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto font-light ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {contactContent.description}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid gap-10 lg:grid-cols-2"
        >
          <ContactForm email={email} />
          <ContactDetails />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
