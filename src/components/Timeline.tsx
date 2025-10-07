import TimelineCard from './TimelineCard';
import Title from './Title';

function Timeline() {
    const timelineEvents: {
        position: string;
        company: string;
        time: string;
        tag: 'lavoro' | 'formazione'; // Ensure this matches
        description: string;
        imgSrc: string;
    }[] =
        [
            {
                position: 'Full Stack Developer',
                company: 'Coderit',
                time: 'Luglio 2025 - Settembre 2025',
                tag: 'lavoro',
                description:
                    "Ho collaborato come stagista allo sviluppo di una piattaforma CRM destinata agli amministratori condominiali. Mi sono occupato sia del backend sia del frontend, utilizzando Django, Bootstrap ed HTMX. L’esperienza mi ha permesso di applicare concretamente le competenze acquisite nel corso IFTS e di lavorare in un contesto orientato alla produzione reale.",
                imgSrc: '/coderit_logo.jpg',
            },
            {
                position: 'Studente IFTS in Sviluppo Software',
                company: 'Ifoa',
                time: 'Novembre 2024 - Presente',
                tag: 'formazione',
                description:
                    "Ho completato il percorso formativo in sviluppo software, approfondendo database relazionali (MySQL), programmazione backend (Java, Python, Django) e frontend (HTML, CSS, JavaScript). Dopo aver terminato lezioni e stage, mi manca solo l’esame finale per il completamento ufficiale del corso.",
                imgSrc: '/IFOA_Logo.png',
            },
            {
                position: 'Sviluppatore Web WordPress (Stage)',
                company: 'Reddoak - meravigliä',
                time: 'Novembre 2023 - Maggio 2024',
                tag: 'lavoro',
                description:
                    "Mi sono occupato della realizzazione di siti web con Elementor, della creazione di layout in Figma e della scrittura di codice personalizzato (CSS e JavaScript) per superare i limiti del CMS. È stata la mia prima esperienza professionale nel settore, che mi ha insegnato a rispettare scadenze, collaborare in team e gestire progetti reali con autonomia.",
                imgSrc: '/logo_reddoak_foglia.png',
            },
            {
                position: 'Studente Corso di Graphic Design',
                company: 'Ifoa',
                time: 'Aprile 2023 - Settembre 2023',
                tag: 'formazione',
                description:
                    "Un corso che ha rappresentato il mio ingresso nel mondo dello sviluppo web, unendo grafica e programmazione. Pur essendo incentrato sul design, mi ha fornito le basi per comprendere la struttura e l’estetica dei siti web, e ha portato alla mia prima esperienza lavorativa come sviluppatore WordPress.",
                imgSrc: '/IFOA_Logo.png',
            },
        ];

    const maptimelineEvents = (
        timelineEvents: {
            position: string;
            company: string;
            time: string;
            tag: 'lavoro' | 'formazione';
            description: string;
            imgSrc: string;
        }[]
    ) => {
        return timelineEvents.map((e, i) => {
            return (
                <TimelineCard
                    position={e.position}
                    company={e.company}
                    time={e.time}
                    tag={e.tag}
                    description={e.description}
                    imgSrc={e.imgSrc}
                    index={i}
                    key={i}
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
                    text="Il mio percorso"
                ></Title>
                <p className="mx-auto mt-4 text-pretty text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">
                    Questa timeline ripercorre le tappe principali del mio percorso come sviluppatore.
                    Formazione, esperienze pratiche e progetti personali si intrecciano in un’evoluzione continua, fatta di studio, sperimentazione e crescita professionale.
                </p>
                <div className={`timeline-cards-wrapper relative mt-8 grid gap-6 lg:grid-cols-2 lg:grid-rows-[repeat(auto-fill,_minmax(6rem,_auto))] `}>
                    {maptimelineEvents(timelineEvents)}
                </div>
            </div>
        </div>
    );
}

export default Timeline;
