import { motion } from "framer-motion";
import { itemVariants } from "@/constants";
import { useTheme } from "@/hooks/useTheme";
import { createContactMailtoLink } from "@/lib/contact";

const ContactForm = ({ email }) => {
  const { isDarkMode } = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = form.get("name");
    const senderEmail = form.get("email");
    const message = form.get("message");

    window.location.href = createContactMailtoLink({
      recipient: email,
      name,
      senderEmail,
      message,
    });
    event.currentTarget.reset();
  };

  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-light mb-6">Vamos conversar</h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          required
          placeholder="Seu nome"
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors ${
            isDarkMode
              ? "bg-gray-900/70 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-blue-500"
              : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
          }`}
        />

        <input
          name="email"
          type="email"
          required
          placeholder="Seu email"
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors ${
            isDarkMode
              ? "bg-gray-900/70 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-blue-500"
              : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
          }`}
        />

        <textarea
          name="message"
          required
          rows={6}
          placeholder="Conte sobre seu projeto ou desafio"
          className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors resize-none ${
            isDarkMode
              ? "bg-gray-900/70 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-blue-500"
              : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
          }`}
        />

        <motion.button
          data-cursor="accent"
          type="submit"
          whileHover={{ y: -2, scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl text-sm uppercase tracking-wider font-medium transition-colors"
        >
          Enviar mensagem
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
