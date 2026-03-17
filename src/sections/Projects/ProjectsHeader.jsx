import { motion } from "framer-motion";
import { itemVariants } from "@/constants";

const ProjectsHeader = () => {
  return (
    <>
      <motion.div
        variants={itemVariants}
        className="text-sm uppercase tracking-widest text-gray-500 mb-4"
      >
        Featured Work
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-light mb-6"
      >
        Recent
        <span className="text-blue-500 font-medium"> Projects</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
      >
        A collection of projects that showcase my expertise in building modern
        web applications and solving complex problems.
      </motion.p>
    </>
  );
};

export default ProjectsHeader;
