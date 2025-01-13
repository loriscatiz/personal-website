import TimelineCard from './TimelineCard';
import Title from './Title';

function Timeline() {
    const timelineEvents: {
        position: string;
        company: string;
        time: string;
        tag: 'work' | 'education'; // Ensure this matches
        description: string;
        imgSrc: string;
        index: number;
    }[] = [
        {
            position: 'IFTS Software developer',
            company: 'Ifoa',
            time: 'November 2024 - Present',
            tag: 'education',
            description:
                "I'm currently deepening my understanding of software development, focusing on databases (MySQL), backend development (Java and Python), and frontend technologies (HTML, CSS, and JavaScript). While I already had experience with frontend development, this course emphasizes not just learning syntax but also structuring and designing software thoughtfully. It's teaching me to think like a developer and focus on creating solutions that are both effective and maintainable.",
            imgSrc: '/IFOA_Logo.png',
            index: 1,
        },
        {
            position: 'Helpdesk',
            company: 'GPI Group - (via Randstad)',
            time: 'July 2024 - August 2024',
            tag: 'work',
            description:
                "In this role, I provided technical support to healthcare professionals, helping them navigate and resolve issues with their CRM software. While not directly related to coding, this experience allowed me to develop strong teamwork and interpersonal communication skills. Though brief, it remains a valuable part of my professional journey, showcasing my adaptability and ability to collaborate in high-pressure environments.",
            imgSrc: '/logo-GPI-2019.jpg',
            index: 2,
        },
        {
            position: 'WordPress Web Developer Internship',
            company: 'Reddoak - meravigliä',
            time: 'November 2023 - May 2024',
            tag: 'work',
            description:
                "During this internship, I built websites using Elementor, created designs in Figma, and occasionally wrote custom code (CSS and JavaScript) to overcome CMS limitations. This experience taught me how to approach problem-solving in real-world scenarios, work efficiently under tight deadlines, and collaborate effectively in a team. It was my first real work experience and a key step in solidifying my passion for web development.",
            imgSrc: '/logo_reddoak_foglia.png',
            index: 3,
        },
        {
            position: 'WordPress Web Developer Internship',
            company: 'meravigliä - Reddoak',
            time: 'April 2023 - September 2023',
            tag: 'education',
            description:
                "This course was my introduction to the world of web development, sparking a passion for creating functional and visually appealing websites. Although the primary focus was graphic design, it laid the foundation for my future career in tech and connected me to my first internship as a WordPress developer.",
            imgSrc: '/IFOA_Logo.png',
            index: 4,
        },
      
      
    ];

    const maptimelineEvents = (
        timelineEvents: {
            position: string;
            company: string;
            time: string;
            tag: 'work' | 'education';
            description: string;
            imgSrc: string;
            index: number;
        }[]
    ) => {
        return timelineEvents.map((e) => {
            return (
                <TimelineCard
                    position={e.position}
                    company={e.company}
                    time={e.time}
                    tag={e.tag}
                    description={e.description}
                    imgSrc={e.imgSrc}
                    index={e.index}
                    key={e.index}
                />
            );
        });
    };

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
                <div className="timeline-cards-wrapper relative mt-8 grid gap-6 lg:grid-cols-2">
                    {maptimelineEvents(timelineEvents)}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
