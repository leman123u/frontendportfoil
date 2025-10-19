export default function Card({ className="", children }) {
  return (
    <div className={"bg-white border rounded-xl card-shadow " + className}>
      {children}
    </div>
  );
}
