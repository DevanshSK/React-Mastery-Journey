// import Introduction from "./components/intro-basic-animations/Introduction"
// import TransitionsDemo from "./components/intro-basic-animations/TransitionsDemo"
// import KeyFramesDemo from "./components/intro-basic-animations/KeyFramesDemo"

// import VariantsIntro from "./components/variants/VariantsIntro"
// import FlippingCard from "./components/variants/FlippingCard"

// import GesturesDemo from "./components/gestures/GesturesDemo"
// import AnimatedCard from "./components/gestures/AnimatedCard"
// import ImageGallery from "./components/gestures/ImageGallery"
// import AnimatedShape from "./components/gestures/AnimatedShape"

// import StaggerAnimations from "./components/stagger-animations/StaggerAnimations"
import AnimatedGallery from "./components/stagger-animations/AnimatedGallery"


const App = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            {/* Introduction to Animations and Transformations */}
            {/* <Introduction /> */}

            {/* Transitions Demo */}
            {/* <TransitionsDemo /> */}

            {/* Keyframes in Framermotion */}
            {/* <KeyFramesDemo /> */}

            {/* Variants */}
            {/* <VariantsIntro /> */}
            {/* <FlippingCard /> */}

            {/* Gestures Section */}
            {/* <GesturesDemo /> */}
            {/* <AnimatedCard /> */}
            {/* <ImageGallery /> */}
            {/* <AnimatedShape /> */}

            {/* Stagger Animations */}
            {/* <StaggerAnimations /> */}
            <AnimatedGallery />

        </div>
    )
}

export default App