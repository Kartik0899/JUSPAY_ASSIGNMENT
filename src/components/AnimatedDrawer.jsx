import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "./MenuItem.jsx";

export function AnimatedDrawer({
  menuItems = [],
  isOpen,
  onClose,
  title = "Menu",
}) {
  const [currentMenu, setCurrentMenu] = useState(menuItems);
  const [menuHistory, setMenuHistory] = useState([]);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [direction, setDirection] = useState("forward");

  const drawerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setCurrentMenu(menuItems);
      setMenuHistory([]);
      setCurrentTitle(title);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, menuItems, title]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleBackdropMouseDown = (event) => {
    if (drawerRef.current && !drawerRef.current.contains(event.target)) {
      onClose();
    }
  };

  const handleMenuItemClick = useCallback(
    (item) => {
      if (item.submenu && item.submenu.length > 0) {
        setDirection("forward");
        setMenuHistory((prev) => [
          ...prev,
          { menu: currentMenu, title: currentTitle },
        ]);
        setCurrentMenu(item.submenu);
        setCurrentTitle(item.title);
      } else if (item.onClick) {
        item.onClick();
      } else if (item.href) {
        window.location.href = item.href;
      }
    },
    [currentMenu, currentTitle]
  );

  const handleBack = () => {
    setDirection("backward");
    setMenuHistory((prev) => {
      if (prev.length === 0) {
        onClose();
        return prev;
      }

      const newHistory = [...prev];
      const previousState = newHistory.pop();
      setCurrentMenu(previousState.menu || menuItems);
      setCurrentTitle(previousState.title || title);
      return newHistory;
    });
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const drawerVariants = {
    hidden: {
      y: "100%",
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
      },
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 300,
      },
    },
  };

  const listVariants = {
    enter: (dir) => ({
      x: dir === "forward" ? "10%" : "-10%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir === "forward" ? "-10%" : "10%",
      opacity: 0,
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onMouseDown={handleBackdropMouseDown}
          />
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 flex justify-center"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div
              ref={drawerRef}
              className="w-full max-w-xl rounded-t-3xl bg-white shadow-2xl border border-gray-200"
            >
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <button
                  type="button"
                  onClick={menuHistory.length > 0 ? handleBack : onClose}
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <svg
                    className="w-3 h-3 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
                    />
                  </svg>
                  <span>{menuHistory.length > 0 ? "Back" : "Close"}</span>
                </button>
                <div className="text-sm font-semibold text-gray-900 truncate">
                  {currentTitle}
                </div>
                <div className="w-8" aria-hidden="true" />
              </div>

              <div className="max-h-[60vh] overflow-y-auto scrollbar-hide px-4 py-3 space-y-2">
                <AnimatePresence mode="wait" initial={false} custom={direction}>
                  <motion.nav
                    key={currentMenu
                      .map((item) => item.id || item.title)
                      .join("-")}
                    variants={listVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    custom={direction}
                    className="space-y-2"
                  >
                    {currentMenu.map((item, index) => (
                      <MenuItem
                        key={item.id || item.title || index}
                        item={item}
                        onClick={handleMenuItemClick}
                        index={index}
                      />
                    ))}
                  </motion.nav>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
