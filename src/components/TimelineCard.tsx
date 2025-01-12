import Title from "./Title"

interface timelineProps{
    position: string;
    company: string;
    time: string;
    tag: 'work' | 'study';
    description: string;
    imgSrc: string;
}

function TimelineCard({position}: timelineProps){

    return <div className="timeline-card">
        <Title tag={"h3"} text={position}></Title>

    </div>
}
export default TimelineCard