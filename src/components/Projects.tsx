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
      imgsrc: "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg",
      githubLink: "https://github.com/loriscatiz/numeric-system-converter",
      liveLink: "https://numeric-system-converter.netlify.app/"
    },
    { title: "Personal website", 
      description: "Lorem", 
      languages: ["React", "HTML", "CSS", "JavaScript"],
      categories: ["Front-end", "mobile"],
      imgsrc: "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"},
    { title: "Test3", description: "Lorem", languages: ["Python"], categories: ["Front-end"], imgsrc: "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" },
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
    <div className="bg-sky-200 dark:bg-sky-900 -z-10">
      <div className="container mx-auto">
        <Title tag={"h2"} className={"text-2xl md:text-4xl text-center"} text="My projects"></Title>


        {/* Category Filters */}
        <Title tag={"h3"} className={"text-lg md:text-2xl text-center"} text="Categories"></Title>
        <div className="flex gap-2 flex-wrap justify-center">
          {categoryFilters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded ${selectedCategoryFilters.includes(filter) ? "bg-green-500 text-white" : "bg-gray-200"
                }`}
              onClick={() => toggleFilter(filter, "categories")}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Language Filters */}
        <Title tag={"h3"} className={"text-lg md:text-2xl text-center mt-8"} text="Languages"></Title>
        <div className="flex gap-2 flex-wrap justify-center">
          {languageFilters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded ${selectedLanguageFilters.includes(filter) ? "bg-blue-500 text-white" : "bg-gray-200"
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
                  githubLink={project.githubLink}
                  liveLink={project.liveLink}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default Projects;
