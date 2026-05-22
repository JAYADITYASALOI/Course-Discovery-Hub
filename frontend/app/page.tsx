"use client";

import { useMemo, useState } from "react";
import { categories, courses } from "../data/courses";
import CourseCard from "../components/CourseCard";
import SearchFilter from "../components/SearchFilter";
import ApiTester from "../components/ApiTester";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    return courses.filter((course) => {
      const matchesSearch =
        query.length === 0 ||
        course.title.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query);

      const matchesCategory = category === "All" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalCourses = courses.length;
  const totalCategories = categories.length - 1;

  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 shadow-2xl shadow-blue-950/30 backdrop-blur-xl">
          <div className="border-b border-white/10 px-6 py-8 sm:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[1.25fr_0.9fr]">
              <div className="space-y-6">
                <div className="inline-flex rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-100">
                  Screening Task · Next.js + Flask
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    Course Discovery Hub
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                    Search, filter, and browse curated mock courses with a polished responsive UI,
                    then validate phone number input through a live Flask API response panel.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <StatCard label="Courses" value={totalCourses.toString()} helper="Hardcoded dataset" />
                  <StatCard label="Categories" value={totalCategories.toString()} helper="Instant filtering" />
                  <StatCard label="API" value="Live" helper="Frontend ↔ Flask" />
                </div>
              </div>

              <ApiTester />
            </div>
          </div>

          <div className="px-6 py-8 sm:px-8 lg:px-10">
            <SearchFilter
              search={search}
              category={category}
              categories={categories}
              onSearchChange={setSearch}
              onCategoryChange={setCategory}
              onClear={() => {
                setSearch("");
                setCategory("All");
              }}
            />

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-sm text-slate-300">
                Showing <span className="font-semibold text-white">{filteredCourses.length}</span> of{" "}
                <span className="font-semibold text-white">{totalCourses}</span> courses
              </p>
              <p className="text-sm text-slate-400">
                Responsive grid: 1 column on mobile, 2–3 on larger screens
              </p>
            </div>

            {filteredCourses.length > 0 ? (
              <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            ) : (
              <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
                <h3 className="text-xl font-semibold text-white">No courses found</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Try a different search term or switch back to All categories.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setCategory("All");
                  }}
                  className="mt-5 rounded-2xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
      <p className="mt-1 text-sm text-slate-300">{helper}</p>
    </div>
  );
}