import Button from './Button'
import Title from './Title'
function Hero() {
    return (
        <>
            <div
                className="hero-wrapper py-32 text-sky-950 dark:text-sky-100 rounded-br-[300px]"
                id="hi"
            >
                <div className="hero-content container m-auto flex flex-col items-start gap-4 text-5xl font-black lg:gap-8 lg:text-7xl">
                    <Title
                        tag="h1"
                        className="text- text-5xl md:text-7xl"
                        hasReactType={true}
                        preText="Hi, i'm Loris, and i am a "
                        preTextClassName={'md:text-2xl text-lg'}
                        reactTypedStrings={[
                            'Front-end',
                            'Back-end',
                            'Full stack',
                        ]}
                        postText="Developer"
                        postTextClassName=""
                        firstBr={true}
                        secondBr={true}
                        typeSpeed={70}
                        backSpeed={100}
                    ></Title>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            href={'https://github.com/loriscatiz/'}
                            text="Github"
                            blank={true}
                            variant="primary"
                        ></Button>
                        <Button
                            href={
                                'https://drive.google.com/file/d/1TTlyfddApCZr8dUdN-8UyPq-YXyenwkC/view?usp=drive_link'
                            }
                            blank={true}
                            text="Resume"
                            variant="secondary"
                        ></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
