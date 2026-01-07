import React from "react";

export function StatCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-[#1e293b] p-6 rounded-xl border">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <h3 className="text-2xl font-bold mt-2">{value}</h3>
    </div>
  );
}