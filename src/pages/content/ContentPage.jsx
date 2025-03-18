import AOS from 'aos'
import { motion } from 'framer-motion'
import cookies from 'js-cookie'
import { Button } from 'primereact/button'
import { InputText } from "primereact/inputtext"
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'
import Component from '../../constants/Component'
import Icons from '../../constants/Icons'
import img from '../../constants/Img'
import './contact.scss'

const ContentPage = () => {
    let { t } = useTranslation();
    let scrollContact = useRef(null)
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    const scrollDown = () => {
        scrollContact.current.scrollIntoView({ behavior: "smooth" });
    };
    useEffect(() => {
        AOS.init({
            once: false,
        });
        AOS.refresh();
    }, [])
    return (
        <>
            <Component.HeaderPage image={img?.ContentPage} title={t("nav_contact")} />
            <div className="app__contact_us overflow-hidden">
                <div className="app__service-home pt-45 pb-45"  >
                    <Container>
                        <Row className='mt-5 flex justify-content-center ' >
                            <Col xl={4} lg={4} className='flex mt-5 justify-content-center flex-column align-items-center' md={12} sm={12}>
                                <div data-aos="zoom-in"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-cubic">
                                    <Icons.Message />
                                </div>
                                <div className="content flex flex-column ">
                                    <div data-aos={t("fade_right")}
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-out-cubic">

                                        <h1>{t('contact_title3')}</h1>
                                        <p> {t('contact_des3')}</p>
                                    </div>
                                    <a data-aos={t("fade_right")}
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-out-cubic" href="https://wa.me/+201111353089" className='flex justify-content-center' target="_blank">
                                        <Button label={t('contact_btn1')} onClick={() => scrollDown()} />
                                    </a>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12} className='flex mt-5 justify-content-center flex-column align-items-center content_line'>
                                <div data-aos="zoom-in"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-cubic">
                                    <Icons.Calendar />
                                </div>
                                <div className="content flex flex-column ">
                                    <h1 data-aos="flip-left"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-out-cubic">{t('contact_title2')}</h1>
                                    <p data-aos="flip-left"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-out-cubic"> {t('contact_des2')}</p>
                                    <div data-aos="fade-up"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-out-cubic" className='flex   btn_mt-3 justify-content-center flex-column align-items-center'>
                                        <Button onClick={() => setModalShow(true)} label={t('contact_btn2')} />
                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={12} sm={12} className='flex  mt-5 justify-content-center flex-column align-items-center'>
                                <div data-aos="zoom-in"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-cubic">
                                    <Icons.Call />
                                </div>
                                <div className="content flex flex-column ">
                                    <div data-aos={t("fade_left")}
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-out-cubic">
                                        <h1>{t('contact_title1')}</h1>
                                        <p> {t('contact_des1')}</p>
                                    </div>
                                    <div data-aos={t("fade_left")}
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-out-cubic" className='flex    justify-content-center flex-column align-items-center'>
                                        <Button label={t('contact_btn3')} onClick={() => setModalShow(true)} />
                                    </div>
                                </div>
                            </Col>

                        </Row>

                        <Row ref={scrollContact} className='flex justify-content-center'>
                            <Col xl={6} lg={6} md={6} sm={12} className='mt-8'>
                                <div className="app__form_contact" >
                                    <div className="header" data-aos="flip-down"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-out-cubic">
                                        <h3>{t('contact_form1')}  </h3>
                                        <p>{t('contact_form2')}  </p>
                                    </div>
                                    <div className={`form flex flex-column gap-5 ${cookies.get('i18next') === "en" ? "mt-7" : "mt-7"}`}>
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                                            <InputText placeholder={t('contact_placeholder1')} className='w-100' />
                                        </div>
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500" data-aos-easing="ease-out-cubic">
                                            <InputText placeholder={t('contact_placeholder2')} className='w-100' />
                                        </div>
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="700" data-aos-easing="ease-out-cubic">
                                            <InputText placeholder={t('contact_placeholder3')} className='w-100' />
                                        </div>
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="900" data-aos-easing="ease-out-cubic">
                                            <Button label={t('contact_submit')} className='w-100' />
                                        </div>

                                    </div>
                                </div>
                            </Col>
                            <Col xl={4} lg={4} md={6} sm={12} className='mt-8'>
                                <div className="app__contect_contect h-100  ">
                                    <div className="logo gap-4 flex flex-column justify-content-center align-items-center">
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                                            <Icons.LOGO />
                                        </div>
                                        <div className="social flex flex-row justify-content-center align-items-center gap-3">
                                            <div className="social">
                                                <div className="social_media flex gap-3">
                                                    <motion.a
                                                        href={'https://www.facebook.com/darnarealstate/'}
                                                        target='_blank' rel="noreferrer"
                                                        whileHover={{ scale: 1.5 }}

                                                        className='m-0 p-0'
                                                        data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="500" data-aos-easing="ease-out-cubic"
                                                    >
                                                        <div style={{ width: '25px', height: '25px' }}>
                                                            <img src={img.facebook} className='w-100 object-fit-contain' alt="" srcset="" />
                                                        </div>
                                                    </motion.a>
                                                    {/*                             <motion.a
                                                        href={'https://www.facebook.com/'}
                                                        target='_blank' rel="noreferrer"
                                                        whileHover={{ scale: 1.5 }}

                                                        data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="700" data-aos-easing="ease-out-cubic"
                                                    >
                                                        <div style={{ width: '25px', height: '25px' }}>
                                                            <img src={img.twitter} className='w-100 object-fit-contain' alt="" srcset="" />
                                                        </div>
                                                    </motion.a> */}

                                                    <motion.a
                                                        href={'https://www.facebook.com/'}
                                                        target='_blank' rel="noreferrer"
                                                        whileHover={{ scale: 1.5 }}

                                                        data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="900" data-aos-easing="ease-out-cubic"

                                                    >
                                                        <div style={{ width: '25px', height: '25px' }}>
                                                            <img src={img.linkedin} className='w-100 object-fit-contain' alt="" srcset="" />
                                                        </div>
                                                    </motion.a>
                                                    <motion.a
                                                        href={'https://www.facebook.com/'}
                                                        target='_blank' rel="noreferrer"
                                                        whileHover={{ scale: 1.5 }}

                                                        data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="1000" data-aos-easing="ease-out-cubic"

                                                    >
                                                        <div style={{ width: '25px', height: '25px' }}>
                                                            <img src={img.youtube} className='w-100 object-fit-contain' alt="" srcset="" />
                                                        </div>
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="call mt-6">
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                                            <Icons.CallOutlite />
                                        </div>

                                        <div className="content">
                                            <h3 data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="1000" data-aos-easing="ease-out-cubic">{t('contact_phone')}</h3>
                                            <div className="  flex flex-row gap-5 call_sm">

                                                <div className="data flex flex-column " data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="500" data-aos-easing="ease-out-cubic">
                                                    <a href="tel:+201111353089" target="_blank" rel="noopener noreferrer" dir='ltr'>+201111353089</a>
                                                    {/* <a href="http://" target="_blank" rel="noopener noreferrer" dir='ltr'>+201122299909</a> */}
                                                </div>
                                                {/*      <div className="data flex flex-column " data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="700" data-aos-easing="ease-out-cubic">
                                                    <a href="http://" target="_blank" rel="noopener noreferrer" dir='ltr'>+201122299909</a>
                                                    <a href="http://" target="_blank" rel="noopener noreferrer" dir='ltr'>+201122299909</a>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="call mt-3">
                                        <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-out-cubic">
                                            <a href="https://www.google.com/maps/place/30%C2%B000'41.5%22N+31%C2%B024'45.7%22E/@30.0115242,31.4101105,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0115242!4d31.4126854?entry=ttu">
                                                <Icons.location />
                                            </a>
                                        </div>
                                        <div className="content call_sm " >
                                            <h3 data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="500" data-aos-easing="ease-out-cubic" className='m-0 p-0'>{t('contact_address_tiltle')}</h3>
                                            <a href="https://www.google.com/maps/place/30%C2%B000'41.5%22N+31%C2%B024'45.7%22E/@30.0115242,31.4101105,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0115242!4d31.4126854?entry=ttu">
                                                <p data-aos={t('fade_left')} data-aos-duration="2000" data-aos-delay="700" data-aos-easing="ease-out-cubic" className={`ml-0 ${cookies.get('i18next') === "en" ? "text-left" : 'text-right'}  m-0  w-75`}> {t('contact_address')}</p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

            <Modal show={modalShow} centered onHide={() => setModalShow(false)} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton={false}>
                    <Modal.Title id="contained-modal-title-vcenter"  /* className='  flex justify-content-center align-items-center w-100' */>
                        <img src={img.Logo} style={{ width: '130px', height: '50px' }} alt="" className='object-fit-contain' />
                    </Modal.Title>
                    <div className="custom-close-button" onClick={() => setModalShow(false)}>
                        <Icons.CloseBtn className="logoSvg mx-2" style={{ width: 35 }} />
                    </div>

                </Modal.Header>
                <Modal.Body className="grid-example">
                    <Container>
                        <Row>
                            <Col xs={12} md={8}>
                                <h2 className='title_header'>{t('form_text')}</h2>
                            </Col>

                        </Row>

                        <Row className='flex justify-content-center'>
                            <Col xl={12} lg={12} md={12} sm={12} className='mt- '>
                                <div className="app__form_contact app__form_contact2 ">


                                    <div className={`form flex flex-column gap-5  mt-4`}>
                                        <div className="grop_form">
                                            <label htmlFor="" className='mb-1'>  {t('contact_placeholder1')}</label>
                                            <InputText size={'small'} className='w-100' />
                                        </div>
                                        <div className="grop_form">
                                            <label htmlFor="" className='mb-1'>{t('contact_placeholder2')}</label>
                                            <InputText size={'small'} className='w-100' />
                                        </div>
                                        <div className="grop_form">
                                            <label htmlFor="" className='mb-1'> {t('contact_placeholder3')}</label>
                                            <InputText size={'small'} className='w-100' />
                                        </div>
                                        <Button label={t('contact_submit')} />

                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ContentPage
