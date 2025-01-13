import Title from './Title';

function Skills() {
    const frontendSkills = [
        {
            name: 'HTML',
            imgSrc: '/html.svg',
            category: 'frontend',
            id: 1,
        },
        {
            name: 'CSS',
            imgSrc: '/css.svg',
            category: 'frontend',
            id: 2,
        },
        {
            name: 'JavaScript',
            imgSrc: '/javascript.svg',
            category: 'frontend',
            id: 3,
        },
        {
            name: 'React',
            imgSrc: '/react.svg',
            category: 'frontend',
            id: 4,
        },
        {
            name: 'TypeScript',
            imgSrc: '/typescript.svg',
            category: 'frontend',
            id: 5,
        },
        {
            name: 'Tailwind',
            imgSrc: '/tailwindcss.svg',
            category: 'frontend',
            id: 6,
        },
    ];

    const backendSkills = [
        {
            name: 'Python',
            imgSrc: '/python.svg',
            category: 'backend',
            id: 1,
        },
        {
            name: 'Java',
            imgSrc: '/java.svg',
            category: 'backend',
            id: 2,
        },
        {
            name: 'php',
            imgSrc: '/php.svg',
            category: 'backend',
            id: 3,
        },
    ];

    const databaseSkills = [
        {
            name: 'mySQL',
            imgSrc: '/mysql.svg',
            category: 'database',
            id: 1,
        },
    ];

    const transversalSkills = [
        {
            name: 'git',
            imgSrc: '/git.svg',
            category: 'transversal',
            id: 1,
        },
        {
            name: 'draw.io',
            imgSrc: '/draw-io.svg',
            category: 'transversal',
            id: 2,
        },
        {
            name: 'Excel',
            imgSrc: '/excel.svg',
            category: 'transversal',
            id: 3,
        },
        {
            name: 'Figma',
            imgSrc: '/figma.svg',
            category: 'transversal',
            id: 4,
        },
        {
            name: 'WordPress',
            imgSrc: '/wordpress.svg',
            category: 'transversal',
            id: 5,
        },
        {
            name: 'Photoshop',
            imgSrc: '/photoshop.svg',
            category: 'transversal',
            id: 6,
        },
        {
            name: 'Illustrator',
            imgSrc: '/illustrator.svg',
            category: 'transversal',
            id: 7,
        },
        {
            name: 'Canva',
            imgSrc: '/canva.svg',
            category: 'transversal',
            id: 8,
        },
    ];

    const mapSkills = (
        skills: { name: string; imgSrc: string; category: string; id: number }[]
    ) => {
        return skills.map((e) => {
            return (
                <li
                    className="group relative pb-6 text-sky-900 hover:scale-110 dark:text-sky-200 md:mt-6"
                    id={`skill-${e.id}`}
                    key={` ${e.category} + '-' +  ${e.id}`}
                >
                    <img
                        src={e.imgSrc}
                        alt={e.name}
                        className="w-[48px] transition-transform group-hover:scale-110"
                    />
                    <span className="invisible absolute bottom-0 left-1/2 -translate-x-1/2 group-hover:visible">
                        {e.name}
                    </span>
                </li>
            );
        });
    };

    return (
        <div className="skills-wrapper py-16" id="skills">
            <div className="container">
                <Title
                    tag={'h2'}
                    className="text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl"
                    text="My Skills"
                ></Title>
                <p className="mx-auto mt-4 text-pretty text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">
                    Here are the tools and technologies I rely on to bring
                    projects to life. From the UI design to the frontend, from
                    the ER diagrams to the backend functionalities. Each skill
                    plays a role in creating efficient solutions.
                </p>
                <div className="skills-grid relative z-0 mx-auto mt-12 grid gap-x-8 gap-y-0 rounded-2xl">
                    <div className="grid grid-cols-subgrid items-center rounded-t-[20px] bg-sky-900 dark:bg-sky-200 md:col-span-2 md:px-4 md:py-6">
                        <Title
                            tag="h3"
                            text="Categories"
                            className="invisible h-0 text-lg text-sky-100 dark:text-sky-950 md:visible md:h-auto md:text-2xl"
                        ></Title>
                        <Title
                            tag="h3"
                            text="Skills"
                            className="invisible h-0 text-lg text-sky-100 dark:text-sky-950 md:visible md:h-auto md:text-2xl"
                        ></Title>
                    </div>
                    <div className="grid grid-cols-subgrid items-center gap-y-4 rounded-t-[20px] bg-sky-200 p-4 dark:bg-sky-900 md:col-span-2 md:rounded-none">
                        <Title
                            tag="h4"
                            text="Frontend development"
                            className="text-center text-base text-sky-950 dark:text-sky-100 md:m-0 md:text-left md:text-lg"
                        ></Title>
                        <ul className="flex flex-wrap justify-center gap-8 md:justify-normal">
                            {mapSkills(frontendSkills)}
                        </ul>
                    </div>
                    <div className="grid grid-cols-subgrid items-center gap-y-4 bg-sky-100 p-4 dark:bg-sky-950 md:col-span-2">
                        <Title
                            tag="h4"
                            text="Backend development"
                            className="text-center text-base text-sky-950 dark:text-sky-100 md:m-0 md:text-left md:text-lg"
                        ></Title>
                        <ul className="flex flex-wrap justify-center gap-8 md:justify-normal">
                            {mapSkills(backendSkills)}
                        </ul>
                    </div>
                    <div className="grid grid-cols-subgrid items-center gap-y-4 bg-sky-200 p-4 dark:bg-sky-900 md:col-span-2">
                        <Title
                            tag="h4"
                            text="Databases"
                            className="text-center text-base text-sky-950 dark:text-sky-100 md:m-0 md:text-left md:text-lg"
                        ></Title>
                        <ul className="flex flex-wrap justify-center gap-8 md:justify-normal">
                            {mapSkills(databaseSkills)}
                        </ul>
                    </div>
                    <div className="grid grid-cols-subgrid items-center gap-y-4 rounded-b-[20px] bg-sky-100 p-4 dark:bg-sky-950 md:col-span-2">
                        <Title
                            tag="h4"
                            text="Transversal skills"
                            className="text-center text-base text-sky-950 dark:text-sky-100 md:m-0 md:text-left md:text-lg"
                        ></Title>
                        <ul className="flex flex-wrap justify-center gap-8 md:justify-normal">
                            {mapSkills(transversalSkills)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
