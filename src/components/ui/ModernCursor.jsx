import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";

const clickableSelector =
  "a, button, input, textarea, select, [role='button'], [data-cursor='pointer']";

const ModernCursor = () => {
  const { isDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isAccent, setIsAccent] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isDesktopPointer, setIsDesktopPointer] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const trailX = useSpring(mouseX, { stiffness: 420, damping: 35, mass: 0.5 });
  const trailY = useSpring(mouseY, { stiffness: 420, damping: 35, mass: 0.5 });

  useEffect(() => {
    const pointerMedia = window.matchMedia("(pointer: fine)");

    const updatePointer = () => {
      const enabled = pointerMedia.matches;
      setIsDesktopPointer(enabled);

      if (enabled) {
        document.body.classList.add("cursor-modern");
      } else {
        document.body.classList.remove("cursor-modern");
      }
    };

    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const clickableElement = event.target.closest(clickableSelector);
      setIsActive(Boolean(clickableElement));

      if (!clickableElement) {
        setIsAccent(false);
        return;
      }

      const className = clickableElement.className?.toString() ?? "";
      const accentByClass =
        className.includes("bg-blue-500") || className.includes("text-blue-");
      const accentByData = clickableElement.dataset.cursor === "accent";
      setIsAccent(accentByClass || accentByData);
    };

    const handleMouseDown = () => setIsPressed(true);
    const handleMouseUp = () => setIsPressed(false);
    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsActive(false);
      setIsAccent(false);
    };

    updatePointer();
    pointerMedia.addEventListener("change", updatePointer);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.body.classList.remove("cursor-modern");
      pointerMedia.removeEventListener("change", updatePointer);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!isDesktopPointer) {
    return null;
  }

  return (
    <>
      <motion.div
        style={{ x: trailX, y: trailY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.9 : isAccent ? 2.2 : isActive ? 1.8 : 1,
          boxShadow: isAccent
            ? isDarkMode
              ? "0 0 28px rgba(96,165,250,0.45)"
              : "0 0 26px rgba(37,99,235,0.35)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border ${
          isAccent
            ? isDarkMode
              ? "border-blue-300 bg-blue-400/20"
              : "border-blue-600 bg-blue-500/15"
            : isDarkMode
              ? "border-blue-400/70 bg-blue-400/10"
              : "border-blue-600/70 bg-blue-600/10"
        }`}
      />

      <motion.div
        style={{ x: mouseX, y: mouseY }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: isPressed ? 0.7 : isAccent ? 1.25 : 1,
        }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        className={`pointer-events-none fixed top-0 left-0 z-[9999] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
          isDarkMode ? "bg-blue-300" : "bg-blue-600"
        }`}
      />
    </>
  );
};

export default ModernCursor;
