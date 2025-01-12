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
            id: 7,
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



    return <div className="skills-wrapper py-16" id="skills">
        <div className="container">
            <Title tag={"h2"} className="text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl" text="My Skills"></Title>
            <p className="mx-auto mt-4 text-pretty text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">Here are the tools and technologies I rely on to bring projects to life. From the UI design to the frontend, from the ER diagrams to the backend functionalities. Each skill plays a role in creating efficient solutions.</p>
            <div className="mt-12 grid skills-grid gap-x-8 gap-y-0  rounded-2xl relative z-0 mx-auto">
                <div className="md:col-span-2  grid grid-cols-subgrid rounded-t-[20px] md:px-4 md:py-6 items-center bg-sky-900 dark:bg-sky-200">
                    <Title tag="h3" text="Categories" className="text-lg text-sky-100 dark:text-sky-950 md:text-2xl invisible h-0 md:visible md:h-auto"></Title>
                    <Title tag="h3" text="Skills" className="text-lg text-sky-100 dark:text-sky-950 md:text-2xl invisible h-0 md:visible md:h-auto"></Title>
                </div>
                <div className="md:col-span-2 gap-y-4 grid grid-cols-subgrid p-4 md:rounded-none rounded-t-[20px] items-center bg-sky-200 dark:bg-sky-900">
                    <Title tag="h4" text="Frontend development" className="text-center md:text-left text-base text-sky-950 dark:text-sky-100 md:text-lg md:m-0"></Title>
                    <ul className="flex gap-8 flex-wrap justify-center md:justify-normal">{mapSkills(frontendSkills)}</ul>
                </div>
                <div className="md:col-span-2 gap-y-4 grid grid-cols-subgrid p-4 items-center bg-sky-100 dark:bg-sky-950">
                    <Title tag="h4" text="Backend development" className="text-base text-center text-sky-950 dark:text-sky-100 md:text-left md:text-lg md:m-0"></Title>
                    <ul className="flex gap-8 flex-wrap justify-center md:justify-normal">{mapSkills(backendSkills)}</ul>
                </div>
                <div className="md:col-span-2 gap-y-4 grid grid-cols-subgrid p-4 items-center bg-sky-200 dark:bg-sky-900">
                    <Title tag="h4" text="Databases" className="text-center md:text-left text-base text-sky-950 dark:text-sky-100 md:text-lg md:m-0"></Title>
                    <ul className="flex gap-8 flex-wrap justify-center md:justify-normal">{mapSkills(databaseSkills)}</ul>
                </div>
                <div className="md:col-span-2 gap-y-4 grid grid-cols-subgrid p-4 items-center bg-sky-100 dark:bg-sky-950 rounded-b-[20px]">
                    <Title tag="h4" text="Transversal skills" className="text-center md:text-left text-base text-sky-950 dark:text-sky-100 md:text-lg md:m-0"></Title>
                    <ul className="flex gap-8 flex-wrap justify-center md:justify-normal">{mapSkills(transversalSkills)}</ul>
                </div>

            </div>
        </div>
    </div>
}



export default Skills