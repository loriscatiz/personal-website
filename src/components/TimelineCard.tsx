import Title from './Title';

interface timelineProps {
    position: string;
    company: string;
    time: string;
    tag: 'work' | 'education';
    description: string;
    imgSrc: string;
    index: number;
}

function TimelineCard({
    position,
    company,
    imgSrc,
    time,
    description,
    tag,
    index,
}: timelineProps) {
    return (
        <div
            className={`timeline-card z-10 text-sky-900 dark:text-sky-200 lg:row-span-3 ${index == 1 ? 'lg:row-start-1' : index == 2 ? 'lg:row-start-3' : index == 3 ? 'lg:row-start-5' : index == 4 ? 'lg:row-start-7' : ''} /* only on big screens, make a ladder layout left right*/`}
        >
            <div
                className={`timeline-card-header relative grid items-center gap-4 rounded-t-3xl border-4 border-b-0 border-solid border-indigo-700 bg-sky-900 px-6 py-4 text-sky-100 dark:bg-sky-200 dark:text-sky-950 md:px-8 md:py-6 ${index % 2 == 0 ? 'lg:after:left-0 lg:after:-translate-x-full' : 'lg:after:right-0 lg:after:translate-x-full'}`}
            >
                <img
                    src={imgSrc}
                    alt={company}
                    className="aspect-square w-full rounded-full bg-white object-contain p-1"
                />
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
                <div
                    className={`col-span-2 border-t-2 border-sky-100 px-2 pt-2 text-right dark:border-sky-900 ${index % 2 == 0 && 'lg:text-left'}`}
                >
                    <span> {time} </span>
                </div>
            </div>
            <div className="timeline-card-body border-4 border-y-0 border-solid border-indigo-700 bg-sky-100 px-8 py-6 dark:bg-sky-950">
                <p>{description}</p>
            </div>
            <div
                className={`timeline-card-footer rounded-b-3xl border-4 border-t-0 border-solid border-indigo-700 bg-sky-100 px-8 pb-6 text-right text-sm dark:bg-sky-950 ${index % 2 == 0 && 'lg:text-left'}`}
            >
                <span className="border-b-2 border-indigo-700">{tag}</span>
            </div>
        </div>
    );
}
export default TimelineCard;
