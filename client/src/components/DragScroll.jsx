import { useState } from 'react'


const DragScroll = ({ slider, children, sliderStyle, scrollLeft, setScrollLeft }) => {
    const [isClicked, setIsClicked] = useState(false)
    const [startX, setStartX] = useState(null)


    const alreadyClick = (e) => {
        slider.current.classList.remove('drag-scroll-smooth')
        setIsClicked(true)
        slider.current.classList.add('active');
        setStartX(e.pageX - slider.current.offsetLeft)
        setScrollLeft(slider.current.scrollLeft);
    }

    const clickAndMove = (e) => {
        slider.current.classList.remove('drag-scroll-smooth')
        if (!isClicked) return;
        e.preventDefault()
        const x = e.pageX - slider.current.offsetLeft
        const walk = x - startX
        slider.current.scrollLeft = scrollLeft - walk
    }

    const cancelClick = () => {
        setIsClicked(false)
        slider.current.classList.remove('active');
    }

    return (
        <div ref={slider} className={`w-full ${sliderStyle}`}
            onMouseDown={alreadyClick}
            onMouseMove={(e) => isClicked && clickAndMove(e)}
            onMouseLeave={(e) => isClicked && cancelClick(e)}
            onMouseUp={(e) => isClicked && cancelClick(e)}>
            {children}
        </div>
    )
}

export default DragScroll