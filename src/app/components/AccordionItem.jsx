"use client";
import { motion, AnimatePresence } from "framer-motion";

export const AccordionItem = ({
  keyName,
  label,
  isOpen,
  onClick,
  content,
  isFirst,
  isLast,
}) => {
  const borderRadius = `${isFirst ? "rounded-t-lg" : ""} ${isLast ? "rounded-b-lg" : ""}`;
  

  return (
    <div
      className={`bg-white ${borderRadius} shadow-md transition-shadow duration-300 overflow-hidden`}
    >
      <button
        onClick={() => onClick(keyName)}
        className="w-full text-left px-4 py-3 flex justify-between items-center text-pill-muted"
      >
        <span className="font-bold text-text-secondary ">{label}</span>
        <motion.svg
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4 stroke-[var(--color-text-secondary)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="px-4 pb-4 text-sm text-pill-muted"
          >
            <div className="border-t  pt-4 border-color-secundary" >
              <div className="space-y-2 text-text-secondary">
                {content.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
