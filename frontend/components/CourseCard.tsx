import type { Course } from "../data/courses";

const categoryStyles: Record<string, string> = {
  "Web Development": "bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/20",
  "Data Science": "bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/20",
  Design: "bg-fuchsia-500/15 text-fuchsia-100 ring-1 ring-fuchsia-400/20",
  "AI / ML": "bg-amber-500/15 text-amber-100 ring-1 ring-amber-400/20",
};

const levelStyles: Record<string, string> = {
  Beginner: "bg-emerald-500/15 text-emerald-100 ring-1 ring-emerald-400/20",
  Intermediate: "bg-sky-500/15 text-sky-100 ring-1 ring-sky-400/20",
  Advanced: "bg-rose-500/15 text-rose-100 ring-1 ring-rose-400/20",
};

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5 shadow-lg shadow-slate-950/20 transition hover:-translate-y-1 hover:border-white/20 hover:bg-slate-950/80">
      <div className="flex items-start justify-between gap-4">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${categoryStyles[course.category]}`}
        >
          {course.category}
        </span>
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${levelStyles[course.level]}`}
        >
          {course.level}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <h3 className="text-xl font-semibold text-white">{course.title}</h3>
        <p className="text-sm leading-6 text-slate-300">{course.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
          Duration: {course.duration}
        </span>
        <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-100">
          {course.highlight}
        </span>
      </div>
    </article>
  );
}