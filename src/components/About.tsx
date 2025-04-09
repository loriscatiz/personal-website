import Title from './Title';
import Button from './Button';

function About() {
    return (
        <>
            <div className="bg-sky-100 pb-16 pt-24 dark:bg-sky-950">
                <div className="container grid lg:grid-cols-2 lg:gap-8">
                    <img
                        src="/loris.jpg"
                        alt="Loris Catizzone"
                        className="-mt-32 w-full scroll-m-12 rounded-xl shadow-lg"
                        id="about"
                    />
                    <div className="mt-6 flex flex-col items-start lg:mt-0">
                        <Title
                            text="About me"
                            tag={'h2'}
                            className={
                                'text-xl text-sky-950 dark:text-sky-100 lg:col-start-2'
                            }
                        ></Title>
                        <Title
                            text="I'm a passionate developer"
                            tag={'h3'}
                            className={
                                'text-4xl text-sky-950 dark:text-sky-100 lg:col-start-2'
                            }
                        ></Title>
                        <p className="mt-4 text-sky-900 dark:text-sky-200 lg:col-start-2 lg:text-left">
                            {' '}
                            Hi, I'm Loris Catizzone, a passionate developer with
                            a growing love for building intuitive and efficient
                            solutions. My journey in tech began with a curiosity
                            to understand how things work behind the scenes,
                            which has since transformed into a commitment to
                            creating meaningful digital experiences.
                        </p>
                        <p className="mt-2 text-sky-900 dark:text-sky-200 lg:col-start-2 lg:text-left">
                            I thrive on solving problems, whether it's designing
                            sleek frontends, optimizing backends, or managing
                            databases. When I'm not coding, I enjoy exploring
                            new tools and learning ways to improve my skills.
                        </p>
                        <p className="mt-2 text-sky-900 dark:text-sky-200 lg:col-start-2 lg:text-left">
                            This portfolio showcases some of my work, from
                            creative web designs to technical problem-solving.
                            I'm always eager to tackle new challenges and
                            collaborate on projects that make a difference.
                        </p>
                        <Button
                            text="Contact me"
                            variant={'primary'}
                            href={'#contact'}
                            className="mt-4 lg:col-start-2"
                        ></Button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;
