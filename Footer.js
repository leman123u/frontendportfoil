// components/Footer.js
export default function Footer(){
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 text-sm text-slate-500 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>© {new Date().getFullYear()} Laman — Backend Developer</div>
        <div className="flex gap-4">
          <a href="mailto:you@mail.com" className="link-underline">you@mail.com</a>
          <a href="https://github.com/yourname" className="link-underline">GitHub</a>
          <a href="https://www.linkedin.com/in/yourname" className="link-underline">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
