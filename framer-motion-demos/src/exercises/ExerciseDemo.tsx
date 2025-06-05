import BouncingCircle from "./transformations/BouncingCircle"
import Box from "./transformations/Box"
import ComplexAnimation from "./transformations/ComplexAnimation"
import SequentialBoxes from "./transformations/SequentialBoxes"
import SkewRectangle from "./transformations/SkewRectangle"
import SpinningIcon from "./transformations/SpinningIcon"

const ExerciseDemo = () => {
    return (
        <div className='min-h-screen flex items-center justify-center'>
            {/* <Box /> */}
            {/* <BouncingCircle /> */}
            {/* <SpinningIcon /> */}
            {/* <SkewRectangle /> */}
            {/* <ComplexAnimation /> */}
            <SequentialBoxes />
        </div>
    )
}

export default ExerciseDemo