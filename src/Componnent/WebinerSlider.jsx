import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";

export default function WebinerSlider() {
    return (
        <div className='webdlideImageWrp'>
            <div className='sliderwebinerWrp'>
                <div className='text-light playbtn'>
                    <AiFillPlayCircle className='playIcon' />
                </div>
                <h1 className='text-light text-center'>
                    Watch the video
                    presentation of our
                    webinars
                </h1>
            </div>
        </div>
    )
}
