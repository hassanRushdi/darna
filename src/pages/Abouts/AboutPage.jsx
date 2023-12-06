import React, { useEffect } from 'react'
import Component from '../../constants/Component'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../constants/Img'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
const AboutPage = () => {
    let { t } = useTranslation()
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <div className='overflow-hidden about_us_home'>
            <Component.Video />
            <Component.Summary />
            <Component.About />
            <div className="app__about  ">
                <Container>
                    <Row className='mt-8 app__about_sm'>
                        <Col xl={6} lg={6} md={12} sm={12} className='mt-4'
                            data-aos={t("fade_right")}
                            data-aos-duration="1000"
                            data-aos-easing="ease-out-cubic">
                            <img src={img.About3} className='w-100 ' alt="" srcset="" />
                        </Col>

                        <Col xl={6} lg={6} md={12} sm={12} className='mt-4'>
                            <h1 data-aos={t("fade_left")}
                                data-aos-duration="1000"
                                data-aos-easing="ease-out-cubic">{t("about_us2_title")}</h1>
                            <p data-aos={t("fade_left")}
                                data-aos-duration="1000"
                                data-aos-delay="500"
                                data-aos-easing="ease-out-cubic">{t("about_us2_body1")} </p>
                            <p data-aos={t("fade_left")}
                                data-aos-duration="1000"
                                data-aos-delay="700"
                                data-aos-easing="ease-out-cubic" className='opacity-60'>{t("about_us2_body2")} </p>
                            <p data-aos={t("fade_left")}
                                data-aos-duration="1000"
                                data-aos-delay="800"
                                data-aos-easing="ease-out-cubic" className='opacity-60'>{t("about_us2_body3")} </p>
                            <p data-aos={t("fade_left")}
                                data-aos-duration="1000"
                                data-aos-delay="900"
                                data-aos-easing="ease-out-cubic" className='opacity-60'>{t("about_us2_body4")} </p>
                            <p data-aos={t("fade_left")}
                                data-aos-duration="1000"
                                data-aos-delay="1000"
                                data-aos-easing="ease-out-cubic" className='opacity-60'>{t("about_us2_body5")} </p>
                            <p data-aos={t("fade_left")}
                                data-aos-duration="1000"
                                data-aos-delay="1200"
                                data-aos-easing="ease-out-cubic" className='opacity-60'>{t("about_us2_body6")} </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Component.AboutUSHome />
            <Component.ProjectSites />


        </div>
    )
}

export default AboutPage
