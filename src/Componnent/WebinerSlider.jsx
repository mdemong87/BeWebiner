import React, { useState } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export default function WebinerSlider() {

    const [click, setclick] = useState(false);


    return (
        <div className='webdlideImageWrp'>
            <div className='sliderwebinerWrp'>
                <div className='text-light playbtn'>
                    <AiFillPlayCircle onClick={() => setclick(!click)} className='playIcon' />
                </div>
                <h1 className='text-light text-center'>
                    Watch the video
                    presentation of our
                    webinars
                </h1>
            </div>

            {
                click && <div className='vedio'>
                    <div className='text-light cross' onClick={() => setclick(!click)}>
                        <ImCross />
                    </div>
                    <video className='veidiofram' width="100%" height="100%" controls>
                        <source src="//www.youtube.com/embed/z0jjTU-H43M?autoplay=1&rel=0" type="video/mp4" />
                    </video>
                </div>
            }
        </div >
    )
}
