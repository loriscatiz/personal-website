import { ReactTyped, Typed } from "react-typed";
import Button from "./Button";
function Hero() {
  return (
    <>
      <div className="bg-sky-950 text-blue-200 min-h-96 pt-36">
        <div className="container m-auto flex flex-col items-start gap-4">
          <h1 className="font-black text-7xl">
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
          <Button href={"#"} text="Prova"></Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
