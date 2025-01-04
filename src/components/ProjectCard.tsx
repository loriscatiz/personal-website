import Title from "./Title";

interface ProjectCardProps {
  title: string; // Optional: Add a title for the project
  description: string; // Optional: Add a short description for the project
  languages: string[]; // The list of programming languages or tools
  categories: string[]; // The list of categories
  imgsrc: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, languages, categories, imgsrc }) => {
  return (
    <div className="project-card max-w-3xl mx-auto relative z-0 ">
      <div className="bg-sky-100 dark:bg-sky-950 rounded-[20px] p-[10px]">
        <img src={imgsrc} alt="" className="rounded-t-[10px]" />
        <div className=" px-6 py-4">
          <Title tag={"h3"} className={"text-2xl text-sky-900 dark:text-sky-200"} text={title}></Title>
          <p className="text-sky-950 dark:text-sky-100 mb-4">{description}</p>
          <div className="languages flex gap-2">
            {languages.map((language, index) => (
              <div key={index} className="text-sm border-b-2 text-sky-950 dark:text-sky-100 border-b-indigo-700">
                {language}
              </div>
            ))}
          </div>
          <div className="categories flex">
            {categories.map((category, index) => (
              <li key={index} className="">
                {category}
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;