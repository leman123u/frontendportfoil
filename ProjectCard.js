// components/ProjectCard.jsx
import Card from "./ui/Card";
import Image from "next/image";

export default function ProjectCard({ title, tag, img }) {
  return (
    <Card className="group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
      {/* ↓ ŞƏKİL BLOKU – contain + padding */}
      <div className="relative aspect-[16/10] w-full bg-white p-4">
        <Image
          src={img}
          alt={title}
          fill
          className="object-contain"   // ← kəsmir, sığdırır
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
        />
      </div>

      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="text-base font-medium">{title}</h3>
          <span className="mt-1 inline-block text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
            {tag}
          </span>
        </div>
        <span className="text-xs text-slate-400 group-hover:text-slate-600">View</span>
      </div>
    </Card>
  );
}
