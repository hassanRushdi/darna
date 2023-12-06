import { Button } from 'primereact/button';
import { Galleria } from 'primereact/galleria';
import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Component from '../../constants/Component';
import img from '../../constants/Img';
import { PhotoService } from './PhotoService';
import './media.scss';
import { useTranslation } from 'react-i18next';
import AOS from 'aos'
import { motion } from 'framer-motion';

const Media = () => {
    let { t } = useTranslation();

    const [activeButton, setActiveButton] = useState('Image');

    const handleButtonClick = (buttonLabel) => {
        setActiveButton(buttonLabel);
    };

    const [images, setImages] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef(null);

    useEffect(() => {
        window.scroll(0, 0)

        PhotoService.getImages().then(data => setImages(data));
    }, []);

    const itemTemplate = (item) => {
        return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
    }

    const thumbnailTemplate = (item) => {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />;
    }
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <Component.HeaderPage image={img?.mediaBg} title={t("nav_media")} />
            <div className="app__media">
                <div className="media_navbar flex justify-content-center align-items-center mt-8">
                    <span className="p-buttonset ">
                        <Button
                            label={t("media_images")}
                            className={activeButton === 'Image' ? 'active-button' : ''}
                            onClick={() => handleButtonClick('Image')}
                        />
                        <Button
                            label={t("contact_videos")}
                            className={activeButton === 'Videos' ? 'active-button' : ''}
                            onClick={() => handleButtonClick('Videos')}
                        />
                    </span>
                </div>
            </div>
            <Container>
                {
                    activeButton === "Image" &&
                    <div className="mt-5 flex justify-content-center align-items-center">
                        <Galleria ref={galleria} value={images} numVisible={7} style={{ maxWidth: '850px' }}
                            activeIndex={activeIndex} onItemChange={(e) => setActiveIndex(e.index)}
                            circular fullScreen showItemNavigators showThumbnails={false} item={itemTemplate} thumbnail={thumbnailTemplate} />
                        <Row>

                            {
                                images && images.map((image, index) => {
                                    let imgEl =
                                        <motion.img
                                            onClick={() => { setActiveIndex(index); galleria.current.show() }}
                                            style={{ cursor: 'pointer' }}
                                            src={image.thumbnailImageSrc}
                                            alt={image.alt}
                                            width={'100%'}
                                            whileInView={{
                                                scale: [0, 1],
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 260,
                                                    damping: 20,
                                                    delay: 0.5,
                                                    transition: 0.5
                                                }
                                            }}
                                        />
                                    return (
                                        <Col xl={4} lg={4} md={6} sm={12} key={index} className='mt-4'>
                                            {imgEl}
                                        </Col>
                                    )
                                })
                            }
                        </Row>

                    </div>
                }

                {
                    activeButton === "Videos" &&
                    <div className="mt-5 flex justify-content-center align-items-center">

                        <Row>
                            <Col data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="500"
                                data-aos-easing="ease-out-cubic" xl={6} lg={6} md={6} sm={12} className='mt-4'>
                                <iframe className='w-100 ' height={300} src="https://www.youtube.com/embed/tJAn60b9A-k" title="الطائف المبهرة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Col>
                            <Col
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="700"
                                data-aos-easing="ease-out-cubic"
                                xl={6} lg={6} md={6} sm={12} className='mt-4'>
                                <iframe className='w-100' height={300} src="https://www.youtube.com/embed/tJAn60b9A-k" title="الطائف المبهرة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Col>
                            <Col
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="900"
                                data-aos-easing="ease-out-cubic"
                                xl={6} lg={6} md={6} sm={12} className='mt-4'>
                                <iframe className='w-100' height={300} src="https://www.youtube.com/embed/tJAn60b9A-k" title="الطائف المبهرة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Col>
                            <Col
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="1000"
                                data-aos-easing="ease-out-cubic"
                                xl={6} lg={6} md={6} sm={12} className='mt-4'>
                                <iframe className='w-100' height={300} src="https://www.youtube.com/embed/tJAn60b9A-k" title="الطائف المبهرة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Col>
                            <Col
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                data-aos-delay="1200"
                                data-aos-easing="ease-out-cubic"
                                xl={6} lg={6} md={6} sm={12} className='mt-4'>
                                <iframe className='w-100' height={300} src="https://www.youtube.com/embed/tJAn60b9A-k" title="الطائف المبهرة" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </Col>
                        </Row>

                    </div>
                }
            </Container>
        </>
    )
}

export default Media
