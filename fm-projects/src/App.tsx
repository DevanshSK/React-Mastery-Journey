// import Sidebar from './projects/animated-navbar/Sidebar'
// import ScrollAnimation from './projects/scroll-animation/ScrollAnimation'
// import Carousel from './projects/carousel/Carousel'
// import DraggableCards from './projects/draggable-cards/DraggableCards'
// import Loader from './projects/loader/Loader'
// import ScrollIndicator from './projects/scroll-indicator/ScrollIndicator'

import HorizontalScrollCarousel from "./projects/horizontal-scroll/HorizontalScrollCarousel"
import ProgressSteps from "./projects/progress-steps/ProgressSteps"
import StickyNav from "./projects/stiky-navbar/StickyNav"

const App = () => {
    return (
        <>
            {/* <ScrollIndicator /> */}
            {/* <Loader /> */}
            {/* <DraggableCards /> */}

            {/* <div className="flex items-center justify-center min-h-screen bg-black">
                <Carousel />
            </div> */}

            {/* <div className="flex text-white items-center justify-center min-h-screen w-full bg-gray-950">
                <Sidebar />
            </div> */}

            {/* <ScrollAnimation /> */}

            {/* <HorizontalScrollCarousel /> */}

            {/* <StickyNav /> */}
            <ProgressSteps />

        </>
    )
}

export default App