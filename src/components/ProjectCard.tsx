import Button from './Button';
import ImgHover from './ImgHover';
import Title from './Title';

interface ProjectCardProps {
    title: string;
    description: string;
    languages: string[];
    categories: string[];
    imgsrc: string;
    hoverimgsrc?: string;
    githubLink?: string;
    liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    languages,
    categories,
    imgsrc,
    hoverimgsrc,
    githubLink,
    liveLink,
}) => {
    return (
        <div className="project-card relative z-0 mx-auto max-w-3xl">
            <div className="rounded-[20px] bg-sky-100 p-[10px] dark:bg-sky-950">
                <ImgHover imgsrc={imgsrc} hoverimgsrc={hoverimgsrc} alt="" />

                <div className="px-3 py-4 lg:px-6">
                    <Title
                        tag={'h3'}
                        className={'text-2xl text-sky-950 dark:text-sky-100'}
                        text={title}
                    ></Title>
                    <p className="mb-4 mt-2 text-lg text-sky-900 dark:text-sky-200">
                        {description}
                    </p>
                    <div className="grid-flow-col md:grid md:grid-cols-2 md:grid-rows-2">
                        <Title
                            tag="h4"
                            text="Languages: "
                            className={'text-lg text-sky-950 dark:text-sky-100'}
                        ></Title>
                        <ul className="languages flex list-none gap-2">
                            {languages.map((language, index) => (
                                <span
                                    key={index}
                                    className="text-base text-sky-900 dark:text-sky-200"
                                >
                                    {language}
                                </span>
                            ))}
                        </ul>

                        <Title
                            tag="h4"
                            text="Categories: "
                            className={'text-lg text-sky-950 dark:text-sky-100'}
                        ></Title>
                        <ul className="categories flex list-none gap-2">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="text-base text-sky-900 dark:text-sky-200"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                        {githubLink && (
                            <Button
                                text={'Github repo'}
                                variant={'primary'}
                                href={githubLink}
                                blank={true}
                            ></Button>
                        )}

                        {liveLink && (
                            <Button
                                text={'Live demo'}
                                variant={'secondary'}
                                href={liveLink}
                                blank={true}
                            ></Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
