import { motion } from "framer-motion";
import { itemVariants } from "@/constants";
import { useTheme } from "@/hooks/useTheme";

const AboutTimeline = ({ steps }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div variants={itemVariants} className="relative pl-8">
      <div
        className={`absolute left-3 top-0 bottom-0 w-px ${
          isDarkMode ? "bg-gray-800" : "bg-gray-300"
        }`}
      />

      <div className="space-y-6">
        {steps.map((step) => {
          const Icon = step.icon;

          return (
            <article
              key={`${step.year}-${step.title}`}
              className={`relative rounded-2xl border p-5 ${
                isDarkMode
                  ? "bg-gray-900/60 border-gray-800"
                  : "bg-white/90 border-gray-200"
              }`}
            >
              <span
                className={`absolute -left-[34px] top-6 flex h-6 w-6 items-center justify-center rounded-full ${step.color}`}
              >
                <span className="h-2 w-2 rounded-full bg-white" />
              </span>

              <div className="mb-3 flex items-center gap-3">
                <div
                  className={`rounded-lg p-2 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-200"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span className="text-sm font-semibold text-blue-500">
                  {step.year}
                </span>
              </div>

              <h3 className="text-lg font-medium">{step.title}</h3>
              <p
                className={`mt-1 text-sm ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {step.company}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AboutTimeline;
