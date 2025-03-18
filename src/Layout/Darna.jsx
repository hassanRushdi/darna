import cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation } from 'react-router-dom';
import Component from '../constants/Component';
import Icons from '../constants/Icons';
import '../style/App.scss';
import { Col, Container, Row, Modal } from 'react-bootstrap'
import { InputText } from "primereact/inputtext"
import { Button } from 'primereact/button'
import { motion } from 'framer-motion';
import img from '../constants/Img';

const Darna = () => {
    const location = useLocation();
    let { t } = useTranslation();
    const [modalShow, setModalShow] = useState(false);
    const [navBarBg, setnavBarBg] = useState('navbar-nav');
    const [showSocialLeftApp, setShowSocialLeftApp] = useState(false);

    useEffect(() => {
        if (location.pathname !== '/') {
            setnavBarBg('navbar-nav');
        } else {
            setnavBarBg('navbar-navOnthorPAge');
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    const handleScroll = () => {
        if (window.scrollY >= 500) {
            setShowSocialLeftApp(true);
        } else {
            setShowSocialLeftApp(false);
        }
    };
    return (
        <div className='relative '>

            <Component.NavBar navbarColor={navBarBg} />
            <div style={{ position: 'relative' }}  >
                <Outlet></Outlet>
            </div>
            <Component.Footer />

            <div className={`${cookies.get('i18next') === "en" ? 'chatEn' : 'chatAr'} chat shadow-4`} onClick={() => setModalShow(true)}>
                <Icons.CallFill />
                <span>{t('call_us')}</span>
            </div>
            {showSocialLeftApp && (
                <>
                    <div className="social_left_app flex gap-2">

                        <motion.a
                            href={'https://www.youtube.com/'}
                            target='_blank' rel="noreferrer"
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="facebook" data-aos="fade-down" data-aos-duration="2000" data-aos-delay={1100} >
                                <img src={img.facebook} alt="" className='w-100' />
                            </div>
                        </motion.a>


                        <motion.a
                            href={'https://www.youtube.com/'}
                            target='_blank' rel="noreferrer"
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="linkedin" data-aos="fade-down" data-aos-duration="2000" data-aos-delay={900} >
                                <img src={img.linkedin} alt="" className='w-100' />
                            </div>
                        </motion.a>


                        <motion.a
                            href={'https://www.youtube.com/'}
                            target='_blank' rel="noreferrer"
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="youtube" data-aos="fade-down" data-aos-duration="2000" data-aos-delay={700} >
                                <img src={img.youtube} alt="" className='w-100' />
                            </div>
                        </motion.a>



                        <motion.a
                            href="https://wa.me/+201111353089"
                            target='_blank' rel="noreferrer"
                            whileHover={{ scale: 1.3 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="whatsapp" data-aos="fade-down" data-aos-duration="2000" data-aos-delay={500} >
                                <img src={img.whatsapp} alt="" className='w-100' />
                            </div>
                        </motion.a>
                        {/* 
                        <a href={'https://www.linkedin.com/'} target='_blank' rel="noreferrer"  >
                            <div className="linkedin" data-aos="fade-down" data-aos-duration="2000" data-aos-delay={900} >
                                <img src={img.linkedin} alt="" className='w-100' />
                            </div>
                        </a> */}
                        {/* <a href={'https://www.twitter.com/'} target='_blank' rel="noreferrer"  >
                            <div className="twitter" data-aos="fade-down" data-aos-duration="2000" data-aos-delay={700}>
                                <img src={img.twitter} alt="" className='w-100' />
                            </div>
                        </a> */}

                        <a href={'https://www.youtube.com/'} target='_blank' rel="noreferrer"  >

                        </a>

                    </div>

                    <div className="social_left_app_hotline" data-aos="fade-down" data-aos-duration="1000">
                        <motion.a
                            href={`tel:17347`}
                            target='_blank' rel="noreferrer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.3 }}
                            className='flex flex-row gap-2 align-items-center hotline'

                        >
                            <Icons.Phone className='navbar-sm-icons-phone' />  <span className='text-light  '>17347</span>
                        </motion.a>

                    </div>
                </>
            )}

            <Modal show={modalShow} centered onHide={() => setModalShow(false)} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton={false} className='bg-black' >

                    <Modal.Title id="contained-modal-title-vcenter"   /* className='  flex justify-content-center align-items-center w-100' */>
                        <img src={img.Logo} style={{ width: '100%', height: '80px' }} alt="" className='object-fit-contain' />
                    </Modal.Title>
                    <div className="custom-close-button" onClick={() => setModalShow(false)}>
                        <Icons.CloseBtn className="logoSvg mx-2 cursor-pointer" style={{ width: 35 }} />
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
        </div>

    )
}

export default Darna