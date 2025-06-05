import AnimationScroll from "./AnimationScroll"
import ScrollAnimation from "./ScrollAnimation"

const UseScrollExample = () => {
    return (
        <div>
            {/* <ScrollAnimation /> */}
            <AnimationScroll />
            <div className="h-[200vh] bg-gray-800 flex items-center justify-center">
                <h2 className="text-white">Scroll Down</h2>
            </div>
        </div>
    )
}

export default UseScrollExample