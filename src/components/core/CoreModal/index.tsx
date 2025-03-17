"use client";
import React from "react";
import ReactDOM from "react-dom";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import "./CoreModal.css";
interface IModal {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
const CoreModal = ({ isOpen, onClose, children }: IModal) => {
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClose();
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div className="modal-overlay">
          <motion.span
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            key="modal-backdrop"
            className="absolute top-0 left-0 w-full h-full will-change-[opacity] "
          />
          <div className="modal-wrapper">
            <motion.div
              initial={{
                opacity: 0.4,
                scale: 0.95,
                filter: "blur(8px)",
                transform: "perspective(500px) rotateY(3deg)",
              }}
              animate={{
                opacity: 1,
                scale: 1,
                filter: "blur(0px)",
                transform: "perspective(500px) rotateY(0deg)",
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                filter: "blur(8px)",
                transform: "perspective(500px) rotateY(3deg)",
              }}
              transition={{
                opacity: { duration: 0.6 }, // Opacity change with 0.3s duration
                scale: { duration: 0.6 }, // Scale change with 0.3s duration
                filter: { duration: 0.3 },
                transform: {
                  duration: 0.3,
                },
              }}
              className="min-w-[500px] min-h-[400px] pt-[80px] bg-[#0b1012] rounded-[20px] relative"
            >
              <span
                onClick={handleCloseClick}
                className="absolute top-[20px] right-[20px] size-[30px] bg-gray-200 hover:bg-gray-400 duration-300 rounded-full  flex items-center justify-center cursor-pointer"
              >
                <IoClose className="text-[20px] text-black/70" />
              </span>
              {children}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoreModal;
