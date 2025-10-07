import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import Title from './Title';
interface Project {
    title: string;
    description: string;
    languages: string[];
    categories: string[];
    imgsrc: string;
    hoverImgSrc?: string;
    githubLink?: string;
    liveLink?: string;
}

function Projects() {
    const projects: Project[] = [
        {
            title: 'Autenticazione Java con JWT',
            description:
                'Sistema di autenticazione e autorizzazione sviluppato con Javalin, basato su JWT per la gestione sicura delle sessioni. Include hashing delle password con algoritmi sicuri, autenticazione tramite token con Redis per lo storage delle sessioni e MySQL per la persistenza dei dati utente. L’architettura segue una chiara separazione tra logica di validazione JWT e logica di business dell’autenticazione.',
            languages: ['Java', 'MySQL'],
            categories: ['Backend', 'Database'],
            imgsrc: '/java-jwt-0.jpg',
            hoverImgSrc: '/java-jwt-1.jpg',
            githubLink: 'https://github.com/loriscatiz/java-jwt',
        },
        {
            title: 'Sito web personale',
            description:
                'Portfolio moderno a pagina singola, progettato per presentare progetti, competenze ed esperienze. Realizzato con React, offre un’interfaccia pulita e accessibile, con funzioni come header a scomparsa allo scroll, filtraggio dei progetti e un toggle per cambiare tema, migliorando l’esperienza utente.',
            languages: ['React', 'CSS', 'JavaScript'],
            categories: ['Frontend'],
            imgsrc: '/personal-website-0.jpg',
            hoverImgSrc: '/personal-website-1.jpg',
            githubLink: 'https://github.com/loriscatiz/personal-website',
            liveLink: 'https://loriscatiz.netlify.app/',
        },
        {
            title: 'Convertitore di sistemi numerici',
            description:
                'Applicazione web semplice e interattiva che converte numeri tra sistemi decimale, binario, ottale ed esadecimale. Include aggiornamenti in tempo reale, validazione dell’input e informazioni utili sui diversi sistemi numerici.',
            languages: ['HTML', 'CSS', 'JavaScript'],
            categories: ['Frontend'],
            imgsrc: '/numeric-system-converter-0.JPG',
            hoverImgSrc: '/numeric-system-converter-1.JPG',
            githubLink:
                'https://github.com/loriscatiz/numeric-system-converter',
            liveLink: 'https://numeric-system-converter.netlify.app/',
        },
        {
            title: 'Esercizi di web scraping',
            description:
                'Serie di esercizi per apprendere le basi del web scraping, affrontando sia casi con HTML statici (tramite Beautiful Soup) sia siti che generano contenuti dinamici con JavaScript (utilizzando Playwright).',
            languages: ['Python'],
            categories: ['Altro'],
            imgsrc: '/scraping-0.jpg',
            hoverImgSrc: '/scraping-1.jpg',
            githubLink: 'https://github.com/loriscatiz/basic-scraping-exercises',
        },
        {
            title: 'Database per biblioteca',
            description:
                'Schema relazionale normalizzato e scalabile per un sistema di gestione bibliotecaria, pensato per dimostrare competenze in progettazione di database e SQL. Include tabelle per gestire utenti, libri, autori, prenotazioni, prestiti, multe e personale, garantendo integrità dei dati e performance ottimali nelle query.',
            languages: ['MySQL'],
            categories: ['Database'],
            imgsrc: '/library-0.jpg',
            hoverImgSrc: '/library-1.jpg',
            githubLink: 'https://github.com/loriscatiz/library',
        },
    ];

    const languageFilters = [
        'Java',
        'HTML',
        'CSS',
        'Python',
        'JavaScript',
        'React',
        'MySQL',
    ];
    const categoryFilters = ['Frontend', 'Backend', 'Database', 'Altro'];

    const [filtered, setFiltered] = useState<Project[]>(projects);
    const [selectedLanguageFilters, setSelectedLanguageFilters] = useState<
        string[]
    >([]);
    const [selectedCategoryFilters, setSelectedCategoryFilters] = useState<
        string[]
    >([]);

    useEffect(() => {
        const filteredProjects = projects.filter((project) => {
            const matchesLanguages =
                selectedLanguageFilters.length === 0 ||
                project.languages.some((lang) =>
                    selectedLanguageFilters.includes(lang)
                );
            const matchesCategories =
                selectedCategoryFilters.length === 0 ||
                project.categories.some((cat) =>
                    selectedCategoryFilters.includes(cat)
                );
            return matchesLanguages && matchesCategories;
        });

        setFiltered(filteredProjects);
    }, [selectedLanguageFilters, selectedCategoryFilters]);

    const toggleFilter = (filter: string, type: 'languages' | 'categories') => {
        if (type === 'languages') {
            setSelectedLanguageFilters((current) =>
                current.includes(filter)
                    ? current.filter((f) => f !== filter)
                    : [...current, filter]
            );
        } else if (type === 'categories') {
            setSelectedCategoryFilters((current) =>
                current.includes(filter)
                    ? current.filter((f) => f !== filter)
                    : [...current, filter]
            );
        }
    };

    return (
        <div className="bg-sky-200 py-16 dark:bg-sky-900" id="projects">
            <div className="container mx-auto">
                <Title
                    tag={'h2'}
                    className={
                        'text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl'
                    }
                    text="I miei progetti"
                ></Title>
                <p className="mx-auto mt-4 max-w-4xl text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">
                    Qui trovi una selezione di progetti personali che rappresentano il mio modo di lavorare.
                    Sono esercizi e applicazioni realizzate per sperimentare tecnologie, migliorare le mie competenze e mettere in pratica buone abitudini di sviluppo.
                </p>
                <p className="mx-auto mt-4 max-w-4xl text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">
                    Puoi usare i filtri qui sotto per esplorare i progetti per linguaggi o categorie.
                </p>

                {/* Category Filters */}
                <Title
                    tag={'h3'}
                    className={
                        'mt-4 text-center text-lg text-sky-950 dark:text-sky-100 md:text-2xl'
                    }
                    text="Categorie"
                ></Title>
                <div className="mt-2 grid grid-cols-2 flex-wrap justify-center gap-2 text-sky-900 dark:text-sky-200 md:px-16 lg:flex">
                    {categoryFilters.map((filter) => (
                        <button
                            key={filter}
                            className={`rounded border-2 border-sky-900 px-4 py-2 transition-transform hover:scale-105 focus:scale-105 dark:border-sky-200 ${selectedCategoryFilters.includes(filter)
                                ? 'bg-sky-900 text-sky-200 dark:bg-sky-200 dark:text-sky-900'
                                : 'text-sky-900 dark:text-sky-200'
                                }`}
                            onClick={() => toggleFilter(filter, 'categories')}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Language Filters */}
                <Title
                    tag={'h3'}
                    className={
                        'mt-4 text-center text-lg text-sky-950 dark:text-sky-100 md:text-2xl'
                    }
                    text="Linguaggi"
                ></Title>
                <div className="mt-2 grid grid-cols-2 flex-wrap justify-center gap-2 text-sky-900 dark:text-sky-200 md:grid-cols-3 md:px-16 lg:flex">
                    {languageFilters.map((filter) => (
                        <button
                            key={filter}
                            className={`rounded border-2 border-sky-900 px-4 py-2 transition-transform hover:scale-105 focus:scale-105 dark:border-sky-200 ${selectedLanguageFilters.includes(filter)
                                ? 'bg-sky-900 text-sky-200 dark:bg-sky-200 dark:text-sky-900'
                                : 'text-sky-900 dark:text-sky-200'
                                }`}
                            onClick={() => toggleFilter(filter, 'languages')}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Filtered Project Cards */}
                <motion.div layout className="mt-10 grid gap-12">
                    <AnimatePresence>
                        {filtered.map((project) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, translateY: -20 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                exit={{ opacity: 0, translateY: -20 }}
                                transition={{ duration: 0.25 }}
                            >
                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    languages={project.languages}
                                    categories={project.categories}
                                    imgsrc={project.imgsrc}
                                    hoverimgsrc={project.hoverImgSrc}
                                    githubLink={project.githubLink}
                                    liveLink={project.liveLink}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
                {filtered.length == 0 && (
                    <p className="text-center text-3xl text-sky-900 dark:text-sky-200">
                        The filtering returned 0 projects
                    </p>
                )}
            </div>
        </div>
    );
}

export default Projects;
