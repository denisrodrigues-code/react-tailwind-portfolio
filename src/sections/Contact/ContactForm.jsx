import { motion } from "framer-motion";
import { useState } from "react";
import { itemVariants } from "@/constants";
import { useTheme } from "@/hooks/useTheme";

const ContactForm = ({ email }) => {
  const { isDarkMode } = useTheme();
  const [status, setStatus] = useState("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;

    const form = new FormData(formElement);
    const name = form.get("name");
    const senderEmail = form.get("email");
    const message = form.get("message");

    setStatus("loading");
    setFeedbackMessage("");

    const payload = {
      name,
      email: senderEmail,
      message,
      _subject: `Novo contato via portfólio - ${name}`,
      _template: "table",
      _captcha: "false",
    };

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setStatus("success");
      setFeedbackMessage(
        "Mensagem enviada com sucesso. Obrigado pelo contato!",
      );
      formElement.reset();
    } catch {
      setStatus("error");
      setFeedbackMessage(
        "Não foi possível enviar agora. Tente novamente em instantes.",
      );
    }
  };

  return (
    <motion.div variants={itemVariants}>
      <h3 className="text-2xl font-light mb-6">Vamos conversar</h3>

      <div
        className={`rounded-2xl border p-5 md:p-6 ${
          isDarkMode
            ? "border-gray-800 bg-gray-900/40"
            : "border-gray-200 bg-white/80"
        }`}
      >
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
            placeholder="Seu e-mail"
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
            placeholder="Descreva seu projeto, objetivo e contexto para eu entender como posso ajudar"
            className={`w-full rounded-xl border px-4 py-3 outline-none transition-colors resize-none ${
              isDarkMode
                ? "bg-gray-900/70 border-gray-800 text-gray-100 placeholder:text-gray-500 focus:border-blue-500"
                : "bg-white border-gray-200 text-gray-900 placeholder:text-gray-500 focus:border-blue-500"
            }`}
          />

          <motion.button
            data-cursor="accent"
            type="submit"
            disabled={status === "loading"}
            whileHover={{ y: -2, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="bg-blue-500 hover:bg-blue-600 disabled:opacity-70 text-white px-6 py-3 rounded-xl text-sm uppercase tracking-wider font-medium transition-colors"
          >
            {status === "loading" ? "Enviando..." : "Enviar mensagem"}
          </motion.button>

          {feedbackMessage && (
            <p
              className={`text-sm ${
                status === "success"
                  ? "text-emerald-500"
                  : isDarkMode
                    ? "text-red-400"
                    : "text-red-600"
              }`}
            >
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
