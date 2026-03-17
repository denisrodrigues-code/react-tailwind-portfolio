import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import ModernCursor from "@/components/ui/ModernCursor";
import { useTheme } from "@/hooks/useTheme";

const Hero = lazy(() => import("@/sections/Hero"));
const Skills = lazy(() => import("@/sections/Skills"));
const Projects = lazy(() => import("@/sections/Projects"));
const About = lazy(() => import("@/sections/About"));
const Contact = lazy(() => import("@/sections/Contact"));
const Footer = lazy(() => import("@/sections/Footer"));

const SectionsLoadingFallback = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative min-h-screen overflow-hidden px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className={`absolute top-20 left-1/4 h-60 w-60 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-300"
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/4 h-56 w-56 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-cyan-500" : "bg-cyan-300"
          }`}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-3xl items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className={`w-full overflow-hidden rounded-2xl border ${
            isDarkMode
              ? "border-gray-800 bg-[#0f172a]"
              : "border-gray-300 bg-slate-50"
          }`}
        >
          <div
            className={`flex items-center justify-between border-b px-4 py-2.5 ${
              isDarkMode
                ? "border-gray-800 bg-slate-900"
                : "border-gray-300 bg-slate-100"
            }`}
          >
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <span
              className={`font-mono text-[11px] ${
                isDarkMode ? "text-slate-400" : "text-slate-500"
              }`}
            >
              loading-sections.sh
            </span>
          </div>

          <div className="space-y-5 p-6">
            <div className="space-y-2">
              <div
                className={`h-3 w-48 animate-pulse rounded ${
                  isDarkMode ? "bg-slate-700" : "bg-slate-300"
                }`}
              />
              <div
                className={`h-3 w-3/4 animate-pulse rounded ${
                  isDarkMode ? "bg-slate-800" : "bg-slate-200"
                }`}
              />
            </div>

            <div
              className={`h-2 w-full overflow-hidden rounded-full ${
                isDarkMode ? "bg-slate-800" : "bg-slate-200"
              }`}
            >
              <motion.div
                className="h-full rounded-full bg-blue-500"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <p
              className={
                isDarkMode ? "text-sm text-slate-400" : "text-sm text-slate-600"
              }
            >
              Montando as secoes do portfolio com animacoes e conteudo.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <ModernCursor />
      <Navbar />
      <Suspense fallback={<SectionsLoadingFallback />}>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
