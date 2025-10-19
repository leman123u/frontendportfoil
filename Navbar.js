// components/Navbar.js
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(){
  const { pathname } = useRouter();
  const link = (href,label) => (
    <Link
      href={href}
      className={`text-sm transition ${pathname===href ? "text-slate-900 font-medium" : "text-slate-600 hover:text-slate-900"}`}
    >{label}</Link>
  );
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-20">
      <nav className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl">Laman</Link>
        <div className="flex gap-5">{link("/projects","Projects")}{link("/blog","Blog")}{link("/contact","Contact")}{link("/admin/login","Admin")}</div>
      </nav>
    </header>
  );
}
