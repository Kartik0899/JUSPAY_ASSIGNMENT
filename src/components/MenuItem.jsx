import React from "react";
import { iconMap } from "../utils/iconMap.js";

export function MenuItem({ item, onClick, index }) {
  const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;

  const IconComponent =
    item.icon && iconMap[item.icon] ? iconMap[item.icon] : null;

  const handleClick = () => {
    onClick(item);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full text-left group rounded-2xl border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    >
      <div className="flex items-center gap-3">
        {IconComponent && (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <IconComponent className="h-5 w-5 text-gray-800" />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-sm font-medium text-gray-900">
              {item.title}
            </p>
            {typeof index === "number" && (
              <span className="text-xs text-gray-400">#{index + 1}</span>
            )}
          </div>

          {item.description && (
            <p className="mt-0.5 line-clamp-2 text-xs text-gray-500">
              {item.description}
            </p>
          )}
        </div>

        {hasSubmenu && (
          <div className="shrink-0">
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
                d="M1 13 6.326 7.674a.91.91 0 0 0 0-1.348L1 1"
              />
            </svg>
          </div>
        )}
      </div>
    </button>
  );
}
