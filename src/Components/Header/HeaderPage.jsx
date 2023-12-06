import AOS from 'aos';
import React, { useEffect } from 'react';
import img from './../../constants/Img';
import './header.scss';

const HeaderPage = ({ image, title }) => {
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <div className='app__header overflow-hidden' >
            <div className='main_page'>
                <div className="overlay"></div>
                <img src={image} alt="" className='w-100 h-100' />
                <div className="content">
                    <h1 data-aos="flip-left"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic">{title}</h1>
                    <div className="left">
                        <img data-aos="fade-right"
                        data-aos-duration="2000"
                        data-aos-easing="ease-out-cubic" src={img.offerLeft} className='object-fit-contain' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderPage
