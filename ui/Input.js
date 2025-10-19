export default function Input({ className = "", ...props }) {
  return (
    <input
      className={`w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-900 ${className}`}
      {...props}
    />
  );
}
