import AOS from 'aos'
import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import img from '../../../constants/Img'
import './about_home.scss'

const AboutUSHome = () => {
    let { t } = useTranslation()
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <div className="app__AboutUS_Home">
                <div className='container_about_us '>
                    <div className="item3">
                        <Row className='item1_sm'>
                            <Col xl={4} lg={4} md={6} sm={12}>
                                <div className="app__about_overlay"
                                    data-aos={t("fade_left")}
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-out-cubic">
                                    <img src={img.project3} className='w-100  h-100' height={'346px'} />
                                    <div className="overlay"></div>
                                </div>
                            </Col>
                            <Col xl={8} lg={8} md={6} sm={12} >
                                <div className="content   h-100"
                                    data-aos={t("fade_left")}
                                    data-aos-duration="2000" // تحديد التأخير بواسطة data-aos-delay
                                    data-aos-easing="ease-in-out">
                                    <h4>{t('our_vision')}</h4>
                                    <p>{t('our_vision_dec')}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="item2">
                        <Row className='item2_sm'>
                            <Col xl={8} lg={8} md={6} sm={12} >
                                <div className="content   h-100"
                                    data-aos={t("fade_left")}
                                    data-aos-duration="2000" // تحديد التأخير بواسطة data-aos-delay
                                    data-aos-easing="ease-in-out">
                                    <h4>{t('our_goals')}</h4>
                                    <p>{t('our_goals_dec')}</p>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={12}>
                                <div className="app__about_overlay2"
                                    data-aos={t("fade_left")}
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-out-cubic">
                                    <img src={img.project1} className='w-100  h-100' height={'346px'} />
                                    <div className="overlay"></div>
                                </div>
                            </Col>

                        </Row>
                    </div>

                    <div className="item1">
                        <Row className='item1_sm'>
                            <Col xl={4} lg={4} md={6} sm={12}>
                                <div className="app__about_overlay"
                                    data-aos={t("fade_left")}
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-out-cubic">
                                    <img src={img.project1} className='w-100  h-100' height={'346px'} />
                                    <div className="overlay"></div>
                                </div>
                            </Col>
                            <Col xl={8} lg={8} md={6} sm={12} >
                                <div className="content   h-100"
                                    data-aos={t("fade_left")}
                                    data-aos-duration="2000" // تحديد التأخير بواسطة data-aos-delay
                                    data-aos-easing="ease-in-out">
                                    <h4>{t('our_values')}</h4>
                                    <p>{t('our_values_dec')}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUSHome