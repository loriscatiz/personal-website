import TimelineCard from './TimelineCard'
import Title from './Title'

function Timeline() {
    return (
        <div className="bg-sky-200 py-16 dark:bg-sky-900" id="timeline">
            <div className="container">
                <Title
                    tag={'h2'}
                    className="text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl"
                    text="Timeline"
                ></Title>
                <p className="mx-auto mt-4 text-pretty text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">
                    Explore the journey that has shaped my skills and
                    experiences. From academic milestones to professional
                    achievements, this timeline highlights the key moments that
                    define my growth as a developer. Each card tells a story of
                    learning, building, and evolving along the way.
                </p>
                <div className="timeline-cards-wrapper"></div>
                <TimelineCard
                    position={'IFTS'}
                    company={'Ifoa'}
                    time={'Nov 2024 - June 2025'}
                    tag={'work'}
                    description={
                        'Placeholder Explore the journey that has shaped my skills and Placeholder Explore the journey that has shaped my skills and Placeholder Explore the journey that has shaped my skills and'
                    }
                    imgSrc={''}
                ></TimelineCard>
            </div>
        </div>
    )
}

export default Timeline
