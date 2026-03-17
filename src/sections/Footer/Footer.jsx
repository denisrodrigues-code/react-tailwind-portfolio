import { motion } from "framer-motion";
import { ChevronUp, Gauge, Layers3, ShieldCheck } from "lucide-react";
import { containerVariants, itemVariants } from "@/constants";
import { socialLinks } from "@/data";
import { useTheme } from "@/hooks/useTheme";

const expertise = [
  { label: "Arquitetura escalável", icon: Layers3 },
  { label: "Performance em produção", icon: Gauge },
  { label: "Qualidade e confiabilidade", icon: ShieldCheck },
];

const Footer = () => {
  const { isDarkMode } = useTheme();
  const year = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      className={`border-t px-6 py-16 ${
        isDarkMode
          ? "border-gray-800 bg-gray-950 text-white"
          : "border-gray-200 bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      <div
        className={`pointer-events-none absolute -top-16 left-1/2 h-40 w-[44rem] -translate-x-1/2 blur-3xl ${
          isDarkMode ? "bg-blue-500/20" : "bg-blue-200/80"
        }`}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative z-10 mx-auto max-w-7xl"
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <motion.div
            variants={itemVariants}
            className={`space-y-4 rounded-2xl border p-6 lg:col-span-4 ${
              isDarkMode
                ? "border-gray-800 bg-gray-900/40"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <h3 className="text-2xl md:text-3xl font-light leading-tight">
              Denis Rodrigues
              <span className="font-medium text-blue-500"> .dev</span>
            </h3>
            <p
              className={`text-base leading-relaxed ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Engenheiro de software full stack com foco em produtos digitais de
              missão crítica. Atuo da estratégia técnica à entrega em produção,
              priorizando escala, performance e experiência do usuário.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`rounded-2xl border p-6 lg:col-span-4 ${
              isDarkMode
                ? "border-gray-800 bg-gray-900/40"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <h4 className="mb-4 text-sm uppercase tracking-widest text-blue-500">
              Especialidades
            </h4>
            <div className="space-y-3">
              {expertise.map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <item.icon size={15} className="text-blue-500" />
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className={`rounded-2xl border p-6 lg:col-span-4 ${
              isDarkMode
                ? "border-gray-800 bg-gray-900/40"
                : "border-gray-200 bg-gray-50"
            }`}
          >
            <h4 className="mb-4 text-sm uppercase tracking-widest text-blue-500">
              Contato
            </h4>
            <div className="flex flex-col gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : undefined}
                  rel={social.name !== "Email" ? "noreferrer" : undefined}
                  className={`inline-flex items-center gap-2 text-sm transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-blue-400"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <social.icon size={15} />
                  {social.name}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollToSection("home")}
              className={`mt-5 inline-flex items-center gap-2 text-sm ${
                isDarkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Voltar ao topo <ChevronUp size={15} />
            </button>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className={`mt-12 border-t pt-6 text-sm ${
            isDarkMode
              ? "border-gray-800 text-gray-500"
              : "border-gray-200 text-gray-500"
          }`}
        >
          <p>
            {year} Denis Rodrigues. Engenharia de software orientada a produto,
            com React, Tailwind e Framer Motion.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
