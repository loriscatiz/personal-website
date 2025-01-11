import Title from "./Title"



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
    ]


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
        }
    ]

    const databaseSkills = [
        {
            name: 'mySQL',
            imgSrc: '/mysql.svg',
            category: 'database',
            id: 1,
        },
    ]

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
            id: 6,
        },
        {
            name: 'Canva',
            imgSrc: '/canva.svg',
            category: 'transversal',
            id: 8,
        },
    ]



    const mapSkills = (skills: { name: string; imgSrc: string; category: string; id: number }[]) => {
        return skills.map((e) => {
            return (
                <li
                    className="group text-sky-900 dark:text-sky-200 relative md:mt-6 pb-6 hover:scale-110"
                    id={`skill-${e.id}`}
                    key={` ${e.category} + '-' +  ${e.id}`}
                >
                    <img src={e.imgSrc} alt={e.name} className="w-[48px] transition-transform group-hover:scale-110" />
                    <span className="invisible group-hover:visible absolute bottom-0 left-1/2 -translate-x-1/2">{e.name}</span>
                </li>
            );
        });
    };



    return <div className="skills-wrapper" id="skills">
        <div className="container">
            <Title tag={"h2"} className="text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl" text="My Skills"></Title>
            <p className="mx-auto mt-4 max-w-4xl text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">Here are the tools and technologies I rely on to bring projects to life. From frontend design to backend functionality, each skill plays a role in creating efficient solutions.</p>
            <div className="mt-12 grid skills-grid gap-x-8 gap-y-4 items-center rounded-2xl">
                <div className="col-span-2 grid grid-cols-subgrid">
                <Title tag="h3" text="Categories" className="text-lg text-sky-950 dark:text-sky-100 md:text-2xl md:mb-4 invisible h-0 md:visible md:h-auto"></Title>
                <Title tag="h3" text="Skills" className="text-lg text-sky-950 dark:text-sky-100 md:text-2xl md:mb-4 invisible h-0 md:visible md:h-auto"></Title>
                </div>
                <Title tag="h4" text="Frontend development" className="text-base text-sky-950 dark:text-sky-100 md:text-lg md:m-0"></Title>
                <ul className="flex gap-8 flex-wrap">{mapSkills(frontendSkills)}</ul>
                <Title tag="h4" text="Backend development" className="text-base text-sky-950 dark:text-sky-100 md:text-lg md:m-0"></Title>
                <ul className="flex gap-8 flex-wrap">{mapSkills(backendSkills)}</ul>
                <Title tag="h4" text="Databases" className="text-base text-sky-950 dark:text-sky-100 md:text-lg md:m-0"></Title>
                <ul className="flex gap-8 flex-wrap">{mapSkills(databaseSkills)}</ul>
                <Title tag="h4" text="Transversal skills" className="text-base text-sky-950 dark:text-sky-100 md:text-lg md:m-0"></Title>
                <ul className="flex gap-8 flex-wrap">{mapSkills(transversalSkills)}</ul>

            </div>
        </div>
    </div>
}



export default Skills