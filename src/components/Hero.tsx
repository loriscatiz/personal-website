import Button from './Button';
import Title from './Title';
function Hero() {
    return (
        <>
            <div
                className="hero-wrapper rounded-br-[64px] py-32 text-sky-950 dark:text-sky-100 lg:rounded-br-[300px]"
                id="hi"
            >
                <div className="hero-content container m-auto flex flex-col items-start gap-4 text-5xl font-black lg:gap-8 lg:text-7xl">
                    <Title
                        tag="h1"
                        className="text- text-5xl md:text-7xl"
                        hasReactType={true}
                        preText="Ciao, sono Loris e sono un"
                        preTextClassName={'md:text-2xl text-lg'}
                        reactTypedStrings={[
                            'Backend',
                            'Frontend',
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
                            href='#contact'
                            text="Contattami"
                            variant="primary"
                        ></Button>
                        <Button
                            href={'https://github.com/loriscatiz/'}
                            blank={true}
                            text="Github"
                            variant="secondary"
                        ></Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
