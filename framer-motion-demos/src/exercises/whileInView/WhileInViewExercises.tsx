import React from 'react'
import FadeAndSlideIn from './FadeAndSlideIn'
import CardFlip from './CardFlip'
import TimelineAnimation from './TimelineAnimation'
import HoverAndViewAnimation from './HoverAndViewAnimation'

const WhileInViewExercises = () => {
    return (
        <div className=''>
            <div className="w-full min-h-screen flex items-center justify-center">Scroll Down to View</div>
            <div className="flex items-center justify-center min-h-screen">
                {/* <FadeAndSlideIn /> */}
                {/* <CardFlip /> */}
                {/* <TimelineAnimation /> */}
                <HoverAndViewAnimation />
            </div>
        </div>
    )
}

export default WhileInViewExercises