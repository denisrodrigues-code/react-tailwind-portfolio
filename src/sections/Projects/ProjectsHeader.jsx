import { motion } from "framer-motion";
import { itemVariants } from "@/constants";

const ProjectsHeader = () => {
  return (
    <>
      <motion.div
        variants={itemVariants}
        className="text-sm uppercase tracking-widest text-gray-500 mb-4"
      >
        Portfólio
      </motion.div>

      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-5xl font-light mb-6"
      >
        Projetos
        <span className="text-blue-500 font-medium"> Recentes</span>
      </motion.h2>

      <motion.p
        variants={itemVariants}
        className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
      >
        Alguns dos projetos que desenvolvi, aplicando soluções modernas e
        tecnologias atuais.
      </motion.p>
    </>
  );
};

export default ProjectsHeader;
