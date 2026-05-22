"use client";

type SearchFilterProps = {
  search: string;
  category: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onClear: () => void;
};

export default function SearchFilter({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
  onClear,
}: SearchFilterProps) {
  return (
    <div className="flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-200/80">
            Course catalog
          </p>
          <h2 className="text-2xl font-semibold text-white">Search and filter instantly</h2>
          <p className="text-sm leading-6 text-slate-300">
            Type a course name or choose a category to narrow the catalog in real time.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="search"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by course name or category"
            className="min-w-0 rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition focus:border-sky-400/40 focus:ring-2 focus:ring-sky-500/20 sm:w-96"
          />
          <button
            type="button"
            onClick={onClear}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            Clear filters
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        {categories.map((item) => {
          const active = category === item;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onCategoryChange(item)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition",
                active
                  ? "bg-white text-slate-950 shadow-lg shadow-white/10"
                  : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10",
              ].join(" ")}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
}