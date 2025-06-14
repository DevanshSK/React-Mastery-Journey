import React from 'react'
import SwipableCard from './SwipableCard'
import DraggableBox from './DraggableBox'
import RotateOnDrag from './RotateOnDrag'
import TapColor from './TapColor'
import LongPressSize from './LongPressSize'
import GestureImageGallery from './GestureImageGallery'

const GestureExercises = () => {
    return (
        <div
            className='flex min-h-screen items-center justify-center'
        >
            {/* <SwipableCard /> */}
            {/* <DraggableBox /> */}
            {/* <RotateOnDrag /> */}
            {/* <TapColor /> */}
            {/* <LongPressSize /> */}
            <GestureImageGallery />
        </div>
    )
}

export default GestureExercises