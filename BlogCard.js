import Link from "next/link";

export default function BlogCard({ title, excerpt, href, tag = "Design" }) {
  return (
    <Link
      href={href}
      aria-label={title}
      className="group block rounded-2xl border bg-background/70 backdrop-blur
                 transition-all hover:-translate-y-0.5 hover:shadow-lg"
    >
      <article className="relative p-5 sm:p-6">
        {/* Sol rəngli accent */}
        <span
          className="absolute left-0 top-4 h-[calc(100%-2rem)] w-[6px] rounded-r-lg
                     bg-gradient-to-b from-primary/80 to-primary/40
                     transition-all group-hover:w-[8px]"
        />

        {/* Kiçik icon badge */}
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
          {/* feather-style oxşar sadə icon */}
          <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor"><circle cx="10" cy="10" r="3"/></svg>
          <span className="opacity-80">{tag}</span>
        </div>

        <h3 className="text-base sm:text-lg font-semibold tracking-tight">
          {title}
        </h3>

        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
          {excerpt}
        </p>

        {/* CTA sətiri */}
        <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
          <span className="underline-offset-4 group-hover:underline">Open</span>
          <svg
            className="h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-0.5"
            viewBox="0 0 20 20" fill="currentColor"
          >
            <path d="M7 5l5 5-5 5" />
          </svg>
        </div>
      </article>
    </Link>
  );
}
