import Title from "./Title"

function Timeline() {
    return <div className="py-16 bg-sky-200 dark:bg-sky-900">
        <div className="container">
            <Title tag={"h2"} className="text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl" text="Timeline"></Title>
            <p className="mx-auto mt-4 text-pretty text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">Explore the journey that has shaped my skills and experiences. From academic milestones to professional achievements, this timeline highlights the key moments that define my growth as a developer. Each card tells a story of learning, building, and evolving along the way.</p>
        </div>
    </div>
}

export default Timeline