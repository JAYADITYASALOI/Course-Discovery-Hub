export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export type Course = {
  id: number;
  title: string;
  category: string;
  level: CourseLevel;
  duration: string;
  description: string;
  highlight: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Full-Stack Web Development",
    category: "Web Development",
    level: "Beginner",
    duration: "8 Weeks",
    description:
      "Learn the fundamentals of modern web development with structured practice, responsive layouts, and project-based learning.",
    highlight: "Project-based learning",
  },
  {
    id: 2,
    title: "Advanced React Patterns",
    category: "Web Development",
    level: "Intermediate",
    duration: "6 Weeks",
    description:
      "Build reusable React components, manage state cleanly, and understand advanced UI composition patterns.",
    highlight: "Reusable UI systems",
  },
  {
    id: 3,
    title: "Python for Data Analysis",
    category: "Data Science",
    level: "Beginner",
    duration: "5 Weeks",
    description:
      "Work with Python, data frames, visual summaries, and practical analysis workflows used in real data tasks.",
    highlight: "Hands-on analysis",
  },
  {
    id: 4,
    title: "SQL & Data Visualization",
    category: "Data Science",
    level: "Intermediate",
    duration: "4 Weeks",
    description:
      "Understand data querying, reporting logic, and visual storytelling for business-friendly insights.",
    highlight: "Query to insight",
  },
  {
    id: 5,
    title: "UX Research & Interface Design",
    category: "Design",
    level: "Beginner",
    duration: "4 Weeks",
    description:
      "Learn how to design better user experiences through research thinking, wireframing, and interface structure.",
    highlight: "User-first design",
  },
  {
    id: 6,
    title: "Design Systems in Figma",
    category: "Design",
    level: "Intermediate",
    duration: "5 Weeks",
    description:
      "Create scalable design systems, reusable components, and consistent visual language for product teams.",
    highlight: "Scalable components",
  },
  {
    id: 7,
    title: "Machine Learning Fundamentals",
    category: "AI / ML",
    level: "Beginner",
    duration: "7 Weeks",
    description:
      "Build intuition around supervised learning, model evaluation, and the core ideas behind ML workflows.",
    highlight: "Core ML concepts",
  },
  {
    id: 8,
    title: "Applied AI Product Thinking",
    category: "AI / ML",
    level: "Advanced",
    duration: "6 Weeks",
    description:
      "Connect AI capabilities with product strategy, user needs, and practical implementation decisions.",
    highlight: "Product + AI",
  },
];

export const categories = ["All", ...new Set(courses.map((course) => course.category))];