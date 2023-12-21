import { IoDownloadOutline } from "react-icons/io5";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animation from "../../assets/task.json";
// import resume from "../../assets/resume/myPdf.pdf";

const Hero = () => {
  return (
    <div
      id="/"
      className="py-5 md:h-[33rem] bg-base-200 rounded-lg flex flex-col-reverse md:flex-row"
    >
      <div className="md:w-[50%] flex flex-col justify-center">
        <div className="pl-14 space-y-3">
          <h2 className="text-3xl">Hi, my name is</h2>
          <h1 className="text-5xl font-bold">Khaled Ahmed Nayeem</h1>
          <div className="text-3xl font-semibold">
            <Typewriter
              words={[
                "I am a MERN Stack Developer",
                "I love to do Front-End",
                "I love React and Tailwind",
              ]}
              cursor
              loop={false}
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </div>
          <button className="bg-[#1f3c87] py-3 px-6 rounded-lg font-semibold text-white flex items-center gap-2">
            Let’s Explore
          </button>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <Lottie animationData={animation} />
      </div>
    </div>
  );
};

export default Hero;
