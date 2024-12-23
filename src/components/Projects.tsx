import { useState } from "react";
import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  description: string;
  languages: string[];
  categories: string[];
  imgsrc: string;
}

function Projects() {
  const projects: Project[] = [
    { title: "Test", description: "Lorem", languages: ["html", "css"], categories: ["Front-end", "mobile"], imgsrc : "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg"},
    { title: "Test2", description: "Lorem", languages: ["html", "Java"], categories: ["Front-end", "mobile"], imgsrc : "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" },
    { title: "Test3", description: "Lorem", languages: ["python"], categories: ["Front-end"], imgsrc : "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" },
    { title: "Test4", description: "Lorem", languages: ["html", "javascript"], categories: ["Back-end", "Database"], imgsrc : "/ilya-pavlov-OqtafYT5kTw-unsplash.jpg" },
  ];

  const languageFilters = ["html", "css", "python", "javascript"];
  const categoryFilters = ["Front-end", "Back-end", "Database", "mobile"];

  const [selectedLanguageFilters, setSelectedLanguageFilters] = useState<string[]>([]);
  const [selectedCategoryFilters, setSelectedCategoryFilters] = useState<string[]>([]);

  const applyFilters = () => {
    return projects.filter(project => {
      const matchesLanguages =
        selectedLanguageFilters.length === 0 || 
        project.languages.some(lang => selectedLanguageFilters.includes(lang));
      
      const matchesCategories =
        selectedCategoryFilters.length === 0 || 
        project.categories.some(cat => selectedCategoryFilters.includes(cat));

      return matchesLanguages && matchesCategories;
    });
  };

  const filteredItems = applyFilters();

  const toggleFilter = (filter: string, type: "languages" | "categories") => {
    if (type === "languages") {
      setSelectedLanguageFilters(current =>
        current.includes(filter)
          ? current.filter(f => f !== filter) // Remove if selected
          : [...current, filter] // Add if not selected
      );
    } else if (type === "categories") {
      setSelectedCategoryFilters(current =>
        current.includes(filter)
          ? current.filter(f => f !== filter) // Remove if selected
          : [...current, filter] // Add if not selected
      );
    }
  };

  return (
    <div className="container">
      <h2 className="md:text-5xl text-3xl text-center">My Projects</h2>
      <div className="p-4">
        {/* Language Filters */}
        <div className="flex gap-2 mb-4">
          {languageFilters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded ${
                selectedLanguageFilters.includes(filter) ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => toggleFilter(filter, "languages")}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 mb-4">
          {categoryFilters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded ${
                selectedCategoryFilters.includes(filter) ? "bg-green-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => toggleFilter(filter, "categories")}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Filtered Project Cards */}
  
        {/* Filtered Project Cards */}
        <div className="grid gap-4">
          {filteredItems.map(project => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              languages={project.languages}
              categories={project.categories}
              imgsrc={project.imgsrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
