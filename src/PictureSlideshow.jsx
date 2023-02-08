import React, { useState } from 'react'
import './PictureSlideshow.css'

export default function PictureSlideshow({ pictures }) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0)

    const picture = pictures[currentPictureIndex];
    return (
        <div className='slideshow-container'>
            <button className='slideshow-button' onClick={() => setCurrentPictureIndex(Math.abs(currentPictureIndex - 1) % pictures.length)}>{'<'}</button>
            <div>
                <img className='slideshow-image' src={picture.imageUrl} alt={picture.description} />
                <p>
                    <span className='slideshow-description'>{picture.description}</span>
                    <span className='slideshow-counter'>{currentPictureIndex + 1} of {pictures.length}</span>

                </p>
            </div>
            <button className='slideshow-button' onClick={() => setCurrentPictureIndex((currentPictureIndex + 1) % pictures.length)}>{'>'}</button>
        </div>
    )
}
