import { useTypewriter } from "react-simple-typewriter";
import banner from "../../../assets/banner.png"

const Banner = () => {
        const [text] = useTypewriter({
          words: ["GadgetGlow"],
          loop: {},
          typeSpeed: 120,
          deleteSpeed: 40,
        });
  return (
    <div className="grid md:grid-cols-2 justify-center items-center bg-slate-900 mx-6 my-6 rounded-lg">
      <div className="w-full grid justify-center items-center">
        <h1>
          Welcome To{" "}
          <span className="text-blue-500">{text}</span>
        </h1>
        <p>Lorem ipsum dolor sit </p>
      </div>
      <div className="w-full">
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
