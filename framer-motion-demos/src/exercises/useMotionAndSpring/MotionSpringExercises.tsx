import React from 'react'
import DraggableBox from './DraggableBox'
import HoverLinkedState from './HoverLinkedState'
import SpringAnimated from './SpringAnimated'
import DynamicRotation from './DynamicRotation'

const MotionSpringExercises = () => {
    return (
        <div
            className='flex items-center justify-center min-h-screen'
        >
            {/* <DraggableBox /> */}
            {/* <HoverLinkedState /> */}
            {/* <SpringAnimated /> */}
            <DynamicRotation />
        </div>
    )
}

export default MotionSpringExercises