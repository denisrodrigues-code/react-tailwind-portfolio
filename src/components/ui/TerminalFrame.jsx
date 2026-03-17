const TerminalFrame = ({
  isDarkMode,
  title,
  children,
  className = "",
  bodyClassName = "p-6",
}) => {
  return (
    <div
      className={`overflow-hidden rounded-2xl border ${
        isDarkMode
          ? "border-gray-800 bg-[#0f172a]"
          : "border-gray-300 bg-slate-50"
      } ${className}`}
    >
      <div
        className={`flex items-center justify-between border-b px-4 py-2.5 ${
          isDarkMode
            ? "border-gray-800 bg-slate-900"
            : "border-gray-300 bg-slate-100"
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span
          className={`font-mono text-[11px] ${
            isDarkMode ? "text-slate-400" : "text-slate-500"
          }`}
        >
          {title}
        </span>
      </div>

      <div className={bodyClassName}>{children}</div>
    </div>
  );
};

export default TerminalFrame;
