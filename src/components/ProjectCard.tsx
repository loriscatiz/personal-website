import Button from './Button'
import Title from './Title'

interface ProjectCardProps {
    title: string
    description: string 
    languages: string[] 
    categories: string[] 
    imgsrc: string
    githubLink?: string
    liveLink?: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    languages,
    categories,
    imgsrc,
    githubLink,
    liveLink,
}) => {
    return (
        <div className="project-card relative z-0 mx-auto max-w-3xl">
            <div className="rounded-[20px] bg-sky-100 p-[10px] dark:bg-sky-950">
                <img src={imgsrc} alt="" className="rounded-t-[10px]" />
                <div className="px-6 py-4">
                    <Title
                        tag={'h3'}
                        className={'text-2xl text-sky-900 dark:text-sky-200'}
                        text={title}
                    ></Title>
                    <p className="mb-4 text-sky-950 dark:text-sky-100">
                        {description}
                    </p>
                    <div className="grid-flow-col md:grid md:grid-cols-2 md:grid-rows-2">
                        <Title
                            tag="h4"
                            text="Languages: "
                            className={'text-lg text-sky-900 dark:text-sky-200'}
                        ></Title>
                        <ul className="languages flex list-none gap-2">
                            {languages.map((language, index) => (
                                <span
                                    key={index}
                                    className="text-sm text-sky-950 dark:text-sky-100"
                                >
                                    {language}
                                </span>
                            ))}
                        </ul>

                        <Title
                            tag="h4"
                            text="Categories: "
                            className={'text-lg text-sky-900 dark:text-sky-200'}
                        ></Title>
                        <ul className="categories flex list-none gap-2">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="text-sm text-sky-950 dark:text-sky-100"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-4">
                        {githubLink &&
                            <Button
                                text={'Github repo'}
                                variant={'primary'}
                                href={githubLink}
                                blank={true}
                            ></Button>}

                        {liveLink &&
                            <Button
                                text={'Live demo'}
                                variant={'secondary'}
                                href={liveLink}
                                blank={true}
                            ></Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
