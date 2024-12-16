import Button from "./Button";
import Title from "./Title";
function Hero() {
  return (
    <>
      <div className='hero-wrapper'>
        <div className='hero-content'>
          <Title
            tag='h1'
            className='text-7xl'
            hasReactType={true}
            preText="Hi, i'm Loris, and i am a "
            preTextClassName={"text-2xl"}
            reactTypedStrings={["Front-end", "Back-end", "Full stack"]}
            postText='Developer'
            postTextClassName=''
            firstBr={true}
            secondBr={true}
            typeSpeed={70}
            backSpeed={100}
          ></Title>
          <Button
            href={"#"}
            text='Prova'
            variant='primary'
          ></Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
