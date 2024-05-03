import React, { useCallback } from 'react'

const Overlay = ({ dependentStates, dependentSetStates }) => {
    let overlayAnimation = dependentStates.some(state => state) ? 'opacity-1 visible' : 'opacity-0 invisible'

    const handleClick = useCallback(() => {
        dependentStates.forEach((state, i) => {
            state && dependentSetStates[i](false)
        });
    }, [dependentStates, dependentSetStates])
    return (
        <div className={`${overlayAnimation}   overlay transition absolute top-0 left-0 w-full h-[100vh] bg-[#00000050]`} onClick={handleClick} />
    )
}

export default Overlay