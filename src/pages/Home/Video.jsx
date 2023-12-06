import React from 'react';
import { Carousel } from 'react-bootstrap'; 
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
import video3 from '../../assets/video3.mp4'
import video4 from '../../assets/video4.mp4'

const Video = () => {
    return (
        <>  
            <Carousel>
                <Carousel.Item>
                    <div className='main_page'>
                        <div className="overlay"></div>
                        <video src={video1} autoPlay loop muted playsInline className='w-100' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='main_page'>
                        <div className="overlay"></div>
                        <video src={video2} autoPlay loop muted playsInline className='w-100' />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='main_page'>
                        <div className="overlay"></div>
                        <video src={video3} autoPlay loop muted playsInline className='w-100' />
                    </div>
                </Carousel.Item> 
                <Carousel.Item>
                    <div className='main_page'>
                        <div className="overlay"></div>
                        <video src={video4} autoPlay loop muted playsInline className='w-100' />
                    </div>
                </Carousel.Item>
            </Carousel>
        </>


    )
}

export default Video