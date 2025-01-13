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
            title: 'Personal website',
            description:
                'A modern, single-page portfolio website designed to showcase projects, skills, and experience. Built with React, the site offers a clean and accessible user interface with features like project filtering and a theme toggle button for enhanced user experience',
            languages: ['React', 'CSS', 'JavaScript'],
            categories: ['Frontend'],
            imgsrc: '/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
            githubLink: 'https://github.com/loriscatiz/personal-website',
            liveLink: 'https://loriscatiz.netlify.app/',
        },
        {
            title: 'Numeric system converter',
            description:
                'A simple web application that converts numbers between decimal, binary, octal, and hexadecimal systems. Features real-time updates, input validation, and helpful info about each numeric system.',
            languages: ['HTML', 'CSS', 'JavaScript'],
            categories: ['Frontend'],
            imgsrc: '/numeric-system-converter-0.JPG',
            hoverImgSrc: '/numeric-system-converter-1.JPG',
            githubLink:
                'https://github.com/loriscatiz/numeric-system-converter',
            liveLink: 'https://numeric-system-converter.netlify.app/',
        },
        {
            title: 'Python Mini Projects',
            description:
                'A collection of beginner-friendly Python programs and games created while learning the language. Includes interactive terminal games and simple utility programs.',
            languages: ['Python'],
            categories: ['General'],
            imgsrc: '/python-mini-projects-0.jpg',
            hoverImgSrc: '/python-mini-projects-1.jpg',
            githubLink: 'https://github.com/loriscatiz/python-mini-projects',
        },
        {
            title: 'Library database',
            description:
                'A normalized and scalable database schema for a library management system, designed to demonstrate database design and SQL skills. The schema includes tables for managing members, books, authors, reservations, borrowings, fines, and staff, ensuring data integrity and optimal query performance.',
            languages: ['MySQL'],
            categories: ['Database'],
            imgsrc: '/library-0.jpg',
            hoverImgSrc: '/library-1.jpg',
            githubLink: 'https://github.com/loriscatiz/library',
        },
    ];

    const languageFilters = [
        'HTML',
        'CSS',
        'Python',
        'JavaScript',
        'React',
        'MySQL',
    ];
    const categoryFilters = ['Frontend', 'Backend', 'Database', 'General'];

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
                    text="My projects"
                ></Title>
                <p className="mx-auto mt-4 max-w-4xl text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">
                    Use the filters below to explore my projects. Within a group
                    (languages or categories), filters use OR logic, showing
                    projects that match any selection. Between groups, filters
                    use AND logic, displaying projects that match both. Leave
                    filters blank to see all projects.
                </p>

                {/* Category Filters */}
                <Title
                    tag={'h3'}
                    className={
                        'mt-4 text-center text-lg text-sky-950 dark:text-sky-100 md:text-2xl'
                    }
                    text="Categories"
                ></Title>
                <div className="mt-2 flex flex-wrap justify-center gap-2 text-sky-900 dark:text-sky-200">
                    {categoryFilters.map((filter) => (
                        <button
                            key={filter}
                            className={`rounded border-2 border-sky-900 px-4 py-2 transition-transform hover:scale-105 focus:scale-105 dark:border-sky-200 ${
                                selectedCategoryFilters.includes(filter)
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
                    text="Languages"
                ></Title>
                <div className="mt-2 flex flex-wrap justify-center gap-2">
                    {languageFilters.map((filter) => (
                        <button
                            key={filter}
                            className={`rounded border-2 border-sky-900 px-4 py-2 transition-transform hover:scale-105 focus:scale-105 dark:border-sky-200 ${
                                selectedLanguageFilters.includes(filter)
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
