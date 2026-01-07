import React from "react";


export function NavItem({ icon, label, active, onClick }) {
  return (
    <div
    onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
      active
      ? "bg-primary text-white"
      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
      }`}
      >
      <span className="material-symbols-outlined">{icon}</span>
      <span> {label}</span>
    </div>
  );
}