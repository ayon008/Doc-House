import Lottie from "lottie-react";
import LoginAnimation from "../assets/Animation - 1712071258645.json";

const Animate = () => {
    return (
        <Lottie className="w-3/4 h-auto mx-auto" animationData={LoginAnimation} loop={true} />
    );
};

export default Animate;