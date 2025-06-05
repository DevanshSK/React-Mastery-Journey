import AnimatedCard from "./AnimatedCard"

const ScrollAnimationsDemo = () => {
  return (
    <div>
        <div className="h-screen flex items-center">
            <h1 className="text-center text-3xl mb-4">
                Scroll Down To See The Animation
            </h1>
        </div>

        <AnimatedCard />
    </div>
  )
}

export default ScrollAnimationsDemo