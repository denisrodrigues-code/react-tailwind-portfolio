import { motion } from "framer-motion";
import TerminalFrame from "@/components/ui/TerminalFrame";
import { itemVariants } from "@/constants";
import { useTheme } from "@/hooks/useTheme";

const timelineListVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const timelineItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const AboutTimeline = ({ steps }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.div variants={itemVariants} className="relative py-2">
      <div
        className={`absolute left-3 top-0 bottom-0 w-px md:left-1/2 md:-translate-x-1/2 ${
          isDarkMode ? "bg-gray-800" : "bg-gray-300"
        }`}
      />

      <motion.div variants={timelineListVariants} className="space-y-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isRightSide = index % 2 !== 0;

          return (
            <motion.article
              key={`${step.year}-${step.title}`}
              variants={timelineItemVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className={`relative pl-10 md:w-[calc(50%-2.5rem)] md:pl-0 ${
                isRightSide ? "md:ml-auto" : ""
              }`}
            >
              <span
                className={`absolute left-3 top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 ${step.color} ${
                  isDarkMode ? "border-gray-950" : "border-white"
                } ${
                  isRightSide
                    ? "md:left-[-2.5rem]"
                    : "md:left-[calc(100%+2.5rem)]"
                }`}
              />

              <motion.div className="transition-colors duration-300">
                <TerminalFrame
                  isDarkMode={isDarkMode}
                  title={`timeline-${step.year}.sh`}
                  bodyClassName="p-5"
                  className={
                    isDarkMode
                      ? "hover:border-blue-400/60"
                      : "hover:border-blue-300"
                  }
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`rounded-lg p-2 ${
                        isDarkMode
                          ? "bg-slate-800 text-slate-200"
                          : "bg-slate-100 text-slate-700"
                      }`}
                    >
                      <Icon size={16} />
                    </div>
                    <span className="rounded-full bg-blue-500/15 px-3 py-1 text-xs font-semibold tracking-wide text-blue-500">
                      {step.year}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold md:text-lg">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      isDarkMode ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {step.company}
                  </p>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isDarkMode ? "text-slate-400" : "text-slate-600"
                    }`}
                  >
                    {step.description}
                  </p>
                </TerminalFrame>
              </motion.div>
            </motion.article>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default AboutTimeline;
