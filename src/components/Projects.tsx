import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Title from "./Title";
interface Project {
  title: string;
  description: string;
  languages: string[];
  categories: string[];
  imgsrc: string;
  hoverImgSrc?: string;
  githubLink?: string;
  liveLink?: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Numeric system converter",
      description: "A simple web application that converts numbers between decimal, binary, octal, and hexadecimal systems. Features real-time updates, input validation, and helpful info about each numeric system.",
      languages: ["HTML", "CSS", "JavaScript"],
      categories: ["Front-end"],
      imgsrc: "/src/assets/numeric-system-converter-0.jpg",
      hoverImgSrc: "/src/assets/numeric-system-converter-1.JPG",
      githubLink: "https://github.com/loriscatiz/numeric-system-converter",
      liveLink: "https://numeric-system-converter.netlify.app/"
    },
    {
      title: "Personal website",
      description: "Lorem",
      languages: ["React", "HTML", "CSS", "JavaScript"],
      categories: ["Front-end"],
      imgsrc: "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg",
      githubLink: "https://github.com/loriscatiz/personal-website",
      liveLink: "https://loriscatiz.netlify.app/"
    },
    {
      title: "Library database",
      description: "A normalized and scalable database schema for a library management system, designed to demonstrate database design and SQL skills. The schema includes tables for managing members, books, authors, reservations, borrowings, fines, and staff, ensuring data integrity and optimal query performance.",
      languages: ["MySQL"],
      categories: ["Database"],
      imgsrc: "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg",
      githubLink: "https://github.com/loriscatiz/library"
    },
    { title: "Test4", description: "Lorem", languages: ["HTML", "JavaScript"], categories: ["Back-end", "Database"], imgsrc: "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" },
  ];

  const languageFilters = ["HTML", "CSS", "Python", "JavaScript", "React", "MySQL"];
  const categoryFilters = ["Front-end", "Back-end", "Database", "Mobile"];

  const [filtered, setFiltered] = useState<Project[]>(projects);
  const [selectedLanguageFilters, setSelectedLanguageFilters] = useState<string[]>([]);
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState<string[]>([]);

  useEffect(() => {
    const filteredProjects = projects.filter((project) => {
      const matchesLanguages =
        selectedLanguageFilters.length === 0 ||
        project.languages.some((lang) => selectedLanguageFilters.includes(lang));
      const matchesCategories =
        selectedCategoryFilters.length === 0 ||
        project.categories.some((cat) => selectedCategoryFilters.includes(cat));
      return matchesLanguages && matchesCategories;
    });

    setFiltered(filteredProjects);
  }, [selectedLanguageFilters, selectedCategoryFilters]);

  const toggleFilter = (filter: string, type: "languages" | "categories") => {
    if (type === "languages") {
      setSelectedLanguageFilters((current) =>
        current.includes(filter)
          ? current.filter((f) => f !== filter)
          : [...current, filter]
      );
    } else if (type === "categories") {
      setSelectedCategoryFilters((current) =>
        current.includes(filter)
          ? current.filter((f) => f !== filter)
          : [...current, filter]
      );
    }
  };

  return (
    <div className="bg-sky-200 dark:bg-sky-900">
      <div className="container mx-auto">
        <Title tag={"h2"} className={"text-2xl md:text-4xl text-center dark:text-sky-200 text-sky-900"} text="My projects"></Title>
        <p className="mt-4 text-xl text-center text-balance dark:text-sky-200 text-sky-900 max-w-5xl mx-auto">Explore my projects by using the filters below. Select one or more languages or categories to find projects that match your interests.</p>

        {/* Category Filters */}
        <Title tag={"h3"} className={"text-lg md:text-2xl text-center mt-4"} text="Categories"></Title>
        <div className="flex gap-2 flex-wrap justify-center mt-2">
          {categoryFilters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 border-2 rounded border-sky-900 dark:border-sky-200 ${selectedCategoryFilters.includes(filter) ? "dark:bg-sky-200 bg-sky-900 text-sky-100 dark:text-sky-950" : "text-sky-950 dark:text-sky-100"
                }`}
              onClick={() => toggleFilter(filter, "categories")}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Language Filters */}
        <Title tag={"h3"} className={"text-lg md:text-2xl text-center mt-4"} text="Languages"></Title>
        <div className="flex gap-2 flex-wrap justify-center mt-2">
          {languageFilters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 border-2 rounded border-sky-900 dark:border-sky-200 ${selectedLanguageFilters.includes(filter) ? "dark:bg-sky-200 bg-sky-900 text-sky-100 dark:text-sky-950" : "text-sky-950 dark:text-sky-100"
                }`}
              onClick={() => toggleFilter(filter, "languages")}
            >
              {filter}
            </button>
          ))}
        </div>



        {/* Filtered Project Cards */}
        <motion.div layout className="grid gap-12 mt-10">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                exit={{ opacity: 0, translateY: -20 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  languages={project.languages}
                  categories={project.categories}
                  imgsrc={project.imgsrc}
                  hoverimgsrc={project.hoverImgSrc}
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {filtered.length == 0 && <p className="text-3xl text-center">The filtering returned 0 projects</p>}
      </div>
    </div>
  );
}

export default Projects;
