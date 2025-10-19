export default function Button({ children, className="", ...props }) {
  return (
    <button
      className={
        "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium " +
        "bg-slate-900 text-white hover:bg-slate-800 transition " + className
      }
      {...props}
    >
      {children}
    </button>
  );
}
