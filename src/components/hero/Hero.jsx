import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import animation from "../../assets/task.json";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      id="/"
      className="py-5 bg-base-200 rounded-lg flex flex-col-reverse md:flex-row"
    >
      <div className="md:w-[50%] flex flex-col justify-center">
        <div className="pl-14 space-y-3">
          <h2 className="text-3xl">Manage your Task with</h2>
          <h1 className="text-5xl font-bold">Task Management</h1>
          <div className="text-3xl font-semibold">
            <Typewriter
              words={[
                "Easy to use",
                "Smooth User Experience",
                "Boost your productivity",
              ]}
              cursor
              loop={false}
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </div>
          <Link
            to={"login"}
            className="bg-[#1f3c87] w-[140px] py-3 px-6 rounded-lg font-semibold text-white flex items-center gap-2"
          >
            Let’s Explore
          </Link>
        </div>
      </div>
      <div className="w-full md:w-[50%] flex items-center justify-center">
        <Lottie animationData={animation} />
      </div>
    </div>
  );
};

export default Hero;
