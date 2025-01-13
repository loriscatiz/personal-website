import Title from './Title';

interface timelineProps {
    position: string;
    company: string;
    time: string;
    tag: 'work' | 'study';
    description: string;
    imgSrc: string;
}

function TimelineCard({
    position,
    company,
    imgSrc,
    time,
    description,
    tag,
}: timelineProps) {
    return (
        <div className="timeline-card border-4 border-solid border-indigo-600">
            <div className="timeline-card-header grid items-center bg-sky-900 px-8 py-6 text-sky-100 dark:bg-sky-200 dark:text-sky-950">
                <img src={imgSrc} alt={company} />
                <div>
                    <Title
                        tag={'h3'}
                        text={position}
                        className="text-xl"
                    ></Title>
                    <Title
                        tag={'h4'}
                        text={company}
                        className="text-lg"
                    ></Title>
                </div>
                <span className="text-right">{time}</span>
            </div>
            <div className="timeline-card-body">{description}</div>
            <div className="timeline-card-footer">{tag}</div>
        </div>
    );
}
export default TimelineCard;
