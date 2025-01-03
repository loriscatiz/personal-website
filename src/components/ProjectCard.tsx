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
    <div className="bg-sky-200 dark:bg-sky-900 rounded-lg p-4 ">
  <img src={imgsrc} alt="" className="" />
  <Title tag={"h3"} className={"text-2xl bg-red-500"} text={title}></Title>
  <p className="text-gray-600 mb-4">{description}</p>
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
  );
};

export default ProjectCard;