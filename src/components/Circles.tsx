import Circle from "@components/Circle";
import CircleDot from "@components/CircleDots";
import CircleHalves from "./CircleHalves";
import { Parallax } from "react-scroll-parallax";

const Circles = () => {
    return (
        <div className="relative inset-0 hidden md:flex items-center justify-center">
            <Parallax className="absolute" translateY={[75, -100]}>
                <CircleDot />
            </Parallax>
            <Parallax className="absolute" translateY={[55, -80]}>
                <Circle />
            </Parallax>
            <Parallax className="absolute" speed={-5}>
                <CircleHalves />
            </Parallax>
        </div>
    );
}

export default Circles;