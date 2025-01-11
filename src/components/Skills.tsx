import Title from "./Title"



function Skills() {

    const categories = [
        {
            category: 'Frontend',
            id: 1
        },
        {
            category: 'backend',
            id: 2
        }
    
    ]

    const skills = [
        {
           skill: 'React',
           category: 'Frontend',
           id: 1 
        },
        {
            skill: 'Test',
            category: 'backend',
            id: 2
         },
         {
            skill: 'CSS',
            category: 'Frontend',
            id: 3
         }
    ]

    return <div className="skills-wrapper" id="skills">
        <div className="container">
            <Title tag={"h2"} className="text-center text-2xl text-sky-950 dark:text-sky-100 md:text-4xl" text="My Skills"></Title>
            <p className="mx-auto mt-4 max-w-4xl text-center text-base text-sky-900 dark:text-sky-200 md:text-lg">Here are the tools and technologies I rely on to bring projects to life. From frontend design to backend functionality, each skill plays a role in creating efficient solutions.</p>
            <div className="mt-12 grid skills-grid">
                <div className="grid">
                    <Title tag="h3" text="Categories" className="text-lg text-sky-950 dark:text-sky-100 md:text-2xl"></Title>
                    <ul className="mt-2">
                    {categories.map((e) => {
                        return <li className="text-sky-900 dark:text-sky-200" id={"category-" + e.id} key={'c'+e.id}>{e.category}</li>;
                    })}
                    </ul>

                </div>
                <div className="grid">
                    <Title tag="h3" text="Skill" className="text-lg text-sky-950 dark:text-sky-100 md:text-2xl"></Title>
                    <ul className="mt-2">
                        {skills.map((e) =>{
                          return <li className="text-sky-900 dark:text-sky-200" id={"skill-" + e.id} key={'s'+ e.id}>{e.skill}</li>;
                        })}
                        
            
                    </ul>
                </div>
            </div>
        </div>
    </div>
}

export default Skills