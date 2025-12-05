import React, { useState } from "react";
import { AnimatedDrawer } from "./components/AnimatedDrawer.jsx";
import { sampleMenuData } from "./data/menuData.js";

export default function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="px-8 py-4 bg-blue-500 text-white rounded-full shadow-lg cursor-pointer"
        aria-label="Open menu"
      >
        Open Menu
      </button>

      <AnimatedDrawer
        menuItems={sampleMenuData}
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title="List of Payment Services"
      />
    </div>
  );
}
