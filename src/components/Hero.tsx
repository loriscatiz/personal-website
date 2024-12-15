import { ReactTyped } from "react-typed";
import Button from "./Button";
function Hero() {
  return (
    <>
      <div className='hero-wrapper'>
        <div className='hero-content'>
          <h1>
            <ReactTyped
              strings={[
                "Front-end",
                "Back-end",
                "Mobile",
                "Database",
                "Full stack",
              ]}
              typeSpeed={70}
              backSpeed={100}
              showCursor={false}
            ></ReactTyped>
            <br />
            Developer
          </h1>
          <Button href={"#"} text='Prova' variant='primary'></Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
