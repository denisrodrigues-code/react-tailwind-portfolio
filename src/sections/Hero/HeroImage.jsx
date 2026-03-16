import { motion } from "framer-motion";
import PROFILE_PIC from "@/assets/images/profile-img.png";
import HeroTechStack from "./HeroTechStack";
import { techStack } from "./heroData";

const HeroImage = ({ isDarkMode, imageVariants, mobile = false, itemVariants }) => {
  const sizeClasses = mobile ? "w-32 h-32" : "w-80 h-96";
  const rounded = mobile ? "rounded-2xl" : "rounded-3xl";
  const borderInset1 = mobile ? "-inset-2" : "-inset-4";
  const borderInset2 = mobile ? null : "-inset-8";

  return (
    <motion.div
      initial="hidden"
      variants={imageVariants}
      animate={"visible"}
      className={mobile ? "mb-8" : "flex justify-center lg:justify-end"}
    >
      <div className={`${mobile ? "mx-auto" : ""} relative ${sizeClasses}`}>
        {!mobile && (
          <HeroTechStack
            stack={techStack}
            isDarkMode={isDarkMode}
            variants={itemVariants}
            className="absolute -top-16 left-1/2 -translate-x-1/2 flex items-center text-xs uppercase tracking-widest whitespace-nowrap"
          />
        )}

        <motion.div
          whileHover={{
            scale: 1.08,
            y: -6,
            rotate: 2,
          }}
          transition={{ duration: 0.3 }}
          className={`w-full h-full ${rounded} overflow-hidden border-4 ${
            isDarkMode ? "border-gray-800" : "border-gray-300"
          } shadow-2xl`}
        >
          <img
            src={PROFILE_PIC}
            alt="Foto de perfil"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </motion.div>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute ${borderInset1} ${rounded} border border-blue-500/20 pointer-events-none`}
        />

        {borderInset2 && (
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className={`absolute ${borderInset2} ${rounded} border border-blue-500/20 pointer-events-none`}
          />
        )}
      </div>
    </motion.div>
  );
};

export default HeroImage;