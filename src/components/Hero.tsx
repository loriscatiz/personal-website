import Button from "./Button";
import Title from "./Title";
function Hero() {
  return (
    <>
      <div className="hero-wrapper py-32 text-sky-950 dark:text-sky-100">
        <div className="hero-content container m-auto flex flex-col items-start gap-4 text-5xl font-black lg:gap-8 lg:text-7xl">
          <Title
            tag="h1"
            className="md:text-7xl text-5xl text-"
            hasReactType={true}
            preText="Hi, i'm Loris, and i am a "
            preTextClassName={"md:text-2xl text-lg"}
            reactTypedStrings={["Front-end", "Back-end", "Full stack"]}
            postText="Developer"
            postTextClassName=""
            firstBr={true}
            secondBr={true}
            typeSpeed={70}
            backSpeed={100}
          ></Title>
          <div className="flex gap-4 flex-wrap">
            <Button href={"#"} text="Primary" variant="primary"></Button>
            <Button href={"#"} text="Secondary" variant="secondary"></Button>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Hero;
